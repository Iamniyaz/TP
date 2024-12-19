// script.js
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (username && email && password) {
        document.getElementById("message").textContent = "Signup successful!";
        document.getElementById("message").style.color = "green";
    } else {
        document.getElementById("message").textContent = "Please fill in all fields.";
        document.getElementById("message").style.color = "red";
    }
});
