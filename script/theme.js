const button = document.getElementById("change-theme");
const body = document.body;
const colors = ["#FCE4EC", "#FAF3E0", "#E0F7FA", "#F4F7FF"];
let i = 0; 
button.addEventListener("click", function() {
    if (i < colors.length - 1) { i++; } 
    else {i= 0;}
    body.style.backgroundColor = colors[i];
});