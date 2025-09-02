const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirm_password');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    // Name check
    if (nameInput.value.trim() === "") {
        showError(nameInput, "Name is required");
        isValid = false;
    } else {
        hideError(nameInput);
    }

    // Email check (just empty check, not regex)
    if (emailInput.value.trim() === "") {
        showError(emailInput, "Email is required");
        isValid = false;
    } else {
        hideError(emailInput);
    }

    // Phone check (10 digits, only numbers)
    let phone = phoneInput.value.trim();
    if (phone === "" || phone.length !== 10 || isNaN(phone)) {
        showError(phoneInput, "Phone number must be 10 digits");
        isValid = false;
    } else {
        hideError(phoneInput);
    }

    // Password check (at least 6 characters)
    if (passwordInput.value.trim().length < 6) {
        showError(passwordInput, "Password must be at least 6 characters");
        isValid = false;
    } else {
        hideError(passwordInput);
    }

    // Confirm password check
    if (confirmInput.value.trim() !== passwordInput.value.trim()) {
        showError(confirmInput, "Passwords do not match");
        isValid = false;
    } else {
        hideError(confirmInput);
    }

    // Final result
    if (isValid) {
        alert("Registration Successful!");
        form.reset();
    }
});

// Show error
function showError(input, message) {
    const errorSpan = input.nextElementSibling;
    errorSpan.innerText = message;
    errorSpan.style.display = "block";
    input.style.border = "2px solid #b92525"; // red border
}

// Hide error
function hideError(input) {
    const errorSpan = input.nextElementSibling;
    errorSpan.style.display = "none";
    input.style.border = "2px solid green"; // green border
}
