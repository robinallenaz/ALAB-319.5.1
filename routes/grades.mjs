import express from "express";
import "dotenv/config";
//Importing mongoose
import mongoose from 'mongoose';

const gradesSchema = new mongoose.Schema({
  learner_id: {
    type: Number,
    min: 0,
    message: "must be an integer greater than or equal to 0 and is required",
    required: true
  },
  class_id: {
    type: Number,
    min: 0,
    max: 300,
    message: "must be an integer between 0 and 300 and is required",
    required: true
  } 
}, { versionKey: false }) // Disables the __v field ;

// single field index on class_id
gradesSchema.index({class_id: 1})

// single field index on learner_id
gradesSchema.index({learner_id: 1})

// compound index on class_id and learner_id
gradesSchema.index({class_id: 1, learner_id: 1})

const Grades = mongoose.model('Grades', gradesSchema);

export default Grades;


// import db from "../db/conn.mjs";
// import { ObjectId } from "mongodb";

const router = express.Router();

// Create a single grade entry
// router.post("/", async (req, res) => {
//   let Grades = await Grades.find();
//   let newDocument = req.body;

//   // rename fields for backwards compatibility
//   if (newDocument.student_id) {
//     newDocument.learner_id = newDocument.student_id;
//     delete newDocument.student_id;
//   }

//   let result = await Grades.create(newDocument);
//   res.send(result).status(204);
// });

// Get a single grade entry
// router.get("/:id", async (req, res) => {
//   console.log(req.params.id);
//   let collection = await db.collection("grades");
//   let query = { _id: ObjectId(req.params.id) };
//   let result = await Grades.findOne(query);
//   if (!result) res.send("Not found").status(404);
//   else res.send(result).status(200);
// });

// Add a score to a grade entry
// router.patch("/:id/add", async (req, res) => {
//   let collection = await db.collection("grades");
//   let query = { _id: ObjectId(req.params.id) };

//   let result = await Grades.updateOne(query, {
//     $push: { scores: req.body },
//   });

//   if (!result) res.send("Not found").status(404);
//   else res.send(result).status(200);
// });

// Remove a score from a grade entry
// router.patch("/:id/remove", async (req, res) => {
//   let collection = await db.collection("grades");
//   let query = { _id: ObjectId(req.params.id) };

//   let result = await Grades.updateOne(query, {
//     $pull: { scores: req.body },
//   });

//   if (!result) res.send("Not found").status(404);
//   else res.send(result).status(200);
// });

// Delete a single grade entry
// router.delete("/:id", async (req, res) => {
//   let collection = await db.collection("grades");
//   let query = { _id: ObjectId(req.params.id) };
//   let result = await Grades.deleteOne(query);

//   if (!result) res.send("Not found").status(404);
//   else res.send(result).status(200);
// });

// Get route for backwards compatibility
// router.get("/student/:id", async (req, res) => {
//   res.redirect(`learner/${req.params.id}`);
// });

// Get a learner's grade data
// router.get("/learner/:id", async (req, res) => {
//   let collection = await db.collection("grades");
//   let query = { learner_id: Number(req.params.id) };

  // Check for class_id parameter
//   if (req.query.class) query.class_id = Number(req.query.class);

//   let result = await Grades.find(query);

//   if (!result) res.send("Not found").status(404);
//   else res.send(result).status(200);
// });

// Delete a learner's grade data
// router.delete("/learner/:id", async (req, res) => {
//   let collection = await db.collection("grades");
//   let query = { learner_id: Number(req.params.id) };

//   let result = await collection.deleteOne(query);

//   if (!result) res.send("Not found").status(404);
//   else res.send(result).status(200);
// });

// Get a class's grade data
// router.get("/class/:id", async (req, res) => {
//   let collection = await db.collection("grades");
//   let query = { class_id: Number(req.params.id) };

//   // Check for learner_id parameter
//   if (req.query.learner) query.learner_id = Number(req.query.learner);

//   let result = await collection.find(query).toArray();

//   if (!result) res.send("Not found").status(404);
//   else res.send(result).status(200);
// });

// // Update a class id
// router.patch("/class/:id", async (req, res) => {
//   let collection = await db.collection("grades");
//   let query = { class_id: Number(req.params.id) };

//   let result = await collection.updateMany(query, {
//     $set: { class_id: req.body.class_id },
//   });

//   if (!result) res.send("Not found").status(404);
//   else res.send(result).status(200);
// });

// // Delete a class
// router.delete("/class/:id", async (req, res) => {
//   let collection = await db.collection("grades");
//   let query = { class_id: Number(req.params.id) };

//   let result = await collection.deleteMany(query);

//   if (!result) res.send("Not found").status(404);
//   else res.send(result).status(200);
// });

// export default router;
