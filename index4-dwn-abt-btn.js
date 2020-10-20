const downBtn = document.querySelector(".intro__link");
const upBtn = document.querySelector(".empty__up-btn");

const galleryCont = document.querySelector(".gallery__container");
const introCont = document.querySelector(".page-container__intro");
const contactCont = document.querySelector(".contact__container");

const aboutBtn = document.querySelector("#js-aboutme");
const aboutContainer = document.querySelector(".about__container");

const sidebarLink = document.querySelectorAll(".sidebar__item");

const plotterBtns = document.querySelectorAll(".plotter-btn");
const weavingBackBtn = document.querySelector(".weave-back-btn");
const weavingCont = document.querySelector(".extended-weaving");
const weavingBtns = document.querySelectorAll(".weaving-btn");

const plotterCont = document.querySelector(".extended-plotter");
const plotterBackBtn = document.querySelector(".plotter-back-btn");


weavingBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        weavingCont.style.display = 'block'
        galleryCont.style.display = 'none';


    })
})
weavingBackBtn.addEventListener("click", e => {
    weavingCont.style.display = 'none'
    galleryCont.style.display = 'block';

})

plotterBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        plotterCont.style.display = 'block'
        galleryCont.style.display = 'none';
    })
})
plotterBackBtn.addEventListener("click", e => {
    plotterCont.style.display = 'none'
    galleryCont.style.display = 'block';

})

// home
sidebarLink[0].addEventListener("click", e => {
    introCont.style.display = "block";
    galleryCont.style.display = "none";
    aboutContainer.style.display = "none";
    //add contact none
    contactCont.style.display = "none";
})
// contact
sidebarLink[1].addEventListener("click", e => {
    introCont.style.display = "none";
    galleryCont.style.display = "none";
    aboutContainer.style.display = "none";
    //add contact block
    contactCont.style.display = "block";

})

// gallery
sidebarLink[2].addEventListener("click", e => {
    introCont.style.display = "none";
    galleryCont.style.display = "block";
    aboutContainer.style.display = "none";
    //add contact none
    contactCont.style.display = "none";

})
// about
sidebarLink[3].addEventListener("click", e => {
    introCont.style.display = "none";
    galleryCont.style.display = "none";
    aboutContainer.style.display = "block";
    //add contact none
    contactCont.style.display = "none";

})

aboutBtn.addEventListener("click", e => {

    if (aboutContainer.style.display === "block") {
        aboutBtn.innerHTML = "ABOUT";
        aboutContainer.style.display = "none";
        contactCont.style.display = "none";

        // introCont.style.display = "block";
        galleryCont.style.display = "block"
        // console.log(e);



    } else {
        contactCont.style.display = "none";
        aboutBtn.innerHTML = "CLOSE";
        aboutContainer.style.display = "block";

        introCont.style.display = "none";
        galleryCont.style.display = "none";
    }




})





downBtn.addEventListener("click", e => {

    contactCont.style.display = "none";
    galleryCont.style.display = "block";
    introCont.style.display = "none";

})
upBtn.addEventListener("click", e => {

    contactCont.style.display = "none";
    galleryCont.style.display = "none";
    introCont.style.display = "block";

})

