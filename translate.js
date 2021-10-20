import translations from "./translations.js";

const allkeys = document.querySelectorAll("[data-i18n]");
const langBtns = document.querySelectorAll(".lang");

// change style
function changeStyle(btn) {
	const btns = btn.parentNode.children;

	for (let node of btns) {
		node.classList.remove("active-color");
	}

	btn.classList.add("active-color");
}

// translate
function translate(currentLang) {
	allkeys.forEach((e, i) => {
		const keyvalue = e.dataset["i18n"];
		e.innerHTML = translations[currentLang][keyvalue];
	});
}

// save to localStorage
function setLocalLangAndTranslate() {
	const currentLang = this.matches("[class*=ru]") ? "ru" : "en";
	localStorage.setItem("lang", currentLang);
	changeStyle(this);
	translate(currentLang);
}

// switch lang
langBtns.forEach((btn) => {
	btn.addEventListener("click", setLocalLangAndTranslate);
});

// set language and change btn style
document.addEventListener("DOMContentLoaded", () => {
	let localLang = localStorage.getItem("lang");
	let userLang = navigator.language.slice(0, 2) || navigator.userLanguage.slice(0, 2) || "en";
	let currentLang = localLang ? localLang : userLang;

	translate(currentLang);

	langBtns.forEach((e) => {
		if (e.className.includes(currentLang)) changeStyle(e);
	});
});
