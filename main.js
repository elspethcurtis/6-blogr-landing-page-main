  //hamburger menu

  let menu = document.querySelector(".menu");
  let ham = document.querySelector(".ham");
  let xIcon = document.querySelector(".x-icon");
  var menuIcon = document.querySelector(".menu-icon");  

  
  ham.addEventListener("click", toggleMenu);

  menu.classList.contains("showMenu");

  // toggle menu in and out when clicking on the hamburger
function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      xIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      menu.classList.add("showMenu");
      xIcon.style.display = "block";
      menuIcon.style.display = "none";
    }
  }

  let menuLinks = document.querySelectorAll(".menuLink");

  menuLinks.forEach( 
    function(menuLink) { 
      menuLink.addEventListener("click", toggleMenu);
    }
  )
  //HAMBURGER MENU navigation toggles

  $(".mbl-product-header").click(function(){
    $(".mbl-nav-list-product").slideToggle();
    $(".mbl-product-chevron-down").toggle();
    $(".mbl-product-chevron-up").toggle();
  });

  $(".mbl-company-header").click(function(){
    $(".mbl-nav-list-company").slideToggle();
    $(".mbl-company-chevron-down").toggle();
    $(".mbl-company-chevron-up").toggle();
  });

  $(".mbl-connect-header").click(function(){
    $(".mbl-nav-list-connect").slideToggle();
    $(".mbl-connect-chevron-down").toggle();
    $(".mbl-connect-chevron-up").toggle();
  });

//DESKTOP MENU navigation toggles
$(".product-header").click(function(){
    $(".product").toggle();
    $(".product-chevron-down").toggle();
    $(".product-chevron-up").toggle();
  });

  $(".company-header").click(function(){
    $(".company").toggle();
    $(".company-chevron-down").toggle();
    $(".company-chevron-up").toggle();
  });

  $(".connect-header").click(function(){
    $(".connect").toggle();
    $(".connect-chevron-down").toggle();
    $(".connect-chevron-up").toggle();
  });




