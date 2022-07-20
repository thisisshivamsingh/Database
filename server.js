// const express = require("express");
// const app = express();

// app.get("/api/users", (req, res) => {
//   res.json([
//     { id: 1, username: "Francis" },
//     { id: 2, username: "Steve" },
//   ]);
// });

// const port = process.env.POST || 3001;
// app.listen(port);

// /// shivam8976
// /// qWaQmlA0FpAVPArV

/////////////// THE MONGO DRIVER /////////////

const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");

const mongoUri =
  "mongodb+srv://shivam8976:<password>@cluster0.wmqxy3u.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(mongoUri);

app.get("/api/users", async (req, res) => {
  try {
    await client.connect();
    const database = client.db("myApp");
    const collection = database.collection("users");
    const query = await collection.insertOne({
      name: "Francis",
      lastname: "Jones",
    });
    console.log(query);
    res.status(200).json({ awesome: "yes" });
  } catch (error) {
    throw error;
  } finally {
    await client.close();
    console.log("all is done");
  }
});

// MongoClient.connect(mongoUri, (err, client) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Connected to the DB");
// });

const port = process.env.POST || 3001;
app.listen(port);

/// shivam8976
/// qWaQmlA0FpAVPArV
