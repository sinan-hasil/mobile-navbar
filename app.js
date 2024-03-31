let icon = document.getElementById("icon");
let navbar = document.getElementById("links");

navbar.style.display = "none";

function topNav(){
    navbar.style.display = "block";
}

icon.addEventListener("click", topNav);