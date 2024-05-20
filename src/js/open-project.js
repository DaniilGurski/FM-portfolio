const projectList = document.querySelector("#project-list");
const projects = Array.from(projectList.children);

projects.forEach((project) => {
    const key = project.dataset.project;
    const viewProject = project.querySelector(".button")    // a element

    viewProject.addEventListener("click", () => {
        localStorage.setItem("projectViewKey", key);
    })
})
