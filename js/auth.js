// Handling login functionality
if (document.body.contains(document.querySelector('#login-form'))) {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            // Simple check for demo purposes
            alert('Login successful');
            localStorage.setItem('user', JSON.stringify({ username }));
            window.location.href = 'index.html'; // Redirect to homepage after login
        } else {
            alert('Please enter both username and password.');
        }
    });
}

// Handling signup functionality
if (document.body.contains(document.querySelector('#signup-form'))) {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (username && password && password === confirmPassword) {
            // Simulate signup and store the user info
            alert('Signup successful');
            localStorage.setItem('user', JSON.stringify({ username }));
            window.location.href = 'index.html'; // Redirect to homepage after signup
        } else {
            alert('Please fill in all fields correctly.');
        }
    });
}
