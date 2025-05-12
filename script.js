document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (validateEmail(email)) {
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        alert('Thank you for subscribing!');
    } else {
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

// Show the home page by default
showPage('home');

// Image Carousel
let currentImageIndex = 0;
let autoSlideInterval;

function showImage(index) {
    const images = document.querySelectorAll('.carousel img');
    images.forEach((img, i) => {
        img.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

function prevImage() {
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : document.querySelectorAll('.carousel img').length - 1;
    showImage(currentImageIndex);
}

function nextImage() {
    currentImageIndex = (currentImageIndex < document.querySelectorAll('.carousel img').length - 1) ? currentImageIndex + 1 : 0;
    showImage(currentImageIndex);
}

// Auto slide images every 3 seconds
autoSlideInterval = setInterval(nextImage, 3000);

// Stop auto slide on mouse over and resume on mouse out
document.querySelector('.carousel').addEventListener('mouseover', () => {
    clearInterval(autoSlideInterval);
});

document.querySelector('.carousel').addEventListener('mouseout', () => {
    autoSlideInterval = setInterval(nextImage, 3000);
});

// Quiz functionality
function checkAnswer(answer) {
    if (answer === 'Paris') {
        alert('Correct!');
    } else {
        alert('Wrong answer. Try again.');
    }
}

// Initialize map
const map = L.map('map-container').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Placeholder for chatbot functionality
document.getElementById('chatbot-container').innerHTML = '<p>Chatbot coming soon!</p>';
