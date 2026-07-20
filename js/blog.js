/*======================================================
    LANZAR FUTURE INFORMATION TERMINAL

    Blog Transmission Controller

======================================================*/


/*======================================================
    BLOG DATABASE
======================================================*/

const blogs = [
    "blog/philosophy.html",
    "blog/public-built.html",
    "blog/origin.html",
    "blog/digital-frontier.html",
];


let currentBlog = 0;


/*======================================================
    INITIALIZE TERMINAL
======================================================*/

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadBlog();
        setupControls();

    }
);


/*======================================================
    LOAD TRANSMISSION
======================================================*/

function loadBlog(){

    const screen =
        document.getElementById(
            "blog-display"
        );


    if(!screen){

        return;

    }


    screen.src =
        blogs[currentBlog];

}


/*======================================================
    TERMINAL CONTROLS
======================================================*/

function setupControls(){

    const previous =
        document.getElementById("previous");

    const home =
        document.getElementById("home");

    const next =
        document.getElementById("next");


    previous.addEventListener(
        "click",
        () => {

            currentBlog--;

            if(currentBlog < 0){

                currentBlog =
                    blogs.length - 1;

            }

            loadBlog();

        }
    );


    home.addEventListener(
        "click",
        () => {

            currentBlog = 0;

            loadBlog();

        }
    );


    next.addEventListener(
        "click",
        () => {

            currentBlog++;

            if(currentBlog >= blogs.length){

                currentBlog = 0;

            }

            loadBlog();

        }
    );

}