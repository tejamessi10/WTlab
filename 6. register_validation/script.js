function validateForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phoneNumber = document.getElementById('PhoneNumber').value.trim();
    var age = document.getElementById('age').value.trim();
    var gender = document.getElementById('gender').value.trim();
    var course = document.getElementById('course').value.trim();

    clearErrors();

    if (isEmpty(name)) {
        displayError('nameError', 'Name is required');
        return false;
    }

    if (!isValidEmail(email)) {
        displayError('emailError', 'Enter a valid email address');
        return false;
    }

    if (!isNumeric(phoneNumber)) {
        displayError('PhoneNumberError', 'Enter a valid phone number');
        return false;
    }

    if (!isNumeric(age) || age < 18 || age > 30) {
        displayError('ageError', 'Enter a valid age between 18 and 30');
        alert('Age must be 18 or older.');
        return false;
    }

    if (isEmpty(course)) {
        displayError('courseError', 'Course is required');
        return false;
    }

    return true;
}

function displayError(elementId, message) {
    var errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function clearErrors() {
    var errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function (element) {
        element.textContent = '';
    });
}

function isEmpty(value) {
    return value === '';
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isNumeric(value) {
    return !isNaN(value);
}
