const mongoose = require("mongoose");

class Mongo {
  constructor() {
    mongoose
      .connect(`mongodb://db:27017/mern`)
      .then(() => {
        console.log("DB Connected");
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = Mongo;
