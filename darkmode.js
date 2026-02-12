document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.querySelector(".dark-mode-toggle");
    const body = document.body;
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    
    if (isDarkMode) {
        body.classList.add("dark-mode");
        if(darkModeToggle.querySelector("img")) {
            darkModeToggle.querySelector("img").src = "images/soleil.png";
        }
    }
    
    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        const isDarkModeEnabled = body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDarkModeEnabled);
        
        const img = darkModeToggle.querySelector("img");
        if (img) {
            img.src = isDarkModeEnabled ? "images/soleil.png" : "images/soleil-dark.png";
        }
    });
});