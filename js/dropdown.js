/* When the user clicks on the button,toggle between hiding and showing the dropdown content */

let toggler = document.querySelector("#menu-btn");
let mobile = document.querySelector("#menu")


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#menu-btn')) {
        mobile.style.setProperty("display", 'none');
    }
}

// Mobile NavBar
toggler.addEventListener("click", () =>{
    if (mobile.style.display == 'none') {
        mobile.style.setProperty("display", 'flex');
    }
    else{
        mobile.style.setProperty("display", 'none');
    }
});