// JavaScript for Slideshow
const items = document.querySelectorAll('.bento-item');
let currentIndex = 0;

function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) item.classList.add('active');
    });
}

function startSlideshow() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
    }, 3000); // 3 seconds per slide
}

startSlideshow();

// Toggle the menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// script.js
function toggleDetails(issue) {
    const sections = ['TechnicalIssues', 'FinancialIssues', 'ServiceIssues'];
    sections.forEach(section => {
        const element = document.getElementById(section);
        if (section === issue) {
            element.style.display = element.style.display === 'none' ? 'block' : 'none';
        } else {
            element.style.display = 'none';
        }
    });
}
function toggleDetails(issueId) {
    const issueDetails = document.querySelectorAll('.sub-option-description');

    issueDetails.forEach(detail => {
        if (detail.id === issueId) {
            detail.style.display = detail.style.display === 'block' ? 'none' : 'block';
        } else {
            detail.style.display = 'none'; // Hide other details
        }
    });
}
function findServiceCenters(mapId, descriptionId) {
    // Implement the logic to find service centers
    console.log(`Finding service centers for ${descriptionId}`);
}
// Function to initialize the map and find nearby service centers
function findServiceCenters(mapId, descriptionId) {
    const descriptionElement = document.getElementById(descriptionId);

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Create a map centered at the user's location
            const map = L.map(mapId).setView([latitude, longitude], 15);

            // Add an OpenStreetMap tile layer
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            // Example: Add a marker at the user's location
            L.marker([latitude, longitude]).addTo(map)
                .bindPopup('Your Location')
                .openPopup();

            // Display the map
            descriptionElement.style.display = "block";
        });
    } else {
        alert("Geolocation is not supported by your browser.");
    }
}

// Function to scroll to the specified issue section
function scrollToIssue(issueId) {
    const issueSection = document.getElementById(issueId);
    if (issueSection) {
        issueSection.scrollIntoView({ behavior: 'smooth' });
    }
}