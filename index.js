//jshint esversion:6



let appBar = window.pageYOffset;

  AOS.init();


window.addEventListener("scroll", function(){
  let actualLocomotion = window.pageYOffset;

  if(appBar >= actualLocomotion) {
    document.getElementsByTagName("nav")[0].style.top = "0px";
  } else {
    document.getElementsByTagName("nav")[0].style.top = "-100px";
  }
});

//Menu

let connectionHeader = document.querySelectorAll(".connection-header")[0];
let sLight = true;

document.querySelectorAll(".hamburger")[0].addEventListener("click", function() {
  if (sLight) {
    document.querySelectorAll(".hamburger")[0].style.color = "#fff";
    sLight = false;
  } else {
    document.querySelectorAll(".hamburger")[0].style.color = "#0082c8";
    sLight = true;
  }

  connectionHeader.classList.toggle("secondMenu");
});
