const form = document.querySelector("#form");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function markInvalidInput(input, errorMessage) {
    input.setAttribute("data-invalid", "");
    input.closest("label").dataset.error=errorMessage;
}


const isInputInvalid = (inputElement) => {
    const inputId    = inputElement.id;
    const inputValue = inputElement.value;


    // catch invalid email input, mark the input field and return to an array
    if (inputId === "email-input" && !emailRegex.test(inputValue)) {
        markInvalidInput(inputElement, "Please use a valid email address");
        return inputElement;
    }


    // style inputfield, set error message and return empty input to an array
    if (inputElement.value === "") {
        markInvalidInput(inputElement, "This field is required");
        return inputElement
    }


    // remove invalid input styling
    inputElement.removeAttribute("data-invalid");
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputArray   = [...form.querySelectorAll("input"), ...form.querySelectorAll("textarea")];
    const invalidInputs  = inputArray.filter(isInputInvalid);

    if (!invalidInputs.length) {
        console.log("form submitted !")
    }
});