import mongoose, { Schema, model } from "mongoose";

const sampleSchema = new Schema({}, { timestamps: true });

const Sample = new model("Sample", sampleSchema, "Sample");

export default Sample;