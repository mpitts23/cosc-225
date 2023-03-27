import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";
import { getFirestore, collection, doc, setDoc, onSnapshot, getDoc } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a Firestore instance
const db = getFirestore(app);

// Save checkbox data to Firestore
function saveCheckboxData(personName, checkbox1, checkbox2, checkbox3) {
  setDoc(doc(db, 'people', personName), {
    checkbox1: checkbox1,
    checkbox2: checkbox2,
    checkbox3: checkbox3
  });
}

// Retrieve checkbox data from Firestore
async function getCheckboxData(personName) {
  const docRef = doc(db, 'people', personName);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    return {
      checkbox1: data.checkbox1,
      checkbox2: data.checkbox2,
      checkbox3: data.checkbox3
    };
  } else {
    console.log("No such document!");
  }
}

// Save checkbox data to Firestore when checkboxes are clicked
const pittCheckboxes = document.querySelectorAll('.pitt-checkbox');
const gracieCheckboxes = document.querySelectorAll('.gracie-checkbox');

pittCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('click', () => {
    const checkbox1 = document.querySelector('#pitt-checkbox-1').checked;
    const checkbox2 = document.querySelector('#pitt-checkbox-2').checked;
    const checkbox3 = document.querySelector('#pitt-checkbox-3').checked;
    saveCheckboxData('pitt', checkbox1, checkbox2, checkbox3);
  });
});

gracieCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('click', () => {
    const checkbox1 = document.querySelector('#gracie-checkbox-1').checked;
    const checkbox2 = document.querySelector('#gracie-checkbox-2').checked;
    const checkbox3 = document.querySelector('#gracie-checkbox-3').checked;
    saveCheckboxData('gracie', checkbox1, checkbox2, checkbox3);
  });
});

// Retrieve checkbox data from Firestore when page is reloaded
window.addEventListener('load', async () => {
  const pittData = await getCheckboxData('pitt');
  if (pittData) {
    document.querySelector('#pitt-checkbox-1').checked = pittData.checkbox1;
    document.querySelector('#pitt-checkbox-2').checked = pittData.checkbox2;
    document.querySelector('#pitt-checkbox-3').checked = pittData.checkbox3;
  }
  const gracieData = await getCheckboxData('gracie');
  if (gracieData) {
    document.querySelector('#gracie-checkbox-1').checked = gracieData.checkbox1;
    document.querySelector('#gracie-checkbox-2').checked = gracieData.checkbox2;
    document.querySelector('#gracie-checkbox-3').checked = gracieData.checkbox3;
  }
});
