import dbConnect from '../../../lib/dbConnect';
import Listing from '../../../models/Listing';

export default async function handler(req, res) {
  const { query } = req;

  await dbConnect();

  try {
    const listing = await Listing.findById(query.id);
    res.status(200).json({ success: true, data: listing });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
