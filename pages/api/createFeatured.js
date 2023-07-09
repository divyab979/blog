import connectDB from "@/utils/connectDB";
import Featured from "@/models/Featured";
connectDB();
export default async function handler(req, res) {
    
    try {
      const { featuredImage, featureddescription} = req.body;
      const featured = new Featured({
      featuredImage,
      featureddescription,
    });

    await featured.save();
      res.status(200).json({ success: true, data: featured });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  }