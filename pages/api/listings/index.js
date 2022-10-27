import dbConnect from '../../../lib/dbConnect';
import Listing from '../../../models/Listing';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const listings = await Listing.find({});
        res.status(200).json({ status: true, data: listings });
      } catch (e) {
        res.status(400).json({ status: false, message: e.message });
      }
      break;
    case 'POST':
      try {
        const listing = await Listing.create(req.body);
        res.status(201).json({ status: true, data: listing });
      } catch (e) {
        res.status(400).json({ status: false, message: e.message });
      }
      break;

    default:
      break;
  }
}
