/*
    blog.js

    Blog transmission controller and layout manager.

    Responsibilities

    - Hash-based SPA routing
    - Slide controls (previous, next, home)
    - Browser history popstate sync
*/

// =====================================
// Blog Database
// =====================================

const blogs = [
  "blog/philosophy.html",
  "blog/public-built.html",
  "blog/origin.html",
  "blog/digital-frontier.html",
  "blog/catting-code.html",
  "blog/ninety-nine-login.html",
];

let currentBlog = 0;

// =====================================
// Utility Functions
// =====================================

function getSlug(path) {
  return path.split("/").pop().replace(".html", "");
}

function syncStateFromHash() {
  const hash = window.location.hash.slice(1);
  if (hash) {
    const index = blogs.findIndex((path) => getSlug(path) === hash);
    if (index !== -1) {
      currentBlog = index;
    }
  } else {
    currentBlog = 0;
  }
}

// =====================================
// Initialization
// =====================================

document.addEventListener("DOMContentLoaded", () => {
  syncStateFromHash();
  loadBlog();
  setupControls();

  // Listen for browser navigation changes (Back/Forward)
  window.addEventListener("hashchange", () => {
    syncStateFromHash();
    loadBlog();
  });
});

// =====================================
// Load Transmission
// =====================================

function loadBlog() {
  const screen = document.getElementById("blog-display");

  if (!screen) {
    return;
  }

  screen.src = blogs[currentBlog];
}

// =====================================
// Terminal Controls
// =====================================

function setupControls() {
  const previous = document.getElementById("previous");

  const home = document.getElementById("home");

  const next = document.getElementById("next");

  previous.addEventListener("click", () => {
    currentBlog--;

    if (currentBlog < 0) {
      currentBlog = blogs.length - 1;
    }

    window.location.hash = getSlug(blogs[currentBlog]);
  });

  home.addEventListener("click", () => {
    currentBlog = 0;

    window.location.hash = getSlug(blogs[currentBlog]);
  });

  next.addEventListener("click", () => {
    currentBlog++;

    if (currentBlog >= blogs.length) {
      currentBlog = 0;
    }

    window.location.hash = getSlug(blogs[currentBlog]);
  });
}
