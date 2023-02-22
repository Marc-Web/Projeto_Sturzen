$('.owl-carousel').owlCarousel({
    loop:true,
    nav: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

function mudaClasseNavBar() {
  let elementoDiv = document.getElementById("topNavBar");
  if (elementoDiv.className === "navBar") {
    elementoDiv.className += " responsive";
  } else {
    elementoDiv.className = "navBar";
  }
};
