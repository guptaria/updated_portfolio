// Global Variables
let sidenav = document.querySelector(".sidenav");
let closeBtn = document.querySelector(".closebtn");
let sectionProject = document.getElementById("projects");
let buttonAction = document.getElementById("button");

// Listeners

buttonAction.addEventListener("click", scrollToProjects);

function scrollToProjects() {
  window.scrollTo(0, 900);
}

