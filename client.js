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


app.listen(3000, function () {
    console.log("example on 3000!");
});


function test() {
    console.log('asd')
}