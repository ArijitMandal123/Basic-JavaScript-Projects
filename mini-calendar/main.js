const month = document.querySelector(".month");
const year = document.querySelector(".year");
const day_name = document.querySelector(".day-name");
const day_number = document.querySelector(".day-number");

const date = new Date();
month.innerText = date.toLocaleString("en", {
  month: "long",
});

day_name.innerText = date.toLocaleString("en", {
  weekday: "long",
});

day_number.innerText = date.getDate();

year.innerText = date.getFullYear();
