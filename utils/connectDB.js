import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        const MONGODB_URI="mongodb+srv://divyab979:imdyingsend.help12@cluster0.gqqobqj.mongodb.net/?retryWrites=true&w=majority";
        await mongoose.connect(MONGODB_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
 } );
 console.log('database connected succesfully');
} catch(error){
    console.error('failed to connect',error);
    return;
}
}; connectDB();
export default connectDB;