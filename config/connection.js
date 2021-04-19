const mongoose = require("mongoose");

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooksearch",
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(res => console.log("connected"))
.catch(err => console.log(err));

module.exports = mongoose.connection;