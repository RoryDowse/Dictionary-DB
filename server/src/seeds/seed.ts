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
        await DictionaryModel.deleteMany({});
        console.log('Existing dictionary cleared.');

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
            },
            {
                word: "limerence",
                meaning: "The state of being infatuated or obsessed with another person, often characterized by intense desire for reciprocation."
            },
            {
                word: "zeitgeist",
                meaning: "The defining spirit or mood of a particular time period, especially as expressed in literature, art, or philosophy."
            },
            {
                word: "ephemeral",
                meaning: "Lasting for a very short time; fleeting."
            },
            {
                word: "quixotic",
                meaning: "Extremely idealistic, unrealistic, and impractical."
            },
            {
                word: "compersion",
                meaning: "The feeling of joy one has when seeing a loved one experience joy in the company of someone else."
            },
            {
                word: "petrichor",
                meaning: "The pleasant, earthy smell that comes after rain."
            },
            {
                word: "schadenfreude",
                meaning: "The pleasure derived from another person’s misfortune."
            },
            {
                word: "palimpsest",
                meaning: "A manuscript or piece of writing material on which later writing has been superimposed on effaced earlier writing."
            },
            {
                word: "epiphany",
                meaning: "A moment of sudden and profound revelation or realization."
            },
            {
                word: "anhedonia",
                meaning: "Inability to experience pleasure from activities usually found enjoyable."
            },
            {
                word: "ineffable",
                meaning: "Too great or extreme to be expressed or described in words."
            },
            {
                word: "altruism",
                meaning: "The belief in or practice of selfless concern for the well-being of others."
            },
            {
                word: "cogito",
                meaning: "I think, therefore I am. A Latin phrase used to express the philosophical idea that one’s existence is confirmed by the ability to think."
            },
            {
                word: "sagacity",
                meaning: "The quality of being wise, or having keen insight and sound judgment."
            },
            {
                word: "hiraeth",
                meaning: "A homesickness for a place that no longer exists or that may never have been."
            },
            {
                word: "panacea",
                meaning: "A universal remedy or solution for all problems."
            },
            {
                word: "serenity",
                meaning: "The state of being calm, peaceful, and untroubled."
            },
            {
                word: "euphoria",
                meaning: "A feeling or state of intense excitement and happiness."
            },
            {
                word: "catharsis",
                meaning: "The process of releasing, and thereby providing relief from, strong or repressed emotions."
            },
            {
                word: "lullaby",
                meaning: "A soothing song or lullaby, often sung to children to help them sleep."
            },
            {
                word: "incandescent",
                meaning: "Emitting light as a result of being heated; brilliantly radiant."
            },
            {
                word: "contemplation",
                meaning: "The action of looking thoughtfully at something for a long time."
            },
            {
                word: "altruistic",
                meaning: "Showing a selfless concern for the well-being of others."
            },
            {
                word: "seraphic",
                meaning: "Characterized by a sublime or angelic nature."
            },
            {
                word: "introspection",
                meaning: "The examination or observation of one’s own mental and emotional state."
            },
            {
                word: "melancholy",
                meaning: "A feeling of deep sadness or sorrow, often with no obvious cause."
            },
            {
                word: "mellifluous",
                meaning: "Sweet or musical; pleasant to hear."
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
