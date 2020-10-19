document.addEventListener('DOMContentLoaded', function () {
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
});