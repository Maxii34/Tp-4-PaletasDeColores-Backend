import { text } from "express";
import mongoose, { Schema } from "mongoose";

const colorSchema = new Schema({
    nombreColor: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 10,
        unique: true
    },
    hexadecimal: {
        type: String,
        required: true,
        minLength: 7,
        maxLength: 7,
        unique: true,
        match: /^#[0-9A-Fa-f]{6}$/
    },
});

const color = mongoose.model("color", colorSchema);

export default color;

