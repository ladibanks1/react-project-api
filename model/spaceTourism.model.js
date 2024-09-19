import { Schema, SchemaTypes, model } from "mongoose";

// Images Sub Document Schema
const images = new Schema({
  png: {
    type: String,
    required: true,
  },
  webp: {
    type: String,
    required: true,
  },
});
// Crew Schema
const crewSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  images,
  role: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
});

// Destination Schema
const destinationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  images,
  description: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  travel: {
    type: String,
    required: true,
  },
});

// Technology Schema
const technologySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  images: {
    type: {
      portrait: {
        type: String,
        required: true,
      },
      landscape: {
        type: String,
        required: true,
      },
    },
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const crew = model("crew", crewSchema);
const destination = model("destination", destinationSchema);
const technology = model("technologie", technologySchema);
export default { crew, destination, technology };
