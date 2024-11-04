//Importing mongoose
import mongoose from "mongoose";

// import { MongoClient } from "mongodb";

// Load environment variables from .env
import dotenv from "dotenv";
dotenv.config();

const gradesSchema = new mongoose.Schema({
  // Schema fields
});

const Grades = mongoose.model('Grades', gradesSchema);

async function connect() {
  try {
    await mongoose.connect(process.env.ATLAS_URI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
  }
}

export default { Grades, connect };

// const client = new MongoClient(process.env.ATLAS_URI);

// let conn;
// try {
//   conn = await client.connect();
// } catch (e) {
//   console.error(e);
// }

// let db = conn.db("sample_training");

// const grades = db.collection("grades");

// grades.createIndex({ class_id: 1 });

// grades.createIndex({ learner_id: 1 });

// grades.createIndex({ class_id: 1, learner_id: 1 });

// export default db;
