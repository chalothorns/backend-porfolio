import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true},
    email: { type: String, lowercase: true, trim: true},
    subject: { type: String, required: true},
    message: { type: String, required: true},
  },
  {
    timestamps: true,
  }
);


//mongodb will automatically create tenants collection
//ตัวแปรที่เป็น class ใช้ pascal case
export const Contact = mongoose.model("Contact", contactSchema)