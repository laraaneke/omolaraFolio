const galleryCont = document.querySelector(".gallery__container");
const introCont = document.querySelector(".page-container__intro");


const aboutBtn = document.querySelector("#js-aboutme");

aboutBtn.addEventListener("click", e => {
    if (introCont.style.display === "block") {
        introCont.style.display = "none";
        aboutBtn.innerHTML = "about";
    } else {
        introCont.style.display = "block";
        aboutBtn.innerHTML = "close";
    }

})