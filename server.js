const admin = require("firebase-admin");
const serviceAccount = require("./secure/serviceAccountKey.json");
const uid = "some-uid";
const express = require("express");
const app = express();
const dbURL = "https://test-learn-ff.firebaseio.com";

admin.initializeApp({
    credential : admin.credential.cert(serviceAccount),
    databaseURL: dbURL,
});

app.get("/new", function (req, res) {

    admin.auth().createCustomToken(uid)
        .then(function (customToken) {
            res.send(customToken);
        })
        .catch(function (error) {
            console.log("Error creating custom token:", error);
        });

});

//FIXME: this part of code should fix CORS issues I have now

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// app.get('/', function(req, res, next) {
//     // Handle the get for this route
// });
//
// app.post('/', function(req, res, next) {
//     // Handle the post for this route
// });

app.listen(3000, function () {
    console.log("server is running on http://localhost:3000");
});

//
// function test() {
//     console.log('asd')
// }