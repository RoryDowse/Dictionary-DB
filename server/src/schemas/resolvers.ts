import Dictionary, { DictionaryDocument } from "../models/Dictionary.js";

const resolvers = {
    Query: {
        getAllWords: async (
            _parent: unknown,
            _args: unknown,
            _context: unknown
        ): Promise<DictionaryDocument[]> => {
            try {
                const foundAllWords = await Dictionary.find();
                return foundAllWords;
            } catch (error) {
                console.error("Error fetching all words:", error);
                throw new Error("Failed to fetch all words");
            }
        },
    },
};

export default resolvers;