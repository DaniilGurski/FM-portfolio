import * as utilFunctions from "./modules/utils.js";

const projectBanner      = document.querySelector("#project-banner");
const projectName        = document.querySelector("#project-name");
const projectDesc        = document.querySelector("#project-desc");
const projectDev         = document.querySelector("#project-development");
const projectPreviewList = document.querySelector("#project-previews");
const projectSwitcher    = document.querySelector("#project-switcher");

let projectData = null;
let projectKey         = localStorage.getItem("projectViewKey");
let capitalizedProjectKey = utilFunctions.capitalize(projectKey);


function setSrcPath(picture, pathes) {
    const sourceElements = picture.querySelectorAll("source");
    const imageElement = picture.querySelector("img");
    const mobilePathIndex = sourceElements.length;
    
    sourceElements.forEach((source, index) => {
        const path = pathes[index];
        source.setAttribute("srcset", path);
    })

    // set mobile images for image element itself.
    imageElement.setAttribute("src", pathes[mobilePathIndex])
    imageElement.setAttribute("srcset", pathes[mobilePathIndex - 1])
}


function setAdjacentProjectDisplays(data, indexPair) {
    const projectArray       = Object.keys(data); 

    const nextProjectSwitch  = projectSwitcher.querySelector("[data-switch-to='next'");
    const prevProjectSwitch  = projectSwitcher.querySelector("[data-switch-to='prev'");
    const nextProjectName    = nextProjectSwitch.getAttribute("data-project");
    const prevProjectName    = prevProjectSwitch.getAttribute("data-project");
    
    const nextProjectDisplay = nextProjectSwitch.querySelector("#next-project");
    const prevProjectDisplay = prevProjectSwitch.querySelector("#prev-project");
    
    prevProjectSwitch.dataset.project  = projectArray[indexPair[0]];
    nextProjectSwitch.dataset.project  = projectArray[indexPair[1]];

    nextProjectDisplay.textContent = utilFunctions.capitalize(nextProjectSwitch.dataset.project);
    prevProjectDisplay.textContent = utilFunctions.capitalize(prevProjectSwitch.dataset.project);
}



function switchProjectView(event) {
    const container = event.currentTarget;
    const eventTarget = event.target;

    if (eventTarget.closest("[data-interactable]")) {
        localStorage.setItem("projectViewKey", container.dataset.project);
        projectKey = localStorage.getItem("projectViewKey");
        capitalizedProjectKey = utilFunctions.capitalize(projectKey);

        setUpProjectResources();
    }
}



async function loadProjectData() {
    if (projectData === null) {
        const res = await fetch("/project-data.json");
    
        if (!res.ok) {
            throw new Error("error fetching data")
        }
    
        const data = await res.json();
        projectData = data;
    }

    return projectData;
}


async function setUpProjectResources() {
    const data = await loadProjectData();
    const projectData     = data[projectKey];
    const {banner, description, development, staticPreviews} = projectData;
    const {previousKeyIndex, nextKeyIndex} = utilFunctions.getAdjacentKeys(data, projectKey);
    
    // set banner image
    setSrcPath(projectBanner, banner);
    
    // set project text info
    projectName.textContent = capitalizedProjectKey;
    projectDesc.textContent = description;
    projectDev.textContent  = development;
    
    // set static previews
    projectPreviewList.querySelectorAll("picture").forEach((picture, index) => {
        const staticPreviewPathes = staticPreviews[index];
        setSrcPath(picture, staticPreviewPathes)
    })
    
    // set next, prev project displays and switch between project views
    setAdjacentProjectDisplays(data, [previousKeyIndex, nextKeyIndex])

    projectSwitcher.querySelectorAll("[data-switch-to]").forEach(switchSection => {
        switchSection.addEventListener("click", switchProjectView);
    })
}

setUpProjectResources()

