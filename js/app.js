/*============================================================
    Build.me

    File: app.js

============================================================*/

console.log("🚀 Build.me Initialized");

const rocket=document.querySelector(".rocket");
const smoke=document.querySelector("#smoke");
const launchButton=document.querySelector("#launch-mission");
const missionControl=document.querySelector("#mission-control");

launchButton.addEventListener("click",()=>{

    launchButton.disabled=true;

    rocket.classList.add("launch");

    setTimeout(()=>{

        smoke.classList.add("show");

    },180);

    setTimeout(()=>{

        missionControl.classList.add("show");

    },950);

});