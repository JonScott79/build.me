/*============================================================
    LANZAR

    File: app.js
============================================================*/

console.log("🚀 LANZAR Initialized");

/*============================================================
    Launch Animation
============================================================*/

const rocket = document.querySelector(".rocket");
const smoke = document.querySelector("#smoke");
const launchButton = document.querySelector("#launch-mission");
const welcome = document.querySelector("#welcome-panel");

/*============================================================
    Views
============================================================*/

const consoleView = document.querySelector("#console-view");
const meetView = document.querySelector("#meet-view");
const servicesView = document.querySelector("#services-view");
const portfolioView = document.querySelector("#portfolio-view");
const contactView = document.querySelector("#contact-view");
const btnContact = document.querySelector("#btn-contact");
const nextContact = document.querySelector("#next-contact");
const backPortfolio = document.querySelector("#back-portfolio");

/*============================================================
    Menu Buttons
============================================================*/

const btnMeetJon = document.querySelector("#btn-meet-jon");
const btnServices = document.querySelector("#btn-services");
const btnPortfolio = document.querySelector("#btn-portfolio");
const btnBooking = document.querySelector("#btn-booking");

/*============================================================
    Navigation Buttons
============================================================*/

const backConsole = document.querySelector("#back-console");
const backMeet = document.querySelector("#back-meet");
const backServices = document.querySelector("#back-services");

const nextServices = document.querySelector("#next-services");
const nextPortfolio = document.querySelector("#next-portfolio");

/*============================================================
    Launch
============================================================*/

launchButton.addEventListener("click", () => {
  launchButton.disabled = true;

  rocket.classList.add("launch");

  setTimeout(() => {
    smoke.classList.add("show");
  }, 180);

  setTimeout(() => {
    welcome.classList.add("show");
  }, 900);
});

/*============================================================
    Console Menu
============================================================*/

btnMeetJon.addEventListener("click", (e) => {
  e.preventDefault();

  consoleView.style.display = "none";
  meetView.style.display = "block";
});

btnServices.addEventListener("click", (e) => {
  e.preventDefault();

  consoleView.style.display = "none";
  servicesView.style.display = "block";
});

btnPortfolio.addEventListener("click", (e) => {
  e.preventDefault();

  consoleView.style.display = "none";
  portfolioView.style.display = "block";
});

/*============================================================
    Meet Jon
============================================================*/

backConsole.addEventListener("click", () => {
  meetView.style.display = "none";
  consoleView.style.display = "block";
});

nextServices.addEventListener("click", () => {
  meetView.style.display = "none";
  servicesView.style.display = "block";
});

/*============================================================
    Services
============================================================*/

backMeet.addEventListener("click", () => {
  servicesView.style.display = "none";
  meetView.style.display = "block";
});

nextPortfolio.addEventListener("click", () => {
  servicesView.style.display = "none";
  portfolioView.style.display = "block";
});

/*============================================================
    Portfolio
============================================================*/

backServices.addEventListener("click", () => {
  portfolioView.style.display = "none";
  servicesView.style.display = "block";
});

/*============================================================
    Contact
============================================================*/

btnContact.addEventListener("click", () => {
  consoleView.style.display = "none";
  contactView.style.display = "block";
});

nextContact.addEventListener("click", () => {
  portfolioView.style.display = "none";

  contactView.style.display = "block";
});

backPortfolio.addEventListener("click", () => {
  contactView.style.display = "none";

  portfolioView.style.display = "block";
});

/*============================================================
    Booking
============================================================*/

btnBooking.addEventListener("click", () => {
  window.open("https://lanzar.zohobookings.com/lanzar/#/lanzar", "_blank");
});
