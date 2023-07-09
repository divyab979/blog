import connectDB from '../../utils/connectDB';
import Featured from '../../models/Featured';

// Connect to MongoDB
connectDB();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const features = await Featured.find().sort({ date: -1 });
      res.status(200).json({ success: true, data: features });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(404).json({ message: 'Not found' });
  }
}