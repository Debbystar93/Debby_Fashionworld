const menu = document.getElementById("menu");
const toggleButton = document.querySelector(".menu-toggle");
const menuItems = document.querySelectorAll('#menu a');
function toggleMenu() {
menu.classList.toggle("show");

if (menu.classList.contains("show")) {
toggleButton.setAttribute("aria-expanded", "true");
toggleButton.innerHTML = '&times;'; 
const firstMenuItem = menu.querySelector('a');
if (firstMenuItem) firstMenuItem.focus();
} else {
toggleButton.setAttribute("aria-expanded", "false");
toggleButton.innerHTML = '&#9776;';
}
}

document.addEventListener('keydown', (event) => {
const activeElement = document.activeElement;
if (activeElement && activeElement.getAttribute('role') === 'menuitem') {
const currentIndex = Array.prototype.indexOf.call(menuItems, activeElement);
if (event.key === 'ArrowDown') {

const nextIndex = (currentIndex + 1) % menuItems.length;
menuItems[nextIndex].focus();
event.preventDefault();
} else if (event.key === 'ArrowUp') {

const prevIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
menuItems[prevIndex].focus();
event.preventDefault();
} else if (event.key === 'Escape') {

if (menu.classList.contains("show")) {
menu.classList.remove("show");
toggleButton.setAttribute("aria-expanded", "false");
toggleButton.innerHTML = '&#9776;';
toggleButton.focus(); 
}
}
}
});

