var toggleButton = document.getElementById("toggle-high-contrast");

toggleButton.addEventListener("click", function() {
    var main = document.getElementsByTagName("main")[0];
    main.classList.toggle("high-contrast");
    
    if (toggleButton.innerText === "Enable High Contrast") {
        toggleButton.innerText = "Disable High Contrast";
    } else {
        toggleButton.innerText = "Enable High Contrast";
    }
});