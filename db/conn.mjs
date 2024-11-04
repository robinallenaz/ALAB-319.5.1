//Importing mongoose
import mongoose from "mongoose";
// Mongoose model definition
const gradeSchema = new mongoose.Schema({
  learner_id: Number,
  class_id: Number,
  scores: [
    {
      type: { type: String, enum: ['exam', 'homework', 'quiz'] },
      score: Number,
    },
  ],
});

// Create the model
const Grade = mongoose.model("Grade", gradeSchema);

// Export the model
export default Grade;

// import { MongoClient } from "mongodb";


// async function connect() {
//   try {
//     await mongoose.connect(process.env.ATLAS_URI);
//     console.log('Connected to MongoDB');
//   } catch (err) {
//     console.error(err);
//   }
// }

// export default { Grades, connect };

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
