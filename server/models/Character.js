import mongoose from "mongoose";

const characterSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    charName: {
        type: String,
        required: true,
        trim: true,
    },
    level: {
        type: Number,
        required: true,
        trim: true,
        default: 1,
    },
    race: {
        type: String,
        required: true,
        trim: true,
    },
    charClass: {
        type: String,
        required: true,
        trim: true,
    },
    alignment: {
        type: String,
        required: true,
        trim: true,
    },
    experience: {
        type: Number,
        required: true,
        default: 0,
        trim: true,
    },
    strength: {
        type: Number,
        required: true,
    },
    dexterity: {
        type: Number,
        required: true,
    },
    constitution: {
        type: Number,
        required: true,
    },
    intelligence: {
        type: Number,
        required: true,
    },
    wisdom: {
        type: Number,
        required: true,
    },
    charisma: {
        type: Number,
        required: true,
    },
    imported: {
        type: Boolean,
        required: true,
    },
});

const Character = mongoose.model("Character", characterSchema);

export default Character;
