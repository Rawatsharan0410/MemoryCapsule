import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyCiN8B7Ilc9QGOZc0apvp-4Mrxb7c45FGk",
  authDomain: "memorycapsuleapp-a3fb1.firebaseapp.com",
  projectId: "memorycapsuleapp-a3fb1",
  storageBucket: "memorycapsuleapp-a3fb1.firebasestorage.app",
  messagingSenderId: "298196711495",
  appId: "1:298196711495:web:ea315b22e7c92d01691962",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);