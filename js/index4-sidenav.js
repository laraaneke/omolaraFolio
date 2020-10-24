
document.addEventListener('DOMContentLoaded', function () {
    // roll over hamburger icon *fix lag and add on click/////////////////////////////

    const hamIcon = document.getElementById("ham");
    const sidebar = document.getElementById("sidebar");

    hamIcon.addEventListener("mouseenter", () => {
        // alert("over");
        sidebar.setAttribute(
            "style",
            "display: block; animation: fadeIn 1.75s ease;"
        );
        // sidebar.removeAttribute("style", " animation:fadeIn 1.75s ease");
    });
    // animation:fadeIn 1.75s ease;

    sidebar.addEventListener("mouseleave", () => {
        // alert("over");
        sidebar.setAttribute(
            "style",
            " display: none; animation: fadeOut 1.75s ease;"
        );
    });
});