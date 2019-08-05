const mongoose = require('mongoose');
const { ENUM_CATEGORY } = require('../utils/const');

const StoreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  direction: {
    type: {
      type: String,
      default: 'Point',
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  category: {
    type: String,
    enum: ENUM_CATEGORY,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  operation_time_start: {
    type: [Date],
    required: true,
  },
  operation_time_end: {
    type: [Date],
    required: true,
  },
  score: {
	type: Number,
	default:5.0
  },
  logo_url: {
    type: String,
  },
  products: {
    type: [
      {
        name: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        slot: {
          type: Number,
          required: true,
        },
        photo_url: {
          type: Number,
        },
      },
    ],
  },
  is_active:{
	  type:Boolean,
	  default:true
  }
}, { timestamps: true });

const Store = mongoose.model('Store', StoreSchema);

module.exports = Store;
