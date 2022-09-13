import mongoose, { Schema } from 'mongoose';

const ListingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  beds: {
    type: Number,
    required: true,
  },
  baths: {
    type: Number,
    required: true,
  },
  parking: {
    type: Number,
    required: true,
  },
  area: {
    type: Number,
    required: true,
  },
  amenities: {
    type: [String],
  },
  price: {
    type: Number,
    required: true,
  },
  listedAt: {
    type: Date,
    default: Date.now,
  },
  photos: {
    type: [String],
    required: true,
  },
  video: String,
  agent: {
    name: String,
    email: String,
    image: String,
    phone: Number,
  },
  // location: {
  //   type: Point,
  // },
});

export default mongoose.models.Listing || mongoose.model('Listing', ListingSchema);
