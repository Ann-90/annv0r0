import translations from "./translations.js";

const allkeys = document.querySelectorAll("[name]");
const langBtns = document.querySelectorAll(".lang");

// translate
function translate(currentLang) {
	allkeys.forEach((e, i) => {
		const keyvalue = e.getAttribute("name");
		e.innerHTML = translations[currentLang][keyvalue];
	});
}

// save to localStorage
function setLocalLangAndTranslate() {
	const currentLang = this.matches("span[class*=ru") ? "ru" : "en";
	localStorage.setItem("lang", currentLang);
	translate(currentLang);
}

// switch lang
langBtns.forEach((btn) => {
	btn.addEventListener("click", setLocalLangAndTranslate);
});

// set language
document.addEventListener("DOMContentLoaded", () => {
	let localLang = localStorage.getItem("lang");
	let userLang = navigator.language.slice(0, 2) || navigator.userLanguage.slice(0, 2) || "en";

	localLang ? translate(localLang) : translate(userLang);
});
