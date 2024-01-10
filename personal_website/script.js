document.addEventListener("DOMContentLoaded", function () {
    animateHeader();
    setupFormListener();
});

function animateHeader() {
    const header = document.querySelector('header');
    header.style.opacity = '0';

    setTimeout(() => {
        header.style.transition = 'opacity 1s ease-in-out';
        header.style.opacity = '1';
    }, 500);

    setTimeout(() => {
        header.style.transition = '';
    }, 1500);
}

function setupFormListener() {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm();
    });
}

function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();

    if (nameValue === '' || emailValue === '') {
        alert('Please fill in all fields.');
    } else if (!isValidEmail(emailValue)) {
        alert('Please enter a valid email address.');
    } else {
        alert('Form submitted successfully!');
        // You can perform further actions here, e.g., sending data to a server.
    }
}

function isValidEmail(email) {
    // A simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
