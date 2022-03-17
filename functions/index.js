const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51KZkqRJEK8PYFT8TdUX7r4BYuKqALGShwTnqDh8Y29UkXG1FHCISbV0Ja99S27rPPSRVzoqroBMWOjtj3OqUdR4400VyhZMDO6');
//CHANGE
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment total: ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, 
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
exports.api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//http://localhost:5001/clone-cd832/us-central1/api


