import Character from "../models/Character.js";
import User from "../models/User.js";

/* CREATE */
export const createCharacter = async (req, res) => {
    try {
        const { userId } = req.body;
        const user = await User.findById(userId);
        const newCharacter = new Character({
            userId,
            charName,
            level,
            race,
            charClass,
            alignment,
            experience,
            strength,
            dexterity,
            constitution,
            intelligence,
            wisdom,
            charisma,
            imported,
            gender,
        });
        await newCharacter.save();

        const character = await Character.find();
        res.status(201).json(character);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};

/* READ */
export const getFeedCharacters = async (req, res) => {
    try {
        const character = await Character.find();
        res.status(200).json(character);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

// important 
export const getUserCharacters = async (req, res) => {
    try {
        const { userId } = req.params;
        const character = await Character.find({ userId });
        res.status(200).json(character);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

/* UPDATE */
// important 
export const updateCharacter = async (req, res) => {
    try {
        const { id } = req.params; // The ID of the character to update
        const {
            charName,
            level,
            race,
            charClass,
            alignment,
            experience,
            strength,
            dexterity,
            constitution,
            intelligence,
            wisdom,
            charisma,
            imported,
            gender,
        } = req.body;

        // Find the character in the database
        const character = await Character.findById(id);

        if (!character) {
            return res.status(404).json({ message: "Character not found" });
        }

        // Update the character data
        character.charName = charName || character.charName;
        character.level = level || character.level;
        character.race = race || character.race;
        character.charClass = charClass || character.charClass;
        character.alignment = alignment || character.alignment;
        character.experience = experience || character.experience;
        character.strength = strength || character.strength;
        character.dexterity = dexterity || character.dexterity;
        character.constitution = constitution || character.constitution;
        character.intelligence = intelligence || character.intelligence;
        character.wisdom = wisdom || character.wisdom;
        character.charisma = charisma || character.charisma;
        character.imported = imported || character.imported;
        character.gender = gender || character.gender;

        // Save the updated character to the database
        await character.save();

        res.status(200).json(character);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
