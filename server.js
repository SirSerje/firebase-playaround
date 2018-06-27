const admin = require("firebase-admin");
const express = require("express");
const serviceAccount = require("./secure/serviceAccountKey.json");
const uid = "some-uid";
const app = express();
const dbURL = "https://test-learn-ff.firebaseio.com";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: dbURL
});

app.get("/token", function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  admin
    .auth()
    .createCustomToken(uid)
    .then(function(customToken) {
      res.send(customToken);
    })
    .catch(function(error) {
      console.log("Error creating custom token:", error);
    });
});


app.listen(3000, function() {
  console.log("server is running on http://localhost:3000");
});
