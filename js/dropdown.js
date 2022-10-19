/* Humbugger Menu */
const hamburgerMenu = document.querySelector('.hamburger'); //Selects the element with the class name of hamburger.
const menu = document.querySelector('.dashboard-sidebar');
if (hamburgerMenu != null) {
    //Creating an arrow function for changing the class to active.
    const menuIsActive = () => {
        //Selecting the hamburger menu and adding and removing the class of active on click.
        hamburgerMenu.classList.toggle('active');
        if (menu.style.display == 'block') {
            menu.style.setProperty('display', 'none');
        }
        else {
            menu.style.setProperty('display', 'block');
        }

    };
    //Adds an event listener of 'click' to the hamburger menu. Then we pass in the function we created where the class is toggled on and off.
    hamburgerMenu.addEventListener('click', menuIsActive);

}


// Dropdown
dropdownBtn = document.querySelector('#dropdown-btn')
dropdownModal = document.querySelector('#profile-dropdown')
if (dropdownBtn != null && dropdownModal != null) {
    dropdownBtn.addEventListener('click', (e) => {
        if (dropdownModal.style.display === 'none') {
            dropdownModal.style.setProperty('display', 'block')
        }
        else {
            dropdownModal.style.setProperty('display', 'none')
        }
    })
}


/* Feeds Dropdown */
moreButtons = document.querySelectorAll('#moreBtn')

if (moreButtons != null) {
    moreButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            parent = btn.parentElement;
            actionsModal = parent.lastElementChild;
            if (actionsModal.style.display == 'none') {
                actionsModal.style.setProperty("display", 'flex');
            }
            else {
                actionsModal.style.setProperty("display", 'none');
            }
        })
    });
}

/* Create Buttons */
createButtons = document.querySelectorAll('#Create')

if (createButtons != null) {
    createButtons.forEach((createButton) => {
        createButton.addEventListener('mouseover', () => {
            last = createButton.lastElementChild
            last.style.setProperty('display', 'flex')
        })
    })
}

/* Create Dropdown
createButton = document.querySelector('#create-Btn')
createModal = document.querySelector('.create-dropdown')

if (createButton != null && createModal != null) {
    createButton.addEventListener('click', () => {
        createModal.style.setProperty('display', 'flex')
    })
}
window.onclick = function (event) {
    if (!event.target.matches('#create-Btn')) {
        createModal.style.setProperty("display", 'none');
    }
}*/


// All Sidebar Links
let sidebarLinks = document.querySelectorAll('.link')
if (sidebarLinks != null) {
    //Adding an event when mouse enter the element
    sidebarLinks.forEach(link => {
        link.addEventListener('mouseenter', (event) => {
            let span = link.querySelector('#select')
            //span.classList.add('specific-link')
            link.classList.add('active-link')
        })
    })
    //Adding an event When mouse leaves the element
    sidebarLinks.forEach(link => {
        link.addEventListener('mouseleave', (event) => {
            let span = link.querySelector('#select')
            // span.classList.remove('specific-link')
            link.classList.remove('active-link')
        })
    })
}

//Share-Modal
const viewBtns = document.querySelectorAll(".view-modal"),
    popup = document.querySelectorAll(".popup");
 /*   close = popup.querySelector(".close"),
    field = popup.querySelector(".field"),
    input = field.querySelector("input"),
    copy = field.querySelector("button");*/
/*
viewBtn.onclick = () => {
    preventDefault();
    popup.classList.toggle("show");
}*/
viewBtns.forEach((viewBtn,index)=>{
    const close = popup[index].querySelector(".close"),
    field = popup[index].querySelector(".field"),
    input = field.querySelector("input"),
    copy = field.querySelector("button");

    viewBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        popup[index].style.setProperty('display', 'block')
    })

    close.addEventListener("click",()=>{
        popup[index].style.setProperty('display', 'none')
    })

    copy.onclick = () => {
        input.select(); //select input value
        if (document.execCommand("copy")) { //if the selected text copy
            field.classList.add("active");
            copy.innerText = "Copied";
            setTimeout(() => {
                window.getSelection().removeAllRanges(); //remove selection from document
                field.classList.remove("active");
                copy.innerText = "Copy";
            }, 3000);
        }
    }

})

