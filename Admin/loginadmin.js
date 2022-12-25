function login() {
    // Get user input from form
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Retrieve user data from local storage
    const storedName = localStorage.getItem('name');
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Check if user input matches stored data
    if (email === storedEmail && password === storedPassword) {
      // Login successful
      alert('Welcome, ' + storedName + '!');
      window.location.href="Admin.html"
    } else {
      // Login failed
      alert('Incorrect email or password.');
    }
  }