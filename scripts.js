// Slideshow functionality
let currentIndex = 0;
const slides = document.querySelectorAll("#slideshow > *");

function showSlide(index) {
    slides.forEach(slide => {
        slide.style.display = "none";
    });
    slides[index].style.display = "block";
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Automatically advance to next slide every 5 seconds
setInterval(nextSlide, 5000);

// Show the first slide initially
showSlide(currentIndex);
