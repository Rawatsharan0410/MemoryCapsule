import { auth } from "./firebase-config.js";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

// Handle login form submission
const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Login successful");
        window.location.href = "main.html"; // Redirect to main page
      })
      .catch((error) => {
        console.error("Login error:", error.message);
        errorMessage.textContent = "Login failed: " + error.message;
      });
  });
}

// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is logged in:", user.email);
    window.location.href = "main.html"; // Redirect if already logged in
  } else {
    console.log("No user is logged in");
  }
});
