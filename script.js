const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#menu-icon').onclick = (e) => {
  navbarNav.classList.toggle('active');
  e.preventDefault();
}

const mi = document.querySelector('#menu-icon');
document.addEventListener("click", function (e) {
    if (!mi.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    };
  });

