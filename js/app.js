/*============================================================
    LANZAR

    File: app.js
============================================================*/

import { loginWithGoogle } from "./firebase/auth.js";
import { userExists } from "./firebase/firestore.js";

console.log("🚀 LANZAR Initialized");

const rocket=document.querySelector(".rocket");
const smoke=document.querySelector("#smoke");
const launchButton=document.querySelector("#launch-mission");
const missionControl=document.querySelector("#mission-control");
const googleButton=document.querySelector("#google-login");

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

googleButton.addEventListener("click",async()=>{

    try{

        const user=await loginWithGoogle();

        console.log(user);

        const exists=await userExists(user.uid);

        if(exists){

            window.location.href="pages/dashboard.html";

        }

        else{

            window.location.href="mission-control.html";

        }

    }

    catch(error){

        console.error(error);

        alert(error.message);

    }

});