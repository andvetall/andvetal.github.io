window.addEventListener("scroll", bringmenu);

function bringmenu() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.querySelector(".navigation").style.top = "-10%";
    } else {
        document.querySelector(".navigation").style.top = "0";
    }
}