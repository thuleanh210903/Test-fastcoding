document.addEventListener("DOMContentLoaded", function () {
  var menuIcon = document.querySelector(".navbar-menu-icon"); // Icon menu
  var navbarList = document.querySelector(".navbar-mobile-menu"); // Danh sách nav

  menuIcon.addEventListener("click", function () {
    navbarList.classList.toggle("active");
  });



  var dots = document.querySelectorAll(".hero-content_dot"); 
  var banners = document.querySelectorAll(".hero-content_banner"); 

  function changeSlide(index) {
    banners.forEach(function (banner) {
      banner.classList.add("hidden");
    });

    dots.forEach(function (dot) {
      dot.classList.remove("hero-content_dot--active");
    });

    banners[index].classList.remove("hidden");
    dots[index].classList.add("hero-content_dot--active");
  }

  dots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
      changeSlide(index);
    });
  });
});


