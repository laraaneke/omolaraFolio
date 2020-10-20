const infoBtns = document.querySelectorAll(".info-btn");
// console.log(infoBtn)
const galleryItems = document.querySelectorAll(".gallery__item");
const overlayTexts = document.querySelectorAll(".gallery__overlay-text");
const galControls = document.querySelectorAll(".gallery__controls");


infoBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        overlayTexts.forEach(overlayText => {

            if (overlayText.style.visibility === "visible") {
                overlayText.style.visibility = "hidden";

                for (const control of galControls) {
                    control.style.visibility = "visible";
                }

                for (const item of galleryItems) {
                    // item.style.backgroundColor = "rgb(20, 20, 19)";
                    item.style.backgroundBlendMode = ""
                }

            } else {
                overlayText.style.visibility = "visible";

                for (const control of galControls) {
                    control.style.visibility = "hidden";
                }

                for (const item of galleryItems) {
                    // item.style.backgroundColor = "rgb(20, 20, 19)";
                    item.style.backgroundBlendMode = "multiply"
                }
            }

        });

        if (btn.innerHTML === 'info') {
            btn.innerHTML = 'Less';
            btn.style.textOrientation = 'upright';
            btn.style.writingMode = "horizontal-tb";

        } else {
            btn.innerHTML = 'info';
            btn.style.textOrientation = 'mixed'
            btn.style.writingMode = "vertical-rl";

        }

    })
})
