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

/*============================================================
    Menu Buttons
============================================================*/

const btnMeetJon = document.querySelector("#btn-meet-jon");
const btnServices = document.querySelector("#btn-services");
const btnPortfolio = document.querySelector("#btn-portfolio");
const btnContact = document.querySelector("#btn-contact");
const btnBooking = document.querySelector("#btn-booking");

/*============================================================
    View Helpers
============================================================*/

function showView(view) {
  [
    consoleView,
    meetView,
    servicesView,
    portfolioView,
    contactView,
  ].forEach((v) => (v.style.display = "none"));

  view.style.display = "block";
}

function returnToConsole() {
  showView(consoleView);
}

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

btnMeetJon.addEventListener("click", () => showView(meetView));

btnServices.addEventListener("click", () => showView(servicesView));

btnPortfolio.addEventListener("click", () => showView(portfolioView));

btnContact.addEventListener("click", () => showView(contactView));

/*============================================================
    Panel Close Buttons
============================================================*/

document.querySelectorAll(".panel-close").forEach((button) => {
  button.addEventListener("click", returnToConsole);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && consoleView.style.display === "none") {
    returnToConsole();
  }
});

/*============================================================
    Booking
============================================================*/

btnBooking.addEventListener("click", () => {
  window.open(
    "https://lanzar.zohobookings.com/lanzar/#/lanzar",
    "_blank"
  );
});