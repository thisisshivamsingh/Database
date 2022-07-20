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

// const express = require("express");
// const app = express();
// const { MongoClient } = require("mongodb");

// const mongoUri =
//   "mongodb+srv://shivam8976:<password>@cluster0.wmqxy3u.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(mongoUri);

// app.get("/api/users", async (req, res) => {
//   try {
//     await client.connect();
//     const database = client.db("myApp");
//     const collection = database.collection("users");
//     const query = await collection.insertOne({
//       name: "Francis",
//       lastname: "Jones",
//     });
//     console.log(query);
//     res.status(200).json({ awesome: "yes" });
//   } catch (error) {
//     throw error;
//   } finally {
//     await client.close();
//     console.log("all is done");
//   }
// });

// // MongoClient.connect(mongoUri, (err, client) => {
// //   if (err) {
// //     throw err;
// //   }
// //   console.log("Connected to the DB");
// // });

// const port = process.env.POST || 3001;
// app.listen(port);

// /// shivam8976
// /// qWaQmlA0FpAVPArV

/////////////// MODAL AND SCHEMA /////////////

// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");

// const mongoUri =
//   "mongodb+srv://shivam8976:<password>@cluster0.wmqxy3u.mongodb.net/myApp?retryWrites=true&w=majority";

// mongoose.connect(mongoUri);

// ///////// SCHEMA /////////

// const carSchema = mongoose.Schema({
//   brand: String,
//   model: String,
//   year: Number,
//   avail: Boolean,
// });

// const Car = mongoose.model("Car", carSchema);

// /////////////////////////

// const port = process.env.POST || 3001;
// app.listen(port);

// /// shivam8976
// /// qWaQmlA0FpAVPArV

/////////////// POSTING /////////////

// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

// const mongoUri =
//   "mongodb+srv://shivam8976:<password>@cluster0.wmqxy3u.mongodb.net/myApp?retryWrites=true&w=majority";

// mongoose.connect(mongoUri);

// ///////// SCHEMA /////////

// const carSchema = mongoose.Schema({
//   brand: String,
//   model: String,
//   year: Number,
//   avail: Boolean,
// });

// const Car = mongoose.model("Car", carSchema);

// /////////////////////////

// app.post("/api/addCar", (req, res) => {
//   console.log(req.body);
// });

// const port = process.env.POST || 3001;
// app.listen(port);

// /// shivam8976
// /// qWaQmlA0FpAVPArV
