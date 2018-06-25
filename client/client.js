var firebase = require('https://www.gstatic.com/firebasejs/5.0.4/firebase.js')

// Initialize Firebase
var config = {
    apiKey: "AIzaSyB5G1yYo0kVZ8GI-ID266o3l7fcoFjKcRc",
    authDomain: "test-learn-ff.firebaseapp.com",
    databaseURL: "https://test-learn-ff.firebaseio.com",
    projectId: "test-learn-ff",
    storageBucket: "test-learn-ff.appspot.com",
    messagingSenderId: "558468890196"
};
firebase.initializeApp(config);

//TODO: make request to get token dynamically
const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJzb21lLXVpZCIsImlhdCI6MTUyOTMyMTkxOCwiZXhwIjoxNTI5MzI1NTE4LCJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlzcyI6ImZpcmViYXNlLWFkbWluc2RrLWdlcXJ1QHRlc3QtbGVhcm4tZmYuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzdWIiOiJmaXJlYmFzZS1hZG1pbnNkay1nZXFydUB0ZXN0LWxlYXJuLWZmLmlhbS5nc2VydmljZWFjY291bnQuY29tIn0.ZxWun03q6VBxvIzQ43gCzoOXAd8OecJTAkE5lwb8ED5SwB_FTJ1zKXiqFqmSs7YA8vjegCN1pSVD8qaGLurAtv35U-1JaI3fP1BQ5Fnn0M1hqz3meUHgvB0EktyPA433gIIOXrLWcQ5u0MuH7xNPB6pRO6979qGVHLbaUiNs6YyEClXLnGRX4OhrI6n_OGgXP68vMkRgM3S0_0Ub6tVHq1UEbjv3PZie1JHiZEebZrnFTZGRpHPaeHxq89LViicOx4W5rLE3Ll_wm4W6HhTDAV_vH7qDhrwsK9JxDeh0kTIayF4EtAfxsNX7krkZDRsOKlLW8sZRVt-GcOg7mN3Jkg';

firebase.auth().signInWithCustomToken(token)
    .then(() => {
        console.log('take data from db')
        let dbRef = firebase.database().ref().child("object-key");
        let placeholder = document.getElementById(["placeholder"])
        dbRef.on("value", (snap => placeholder.innerText = snap.val()));
    })
    .catch(error => {
        console.error(error);
    });


function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

console.log(httpGet('http://localhost:3000/new'));