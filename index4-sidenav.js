
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

    //gallery controls
    var stream = document.querySelector('.gallery__image-section');
    var items = document.querySelectorAll('.gallery__item');
    var prev = document.querySelector('.gallery__prev');
    var next = document.querySelector('.gallery__next');
    prev.addEventListener('click', function () {
        // parent.insertBefore(newitem, currlist)
        stream.insertBefore(items[items.length - 1], items[0]);
        //get new list of items
        items = document.querySelectorAll('.gallery__item');
    });
    next.addEventListener('click', function () {
        // parentNode.appendChild(send item to back of list)
        stream.appendChild(items[0]);
        // get new list of items 
        items = document.querySelectorAll('.gallery__item');
    });



    //about btn


});