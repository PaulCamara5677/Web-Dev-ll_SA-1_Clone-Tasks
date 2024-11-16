// Array to store selected chocolates
// Store selected chocolates and box design
// Variables to hold the selected chocolates
// script.js

// Function to show the selected page
let slideIndex = 0;

// Function to manage the slideshow background
function showSlides() {
    const slides = document.querySelectorAll('.slideshow img');
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === slideIndex) {
            slide.classList.add('active');
        }
    });
    slideIndex = (slideIndex + 1) % slides.length;
}

// Change slides every 5 seconds
setInterval(showSlides, 5000);
showSlides(); // Initial call to display the first slide

// Function to handle chocolate selection
const chocolates = document.querySelectorAll('.chocolate');
const slots = document.querySelectorAll('.slot');

chocolates.forEach(chocolate => {
    chocolate.addEventListener('click', function() {
        const selectedChocolate = this.cloneNode(true);
        const emptySlot = Array.from(slots).find(slot => !slot.firstChild);
        
        if (emptySlot) {
            emptySlot.appendChild(selectedChocolate);
        }
    });
});