import Dictionary, { DictionaryDocument } from "../models/Dictionary.js";

const resolvers = {
    Query: {
        // Resolver for the `getAllWords` query, which fetches all dictionary entries.
        getAllWords: async (): Promise<DictionaryDocument[]> => {
            try {
                // Use the `find` method on the Mongoose model to fetch all documents from the database.
                const foundAllWords = await Dictionary.find();
                return foundAllWords;
            } catch (error) {
                console.error("Error fetching all words:", error);
                throw new Error("Failed to fetch all words.");
            }
        },
        // Resolver for the `getWordMeaning` query, which fetches the meaning of a specific word.
        getWordMeaning: async (
            _parent: unknown,
            args: { word: string } // Arguments parameter must be second argument in resolver
        ): Promise<DictionaryDocument | null> => {
            try {
                // Use the `findOne` method to fetch the document where the word matches the provided argument.
                const foundWordMeaning = await Dictionary.findOne({ word: args.word });

                // If no document is found, throw an error to inform the client
                if (!foundWordMeaning) {
                    throw new Error(`Word "${args.word}" not found in the dictionary.`);
                }

                return foundWordMeaning;
            } catch (error) {
                console.error("Error fetching word meaning:", error);
                throw new Error("Failed to fetch word meaning.");
            }
        },
    },
};

export default resolvers;