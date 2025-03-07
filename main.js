'use strict';

//Opening or closing side bar

const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); })

//Activating Modal-testimonial

const highlightsItem = document.querySelectorAll('[data-highlights-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');

const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');

const highlightsModalFunc = function () {
    modalContainer.classList.toggle('active');
    overlay.classList.toggle('active');
}

for (let i = 0; i < highlightsItem.length; i++) {
    highlightsItem[i].addEventListener('click', function () {
        modalImg.src = this.querySelector('[data-highlights-avatar]').src;
        modalImg.alt = this.querySelector('[data-highlights-avatar]').alt;
        modalTitle.innerHTML = this.querySelector('[data-highlights-title]').innerHTML;
        modalText.innerHTML = this.querySelector('[data-highlights-text]').innerHTML;

        highlightsModalFunc();
    })
}

//Activating close button in modal-testimonial

modalCloseBtn.addEventListener('click', highlightsModalFunc);
overlay.addEventListener('click', highlightsModalFunc);

//Activating Filter Select and filtering options

// const select = document.querySelector('[data-select]');
// const selectItems = document.querySelectorAll('[data-select-item]');
// const selectValue = document.querySelector('[data-select-value]');
// const filterBtn = document.querySelectorAll('[data-filter-btn]');

// select.addEventListener('click', function () {elementToggleFunc(this); });

// for(let i = 0; i < selectItems.length; i++) {
//     selectItems[i].addEventListener('click', function() {

//         let selectedValue = this.innerText.toLowerCase();
//         selectValue.innerText = this.innerText;
//         elementToggleFunc(select);
//         filterFunc(selectedValue);

//     });
// }

// const filterItems = document.querySelectorAll('[data-filter-item]');

// const filterFunc = function (selectedValue) {
//     for(let i = 0; i < filterItems.length; i++) {
//         if(selectedValue == "all") {
//             filterItems[i].classList.add('active');
//         } else if (selectedValue == filterItems[i].dataset.category) {
//             filterItems[i].classList.add('active');
//         } else {
//             filterItems[i].classList.remove('active');
//         }
//     }
// }

// //Enabling filter button for larger screens 

// let lastClickedBtn = filterBtn[0];

// for (let i = 0; i < filterBtn.length; i++) {

//     filterBtn[i].addEventListener('click', function() {

//         let selectedValue = this.innerText.toLowerCase();
//         selectValue.innerText = this.innerText;
//         filterFunc(selectedValue);

//         lastClickedBtn.classList.remove('active');
//         this.classList.add('active');
//         lastClickedBtn = this;

//     })
// }


// Enabling Page Navigation 

const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', function () {

        for (let i = 0; i < pages.length; i++) {
            if (this.innerHTML.toLowerCase() == pages[i].dataset.page) {
                pages[i].classList.add('active');
                navigationLinks[i].classList.add('active');
                window.scrollTo(0, 0);
            } else {
                pages[i].classList.remove('active');
                navigationLinks[i].classList.remove('active');
            }
        }
    });
}

// LIGHTBOX AREA
const lightbox = document.createElement('div')
const images = document.querySelectorAll('img:not(.profile)')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
        //  This blocks the background from scolling when lightbox is open - must set overflow in main css otherwise on the first time you click on the modal the page will scroll to the top
        document.body.style.overflowY = 'hidden'
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
    document.body.style.overflowY = 'scroll'
})