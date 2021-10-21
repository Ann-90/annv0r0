// toggle visibility
const header = document.querySelector(".header.is-hidden");
const showHeader = document.querySelector(".hero .is-show");
const closeHeader = document.querySelector(".header .is-close");

const formcard = document.querySelector(".contacts__formcard.is-hidden");
const sendbtn = document.querySelector(".contacts .is-show");
const closebtn = document.querySelector(".contacts .is-close");

function addListener(arr, elem) {
	arr.forEach((el) => {
		el.addEventListener("click", () => {
			elem.classList.toggle("is-hidden");
		});
	});
}

addListener([showHeader, closeHeader], header);
addListener([sendbtn, closebtn], formcard);

//carousel
const choser = document.querySelectorAll(".carousel-switch div");
const carousel = document.querySelector(".skill__container");
const carouselArrows = document.querySelectorAll(".skill__arrow");

choser.forEach((e) => {
	e.addEventListener("click", (event) => {
		if (event.currentTarget === choser[0]) {
			carousel.scrollLeft -= 450;
		} else {
			carousel.scrollLeft += 450;
		}
	});
});

carouselArrows.forEach((e) => {
	e.addEventListener("click", (event) => {
		event.stopPropagation();
		if (event.currentTarget === carouselArrows[0]) {
			carousel.scrollLeft -= 450;
		} else {
			carousel.scrollLeft += 450;
		}
	});
});

let initialPosition = 0;
carousel.addEventListener("scroll", (event) => {
	choser.forEach((elem) => {
		elem.classList.remove("chosenSwitch");
	});
	event.currentTarget.scrollLeft > event.currentTarget.scrollHeight / 2
		? choser[1].classList.add("chosenSwitch")
		: choser[0].classList.add("chosenSwitch");

	if (initialPosition < event.currentTarget.scrollLeft) {
		carouselArrows[1].style.textShadow = "1px 1px 2px black";
	}
	if (initialPosition === event.currentTarget.scrollLeft || initialPosition > event.currentTarget.scrollLeft) {
		carouselArrows[0].style.textShadow = "1px 1px 2px black";
	}
	initialPosition = event.currentTarget.scrollLeft - 1;

	setTimeout(() => {
		carouselArrows.forEach((e) => {
			e.style.textShadow = "none";
		});
	}, 1000);
});

// TODO: form submit

// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
// 	e.preventDefault();

// 	fetch("/api/telegramHandle.js", {
// 		method: "post",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify({
// 			name: e.target["name"]?.value,
// 			email: e.target["address"]?.value,
// 			letter: e.target["letter"]?.value,
// 		}),
// 	})
// 		.then((r) => console.log(`Успешный запрос: ${r.ok}, ${r.url}`))
// 		.catch((e) => console.log(`Запрос не обработан: ${e}`));
// });
