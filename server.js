const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const upload = require("express-fileupload");

const corsOption = {
  origin: "http://localhost:20699",
};
// Connect to the Database
connectDB();

const app = express();

// Init Midleware
app.use(cors(corsOption));
app.use(express.json({ extended: false }));
app.use(upload()); // permet l'upload des images

app.get("/", (req, res) => {
  res.send("API running");
});

app.use("/images", express.static("./images"));

// Define Routes
app.use("/news", require("./routes/news"));

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log("Server started on port : " + PORT);
});
