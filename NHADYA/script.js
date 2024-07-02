const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});



document.getElementById("submit").addEventListener("click", function() {
    alert("Form submitted successfully!");
});




