const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    const trimmed = event.currentTarget.value.trim();
    if (trimmed === "") {
        output.textContent = "Anonymous";
    } else {
        output.textContent = trimmed;
    }
});

