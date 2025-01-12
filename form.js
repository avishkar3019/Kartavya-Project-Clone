/*form*/
document.addEventListener("DOMContentLoaded", () => {
    const userTypeSelect = document.getElementById("user-type");
    const universalForm = document.getElementById("universal-form");
    const shardaForm = document.getElementById("sharda-form");
  
    userTypeSelect.addEventListener("change", () => {
        const selectedValue = userTypeSelect.value;
  
        if (selectedValue === "universal") {
            universalForm.classList.remove("spy");
            shardaForm.classList.add("spy");
        } else if (selectedValue === "sharda") {
            shardaForm.classList.remove("spy");
            universalForm.classList.add("spy");
        }
    });
  });