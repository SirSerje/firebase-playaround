


function getData() {
    var config = {
        apiKey           : "AIzaSyB5G1yYo0kVZ8GI-ID266o3l7fcoFjKcRc",
        authDomain       : "test-learn-ff.firebaseapp.com",
        databaseURL      : "https://test-learn-ff.firebaseio.com",
        projectId        : "test-learn-ff",
        storageBucket    : "test-learn-ff.appspot.com",
        messagingSenderId: "558468890196",
    };


    var token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJzb21lLXVpZCIsImlhdCI6MTUyNTcyODQyMiwiZXhwIjoxNTI1NzMyMDIyLCJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlzcyI6ImZpcmViYXNlLWFkbWluc2RrLWdlcXJ1QHRlc3QtbGVhcm4tZmYuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzdWIiOiJmaXJlYmFzZS1hZG1pbnNkay1nZXFydUB0ZXN0LWxlYXJuLWZmLmlhbS5nc2VydmljZWFjY291bnQuY29tIn0.oH0zvGFBa5tA8-YxY7qFeVFSU-2zQixbfpAGCi8DmREjxVXT0l3_2T0ndI1z7gwrcHqF0Q46A_DYfsCtuvd91qsVGO1-ZOON2ufRkD2B-C6hLol0GB5JZlWXCs-LRQ0bjBxcSPlnZ9qE6urdo5N2Crsgho-QjJwKpLG3ntF0FxHZw8jHe0UbYysi4JfBXtNEo__3ulfFMQOion-RRlH33LRHJwHLpOgXfPn0BMMUXMfChFQ5FimDztT8rb46GvGaFHSCBvafuVjhpap9nq6CRLvSXh5ALJjo0CtA9zMTOcS8leX9-Lk9N7Me3hVHbKhx19J5V_AVPdLHeaMsXYvAHg";



    firebase.initializeApp(config);


    firebase.auth().signInWithCustomToken(token)

        .then(function () {
            var big0ne = document.getElementById(["big0ne"]);
            var dbRef = firebase.database().ref().child("object-key");
            dbRef.on("value", (function (snap) {
                console.log((snap.val()));
                return big0ne.innerText = snap.val();

            }));
        })
        .catch(function (error) {
            consle.log("Ошбика");
        });

}