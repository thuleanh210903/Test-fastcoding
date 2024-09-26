document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.querySelector(".navbar-menu-icon"); // Icon menu
    var navbarList = document.querySelector(".navbar-mobile-menu"); // Danh sách nav
  
    menuIcon.addEventListener("click", function() {
      navbarList.classList.toggle("active");
    });
  });