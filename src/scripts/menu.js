const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

menu?.addEventListener("click", (e) => {
  const isExpanded = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", `${!isExpanded}`);
});

document.addEventListener("click", (e) => {
  const isExpanded = menu?.getAttribute("aria-expanded") === "true";

  if (isExpanded && !e.target.closest(".menu, .nav-links")) {
    menu.setAttribute("aria-expanded", "false");
  }
});
