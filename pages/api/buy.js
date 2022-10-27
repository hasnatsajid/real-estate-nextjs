import dbConnect from '../../lib/dbConnect';
import Listing from '../../models/Listing';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  try {
    const listings = await Listing.find({ type: 'buy' });
    console.log(listings.length);
    res.status(200).json({ success: true, data: listings });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
