document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmInput = document.getElementById('confirmpassword');
    const roleSelect = document.querySelector('select[data-type="format"]');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let isValid = true;
        
        // Validate username
        if (usernameInput.value.trim() === '') {
            showError(usernameInput, 'Username is required');
            isValid = false;
        } else {
            clearError(usernameInput);
        }
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'email is required');
            isValid = false;
        } else {
            clearError(emailInput);
        }

        // Validate password
        if (passwordInput.value.trim() === '') {
            showError(passwordInput, 'Password is required');
            isValid = false;
        } else {
            clearError(passwordInput);
        }

        if (confirmInput.value.trim() === '') {
            showError(confirmInput, 'confirmpassword is required');
            isValid = false;
        } else {
            clearError(confirmInput);
        }


        // Validate role
        if (roleSelect.value === '') {
            showError(roleSelect, 'Role is required');
            isValid = false;
        } else {
            clearError(roleSelect);
        }

        if (isValid) {
            alert('Login successful');
            // Perform form submission or further processing here
            console.log('Form submitted');
            // You can add actual form submission code here, e.g., using AJAX
        }
    });

    function showError(element, message) {
        const parent = element.parentElement;
        const errorElement = parent.querySelector('.error-message');
        
        if (!errorElement) {
            const error = document.createElement('div');
            error.className = 'error-message';
            error.style.color = 'red';
            error.textContent = message;
            parent.appendChild(error);
        } else {
            errorElement.textContent = message;
        }

        element.style.borderColor = 'red';
    }

    function clearError(element) {
        const parent = element.parentElement;
        const errorElement = parent.querySelector('.error-message');
        
        if (errorElement) {
            parent.removeChild(errorElement);
        }

        element.style.borderColor = '';
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.querySelector('form');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Get the values from the form fields
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmpassword').value;

        // Simple validation (you can expand this)
        if (username === '' || email === '' || password === '' || confirmPassword === '') {
            alert('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Simulate successful registration
        setTimeout(function() {
            alert('Registration successful!');
            window.location.href = '../HTML/signin.html'; // Redirect to the login page after successful registration
        }, 500); // Delay for effect
    });
});
