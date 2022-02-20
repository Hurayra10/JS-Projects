var bgNavbar = document.getElementById("bgNavbar");

window.onscroll = function(){
    var scrollNav =  window.scrollY;

    if(scrollNav >= 100){
        bgNavbar.classList.add("after-scroll-navbar");
    }else{
        bgNavbar.classList.remove("after-scroll-navbar");
    }

}