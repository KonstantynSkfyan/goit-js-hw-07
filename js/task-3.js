const inputName = document.getElementById(`name-input`);
const outputName = document.getElementById(`name-output`);

inputName.addEventListener("input", greetName);

function greetName(event) {
  outputName.textContent = event.currentTarget.value.trim() || "Anonymous";
}
