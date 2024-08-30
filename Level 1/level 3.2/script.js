// Get form and error message elements
const form = document.getElementById('registrationForm');
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Function to validate the form
function validateForm(event) {
    let valid = true;
    
    // Clear previous error messages
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
    
    // Get input values
    const username = form.username.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // Validate username
    if (username.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters long.';
        valid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        valid = false;
    }

    // Validate password
    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        valid = false;
    }

    // Validate password confirmation
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        valid = false;
    }

    // Prevent form submission if invalid
    if (!valid) {
        event.preventDefault();
    }
}

// Add event listener to form
form.addEventListener('submit', validateForm);
