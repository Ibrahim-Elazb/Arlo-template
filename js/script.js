// -----------------------------  NavBar Change on Scroll  ------------------
const navBar=document.getElementById("website-navbar");
const logo_image=document.querySelector("#website-navbar .navbar-brand img");
const mainNavBarLinks=document.querySelectorAll("#website-navbar .nav-link");
window.onscroll=function (){
let top=window.scrollY;
console.log(top);
    if(top>=100){
        navBar.classList.add("bg-light");
        navBar.classList.remove("navbar-dark");
        navBar.classList.add("navbar-light");
        logo_image.src="images/logo_dark.png"
        mainNavBarLinks.forEach((listItem)=>listItem.classList.add("dark-links"));
        }else{
        navBar.classList.remove("bg-light");
        navBar.classList.remove("navbar-light");
        navBar.classList.add("navbar-dark");
        logo_image.src="images/logo_white.png"
        mainNavBarLinks.forEach((listItem)=>listItem.classList.remove("dark-links"));
        }
}
// ------------------------------  Animated Typing   -----------------------------------------
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);

    galleryRefresh();
};





// ----------------- open color Pallette -------------------------
const colorPallette=document.querySelector(".color-palette");
const colorPalletteBtn=document.querySelector(".color-palette .icon-container");
colorPalletteBtn.addEventListener("click",function(){
colorPallette.classList.toggle("active");
});