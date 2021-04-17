// Required for side-effects

var firebaseConfig = {
  apiKey: "AIzaSyCsYDPr_3fdJID5Ew30Od3fu8Hg0O5m90E",
  authDomain: "changeslide-e0519.firebaseapp.com",
  projectId: "changeslide-e0519",
  storageBucket: "changeslide-e0519.appspot.com",
  messagingSenderId: "979609818557",
  appId: "1:979609818557:web:a7d9107162975d59366ed4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

const button = document.querySelector("button");
const audio = document.querySelector(".audio");

const playAudio = () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  }
};

button.addEventListener("click", async () => {
  const docRef = db.collection("slides").doc("rTXSnTWUy5Ai6hNYZquE");

  docRef
    .set({
      slides: Date(),
    })
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      console.error("Error updating document: ", error);
    });
});

const docRef = db.collection("slides").doc("rTXSnTWUy5Ai6hNYZquE");

const observer = docRef.onSnapshot(
  (docSnapshot) => {
    console.log("change detected");
    const { slides } = docSnapshot.data();
    console.log(slides);
    playAudio();
  },
  (err) => {
    console.log(`Encountered error: ${err}`);
  }
);

particlesJS.load("particles-js", "particles.json", function () {
  console.log("callback - particles.js config loaded");
});
