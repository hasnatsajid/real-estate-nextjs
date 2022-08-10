import mongoose from 'mongoose';

const ListingSchema = new mongoose({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
});
