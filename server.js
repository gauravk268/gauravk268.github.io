const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));


const connectDB = function () {
  const uri =
    "mongodb://admin-gaurav:Gaurav5005@cluster0-shard-00-00.18tdj.mongodb.net:27017,cluster0-shard-00-01.18tdj.mongodb.net:27017,cluster0-shard-00-02.18tdj.mongodb.net:27017/testDB?ssl=true&replicaSet=atlas-7phcdu-shard-0&authSource=admin&retryWrites=true&w=majority";

  console.log("[mongoose] Connecting to database...");
  try {
    mongoose.connect(
      uri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log("[mongoose] Connection Established.")
    );
  } catch (error) {
    console.log("[mongoose] Could not connect: ", error);
  }
};

const closeDB = function () {
  mongoose.connection.close();
  console.log("[mongoose] Closing Connection.");
};

connectDB();

const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  localTimeStamp: String,
  timeStamp: { type : Date, default: Date.now }
});

app.post('/feedback', (req, res)=>{
  const FeedBack = mongoose.model("FeedBack", feedbackSchema);

  const localTimeDate = new Date().toLocaleString("en-US", { timeZone: 'Asia/Kolkata' }).
    replace(/\//, '-').
    replace(/\//, '-');
  
  const feedback = new FeedBack({
    name: req.body.name,
    email: req.body.email,
    message: req.body.feedback,
    localTimeStamp: "mm-dd-yyyy: " + localTimeDate
  });

  feedback.save(function (err, savedfeedback) {
    if (err) {
      console.log("Could not save Feedback: " + err);
      res.send("<h2>Could not save your feedback. Please try again.</h2>")
    } else {
      // console.log(savedfeedback);
      console.log("[mongoose] Feedback saved successfully.");
      res.status(200).sendFile(__dirname + "/public/feedback_success.html")
    }
  });
});

app.post("/homepage", (req, res)=>{
  res.redirect("/");
});


app.get('/', (req, res)=>{
  // res.status(200).sendFile(__dirname + './index.html');
  res.status(200).sendFile(__dirname + './index.min.html');
});

app.get('/favicon.ico', (req, res)=>{
  res.status(204);
  res.redirect('/');
});

app.listen(process.env.PORT || 3000, ()=>{
  console.log("Server up and running!!");
  console.log(process.env.PORT);
});