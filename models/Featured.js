import mongoose from 'mongoose'

const featuredSchema = new mongoose.Schema({
    
    featuredImage: {
        type: String,
        required: true,
    },
    featureddescription: {
        type: String,
        required: true,
    },
   
});
export default mongoose.models.Featured || mongoose.model('Featured', featuredSchema)

