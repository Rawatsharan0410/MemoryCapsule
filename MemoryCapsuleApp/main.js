import { auth } from "./firebase-config.js";
import {
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

const usernameDisplay = document.getElementById("usernameDisplay");
const memoriesList = document.getElementById("memories-list");
const logoutButton = document.getElementById("logout-button");

// Fake memory data (replace with actual database logic)
const sampleMemories = [
  { id: 1, content: "Visited Paris in 2022" },
  { id: 2, content: "Graduated from college" },
];

// Fetch and display memories
function fetchMemories() {
  memoriesList.innerHTML = ""; // Clear previous list
  sampleMemories.forEach((memory) => {
    const li = document.createElement("li");
    li.textContent = memory.content;
    memoriesList.appendChild(li);
  });
}

// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User logged in:", user.email);
    if (usernameDisplay) usernameDisplay.textContent = user.email;
    fetchMemories(); // Fetch memories for the logged-in user
  } else {
    console.log("No user logged in");
    window.location.href = "index.html"; // Redirect to login page
  }
});

// Handle logout
if (logoutButton) {
  logoutButton.addEventListener("click", () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out");
        window.location.href = "index.html"; // Redirect to login page
      })
      .catch((error) => {
        console.error("Logout error:", error.message);
      });
  });
}
