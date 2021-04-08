$(".product-header").click(function(){
    $(".product").toggle();
  });

  $(".company-header").click(function(){
    $(".company").toggle();
  });

  $(".connect-header").click(function(){
    $(".connect").toggle();
  });


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