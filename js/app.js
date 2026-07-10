/*============================================================
    LANZAR

    File: app.js
============================================================*/

console.log("🚀 LANZAR Initialized");

const rocket=document.querySelector(".rocket");
const smoke=document.querySelector("#smoke");
const launchButton=document.querySelector("#launch-mission");
const welcome=document.querySelector("#welcome-panel");

const consoleView=document.querySelector("#console-view");
const meetView=document.querySelector("#meet-view");
const btnMeetJon=document.querySelector("#btn-meet-jon");
const backConsole=document.querySelector("#back-console");

launchButton.addEventListener("click",()=>{

    launchButton.disabled=true;

    rocket.classList.add("launch");

    setTimeout(()=>{

        smoke.classList.add("show");

    },180);

    setTimeout(()=>{

        welcome.classList.add("show");

    },900);

});

btnMeetJon.addEventListener("click",(e)=>{

    e.preventDefault();

    consoleView.style.display="none";

    meetView.style.display="block";

});

backConsole.addEventListener("click",()=>{

    meetView.style.display="none";

    consoleView.style.display="block";

});