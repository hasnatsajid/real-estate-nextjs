import { Schema } from 'mongoose';

const ListingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  beds: {
    type: Number,
  },
  baths: {
    type: Number,
  },
  area: {
    type: Number,
  },
  description: {
    type: Mixed,
  },
  type: {
    type: String,
    required: true,
  },
  listedAt: {
    type: Date,
    default: Date.now,
  },
  facilities: {
    type: [String],
  },
  agent: {
    type,
  },
  location: {
    type: Point,
  },
});
