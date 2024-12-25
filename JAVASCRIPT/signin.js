document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
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

        // Validate password
        if (passwordInput.value.trim() === '') {
            showError(passwordInput, 'Password is required');
            isValid = false;
        } else {
            clearError(passwordInput);
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

    // Function to handle login form submission
    document.addEventListener('DOMContentLoaded', function() {
        const loginForm = document.querySelector('form');
        
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting
    
            // Get the entered username and password
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
    
            // Check if the username and password match the admin credentials
            if (username === 'admin' && password === 'admin123') {
                // Redirect to the admin dashboard page
                window.location.href = '../HTML/admin2.html'; // Update with the correct path to the admin page
            } else {
                // Show an error message or handle incorrect credentials
                alert('login successful');
                window.location.href = '../HTML/bookingpage.html';
            }
        });
    });
       

