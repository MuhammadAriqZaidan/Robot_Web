const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
  menuNav.classList.toggle("menu-active");
});

const navBar = document.querySelector(".navbar");
const logoText = document.querySelector(".navbar .logo h1");
const navLinks = document.querySelectorAll(".navbar .menu li a");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);
  menuNav.classList.remove("menu-active");

  const textColor = windowPosition ? 'var(--text-color)' : '#FFFFFF';
  logoText.style.color = textColor;
  navLinks.forEach(link => {
    link.style.color = textColor;
  });
});
