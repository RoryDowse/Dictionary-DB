import dotenv from 'dotenv';
import mongoose from 'mongoose';
import DictionaryModel from '../models/Dictionary.js';
import db from '../config/connection.js';

dotenv.config();

// Function to seed the dictionary collection
const seedDictionary = async () => {
    // Establish the database connection
    try {
        await db();
        console.log('Seeding dictionary...');

        // Clear existing data
        // await DictionaryModel.deleteMany({});
        // console.log('Existing dictionary cleared.');

        // Define the dictionary words and their meanings
        const dictionary = [
            {
                word: "serendipity",
                meaning: "The occurrence of events by chance in a happy or beneficial way, bringing unexpected joy."
            },
            {
                word: "sonder",
                meaning: "The realization that each random passerby is living a life as vivid and complex as your own."
            },
            {
                word: "ubuntu",
                meaning: "An African philosophy meaning 'I am because we are,' emphasizing shared humanity and compassion."
            },
            {
                word: "elan",
                meaning: "Energy, style, and enthusiasm; a spirited approach to life."
            },
            {
                word: "eunoia",
                meaning: "A state of goodwill and kindness towards others; beautiful thinking."
            },
            {
                word: "solasta",
                meaning: "Shining with brightness and radiance, illuminating everything around."
            },
            {
                word: "felicity",
                meaning: "Intense happiness; the ability to find appropriate expression for one’s thoughts."
            }
        ];

        // Loop through the dictionary array and insert each word and its meaning into the database
        for (const dict of dictionary) {
            const dictionary = new DictionaryModel(dict); // Create a new dictionary entry from the model
            await dictionary.save(); // Save the entry to the database
        }

        console.log('Dictionary seeded successfully!');
        mongoose.disconnect(); // Disconnect from the database after seeding
    } catch (error) {
        // Log any errors that occur during the seeding process
        console.error('Error seeding dictionary:', error);
    } finally {
        // Ensure the database connection is closed even if an error occurs
        mongoose.disconnect();
    }
};

// Call the function to seed the dictionary
seedDictionary();
