const toggleMenuElement = document.getElementById("toggle-menu");
const menuElement = document.getElementById("menu");
const iconHamburgerElement = document.getElementById("icon-hamburger");

function toggleMenu() {
	console.log("click click");
	menuElement.classList.toggle("hide");
	iconHamburgerElement.src = "./assets/images/icon-close.svg";

	
}

toggleMenuElement.addEventListener("click", toggleMenu);
