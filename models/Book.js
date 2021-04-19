const { Schema, model } = require("mongoose");
const moment = require("moment");
//const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { 
    type: String 
  },
  author: { 
    type: String 
  },
  description: { 
    type: String 
  },
  image: { 
    type: String 
  },
  infoLink: { 
    type: String 
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a')
  }
});

const Book = model("Book", bookSchema);

module.exports = Book;
