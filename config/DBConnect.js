const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then((con) => console.log("Connected to database."))
    .catch((err) => console.log(err.message));
};

module.exports = dbConnect;
