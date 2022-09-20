// Dropdown
dropdownBtn = document.querySelector('#dropdown-btn')
dropdownModal = document.querySelector('#profile-dropdown')
if (dropdownBtn != null && dropdownModal != null){
    dropdownBtn.addEventListener('click', (e) =>{
        if (dropdownModal.style.display === 'none'){
            dropdownModal.style.setProperty('display', 'block')
        }
        else{
            dropdownModal.style.setProperty('display', 'none')
        }
     })
}


/* Feeds Dropdown */
moreButtons = document.querySelectorAll('#moreBtn')

moreButtons.forEach( (btn) => {
    btn.addEventListener('click', ()=>{
        parent = btn.parentElement;
        actionsModal = parent.lastElementChild;
        if (actionsModal.style.display == 'none') {
            actionsModal.style.setProperty("display", 'flex');
        }
        else{
            actionsModal.style.setProperty("display", 'none');
        }
    })
});



/*
// When the user clicks on the button,toggle between hiding and showing the dropdown content 

let toggler = document.querySelector("#menu-btn");
let mobile = document.querySelector(".header-mobile")


// Mobile NavBar
toggler.addEventListener("click", () =>{
    if (mobile.style.display == 'flex') {
        mobile.style.setProperty("display", 'none');
    }
    else{
        mobile.style.setProperty("display", 'flex');
    }
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('#menu-btn')) {
          mobile.style.setProperty("display", 'none');
      }
  }
*/