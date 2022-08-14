import dbConnect from '../../../lib/dbConnect';
import Listing from '../../../models/Listing';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const listings = await Listing.find({});
        res.status(200).json({ success: true, data: listings });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const listing = await Listing.create(req.body);
        res.status(201).json({ success: true, data: listing });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      break;
  }
}
