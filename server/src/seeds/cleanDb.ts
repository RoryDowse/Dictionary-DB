// Importing the database connection from the config file
import db from '../config/connection.js';

export default async (collectionName: string) => {
    try {
        // Attempt to establish a connection to the database
        const connection = await db();
        
        // Check if the connection to the database was successful
        if (!connection.db) {
            throw new Error('Database connection is not established.');
        }

        // List all collections and check if the specified collection exists
        const collectionExists = await connection.db.listCollections({ name: collectionName }).toArray();

        // If the collection exists, drop it
        if (collectionExists.length) {
            await connection.db.dropCollection(collectionName);
            console.log(`Collection ${collectionName} dropped.`);
        } else {
            // If the collection does not exist, log this message
            console.log(`Collection ${collectionName} does not exist.`);
        }
    } catch (err) {
        // Catch any errors and log them
        console.error('Error in checking or dropping collection:', err);
        throw err;
    }
};