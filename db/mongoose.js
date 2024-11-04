
import mongoose from 'mongoose';
async function connect() {
  try {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.cgnmk.mongodb.net/sample_training');
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
  }
}

export default connect;