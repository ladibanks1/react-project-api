import { Schema , model } from "mongoose";

// Job Details Schema
const jobDetailsSchema = new Schema({
    title : String,
    type : String,
    description : String,
    location : String,
    salary : String,
    company : {
        name : String,
        description : String,
        contactEmail : String,
        contactPhone : String,
    }
});

export default model("Job_detail", jobDetailsSchema);