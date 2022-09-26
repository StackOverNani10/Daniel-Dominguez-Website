//Scroll up function
document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp() {

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 10));
    }
}

buttonUp = document.getElementById("button-up");

window.onscroll = function () {

    var scroll = document.documentElement.scrollTop;

    if (scroll > 500) {
        buttonUp.style.transform = "scale(1)";
    } else if (scroll < 500) {
        buttonUp.style.transform = "scale(0)";
    }

}

//Menu bar background color change
var header = document.querySelector('header'),
    alturaHeader = parseFloat(getComputedStyle(header).height)

window.addEventListener('scroll', e => {
    var color, shadow
    if (window.scrollY < 100) {
        color = 'transparent'
        shadow = 'none'
    }
    else if (window.scrollY > 100) {
        color = 'var(--main-color)'
        shadow = '0 2px 8px var(--bg-color)'
    }
    header.style.setProperty('background', color)
    header.style.setProperty('box-shadow', shadow)
})
