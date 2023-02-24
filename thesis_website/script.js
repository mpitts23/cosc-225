import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";
import { getFirestore, collection, doc, setDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

// Initialize Firebase with your project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNnmQco6U4ggQpNsvN63U0HGf-s_njca0",
    authDomain: "mythic-fire-336715.firebaseapp.com",
    databaseURL: "https://mythic-fire-336715-default-rtdb.firebaseio.com",
    projectId: "mythic-fire-336715",
    storageBucket: "mythic-fire-336715.appspot.com",
    messagingSenderId: "171470500131",
    appId: "1:171470500131:web:50b701d214fcf17f1a5c96",
  };

  // const app = initializeApp(firebaseConfig);
  // const db = getFirestore(app);
  
  const app = initializeApp(firebaseConfig);
  
  const database = getDatabase();

  // Create references to the database nodes
const pittRef = ref(database, "pitt");
const gracieRef = ref(database, "gracie");

const pittChecks = document.querySelectorAll(".pitt-checkbox");
const gracieChecks = document.querySelectorAll(".gracie-checkbox");

function checkPittAndGracie() {
  let pittChecked = 0;
  let gracieChecked = 0;

  // Loop through each checkbox and count the number that are checked
  pittChecks.forEach((checkbox) => {
    if (checkbox.checked) {
      pittChecked++;
    }
  });

  gracieChecks.forEach((checkbox) => {
    if (checkbox.checked) {
      gracieChecked++;
    }
  });

  // Update the progress bars
  const pittProgress = document.querySelector(".pitt-progress");
  pittProgress.style.width = `${(pittChecked / pittChecks.length) * 100}%`;

  const gracieProgress = document.querySelector(".gracie-progress");
  gracieProgress.style.width = `${(gracieChecked / gracieChecks.length) * 100}%`;
}