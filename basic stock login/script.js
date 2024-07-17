document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const errorMessage = document.getElementById('errorMessage');
    const regErrorMessage = document.getElementById('regErrorMessage');

    // Function to handle user registration
    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const username = document.getElementById('regUsername').value;
            const password = document.getElementById('regPassword').value;

            const users = JSON.parse(localStorage.getItem('users')) || {};

            if (users[username]) {
                regErrorMessage.textContent = 'Username already exists!';
            } else {
                users[username] = password;
                localStorage.setItem('users', JSON.stringify(users));
                regErrorMessage.textContent = 'Registration successful! You can now login.';
            }
        });
    }

    // Function to handle user login
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const users = JSON.parse(localStorage.getItem('users')) || {};

            if (users[username] && users[username] === password) {
                // Save username to local storage
                localStorage.setItem('username', username);
                // Redirect to welcome page
                window.location.href = 'welcome.html';
            } else {
                errorMessage.textContent = 'Invalid username or password!';
            }
        });
    }

    // Display username on welcome page
    const userDisplayName = document.getElementById('userDisplayName');
    if (userDisplayName) {
        const username = localStorage.getItem('username');
        if (username) {
            userDisplayName.textContent = username;
        } else {
            // Redirect to login page if username is not found in local storage
            window.location.href = 'index.html';
        }
    }
});