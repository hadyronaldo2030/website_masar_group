//========================= Dark Mode & Light Mode =========================
$(document).ready(function() {
  let currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    $("html").attr("data-theme", currentTheme);

    if (currentTheme === "darkMode") {
      $(".themeicon.btnLight").addClass("d-none");
      $(".themeicon.fa-moon").removeClass("d-none");
    } else if (currentTheme === "lightMode") {
      $(".themeicon.btnLight").removeClass("d-none");
      $(".themeicon.fa-moon").addClass("d-none");
    }
  }

  $(".themeicons").click(function() {
    $(".themeicon").toggleClass("d-none");

    let currentTheme = $("html").attr("data-theme");
    if (currentTheme === "darkMode") {
      $("html").attr("data-theme", "lightMode");
      localStorage.setItem('theme', "lightMode");
    } else if (currentTheme === "lightMode") {
      $("html").attr("data-theme", "darkMode");
      localStorage.setItem('theme', "darkMode");
    }
  });
});
//============================== SaideBar ==============================
$(".toggle-sidebar").click(function () {
  $(".sidebar").toggleClass("open-close-aside");
});
//============================== alert button Support ==============================
$(".icon-support").click(function () {
  $(".box-support").addClass("d-flex");
  $(".box-support").removeClass("d-none");
});
$(".btn-close-support").click(function () {
  $(".box-support").addClass("d-none");
  $(".box-support").removeClass("d-flex");
});
//============================== alert button rating plans ==============================
$(".btn-rating-plan").click(function () {
  $(".box-rate").addClass("d-flex");
  $(".box-rate").removeClass("d-none");
});
$(".btn-close-rate").click(function () {
  $(".box-rate").addClass("d-none");
  $(".box-rate").removeClass("d-flex");
});
//============================== NavBar ==============================

let theEnd = 0;
navbar = document.getElementById('navbar');
const debounce = (func, delay) => {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, delay);
  };
};
const handleScroll = debounce(() => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > theEnd) {
    navbar.style.top = '-70px';
  } else {
    navbar.style.top = '0';
  }
  theEnd = scrollTop;
}, 10);
window.addEventListener('scroll', handleScroll);

//============================== LOADING ==============================
window.addEventListener('load', function() {
  var loadingOverlay = document.getElementById('loadingOverlay');
  loadingOverlay.style.display = 'none'; // يخفي شاشة التحميل عندما تحمل الصفحة بالكامل
});