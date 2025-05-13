// JavaScript for Product Slider

// Variables
const slides = document.querySelectorAll('.product-slider .slide');
let currentIndex = 0;

// Function to change slide
function changeSlide() {
    // Hide the current slide
    slides[currentIndex].style.display = 'none';
    
    // Update the index (looping back to the first slide if at the end)
    currentIndex = (currentIndex + 1) % slides.length;

    // Show the new slide
    slides[currentIndex].style.display = 'block';
}

// Set all slides to be hidden initially except the first one
slides.forEach((slide, index) => {
    if (index !== 0) {
        slide.style.display = 'none';
    }
});

// Automatically change slides every 5 seconds
setInterval(changeSlide, 5000);

// Manual control for next/previous button (optional for future expansion)
// You can add next and prev buttons for manual sliding in the HTML, if desired.
