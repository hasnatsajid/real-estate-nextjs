import listing from './listing.mongo';

export const getAllListings = async () => {
  return await listing.find({});
};

export const createListing = async () => {
  try {
  } catch (e) {}
};
