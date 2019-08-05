const mongoose = require('mongoose');

const ZoneSchema = new mongoose.Schema({
  zone: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      default: 'Polygon',
    },
    coordinates: {
      type: [[[Number]]], // Array of array of array of numbers
      required: true,
    },
  },
  price: {
    type: Number,
    required: true,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

const Zone = mongoose.model('Zone', ZoneSchema);

module.exports = Zone;
