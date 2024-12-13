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

        // Define the dictionary words and their meanings
        const dictionary = [
            {
                word: "gnasche",
                meaning: "the intense desire to bite deeply into the forearm of someone you love."
            },
            {
                word: "adronitis",
                meaning: "frustration with how long it takes to get to know someone—spending the first few weeks chatting in their psychological entryway, with each subsequent conversation like entering a different anteroom."
            },
            {
                word: "kenopsia",
                meaning: "the eerie, forlorn atmosphere of a place that’s usually bustling with people but is now abandoned and quiet—a school hallway in the evening, an unlit office on a weekend, vacant fairgrounds—an emotional."
            },
            {
                word: "dead reckoning",
                meaning: "to find yourself bothered by someone’s death more than you would have expected, as if you assumed they would always be part of the landscape, like a lighthouse you could pass by for years until the night."
            },
            {
                word: "ambedo",
                meaning: "a kind of melancholic trance in which you become completely absorbed in vivid sensory details—raindrops skittering down a window, tall trees leaning in the wind, clouds of cream swirling in your coffee."
            },
            {
                word: "adomania",
                meaning: "the sense that the future is arriving ahead of schedule, that all those years with fantastical names like ‘2013’ are bursting from their hypothetical cages into the arena of the present, furiously bucking the grip of your expectations."
            },
            {
                word: "semaphorism",
                meaning: "a conversational hint that you have something personal to say on the subject but don’t go any further—an emphatic nod, a half-told anecdote, an enigmatic ‘I know the feeling'."
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