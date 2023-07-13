const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReservationsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("reservations", ReservationsSchema);
