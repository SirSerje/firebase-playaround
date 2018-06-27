const config = {
    apiKey: "AIzaSyB5G1yYo0kVZ8GI-ID266o3l7fcoFjKcRc",
    authDomain: "test-learn-ff.firebaseapp.com",
    databaseURL: "https://test-learn-ff.firebaseio.com",
    projectId: "test-learn-ff",
    storageBucket: "test-learn-ff.appspot.com",
    messagingSenderId: "558468890196"
};

firebase.initializeApp(config);

const signInWithToken = token =>
firebase.auth().signOut().then(() =>
  firebase
    .auth()
    .signInWithCustomToken(token)
    .then(() => {
      let dbRef = firebase
        .database()
        .ref()
        .child("object-key");
      let placeholder = document.getElementById(["placeholder"]);
      dbRef.on("value", snap => (placeholder.innerText = snap.val()));
    })
    .catch(error => console.error(error)));

fetch("http://localhost:3000/token").then(response =>
  response.text().then(token => signInWithToken(token))
);
