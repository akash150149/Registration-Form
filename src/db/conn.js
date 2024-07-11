//Connecting DATABASE with the Express Application

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://akashpoddarelevensc2020:u9dmOpXES5scByeK@cluster0.c4bzbi1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    //this connect method gonna return a Promise
    useNewUrlParser: true,
    useUnifiedTopology: true, //we write this 3 condition to avoid Deprication Warning
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connection Successful!");
  })
  .catch((e) => {
    console.log("No Connection till now....");
  });
