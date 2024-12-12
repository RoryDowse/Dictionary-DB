import mongoose, { Schema, Document, Model } from 'mongoose';

// Define the TypeScript interface to type-check the structure of the Dictionary documents.
export interface DictionaryDocument extends Document {
    _id: string;
    word: string;
    meaning: string;
}

// Create a Mongoose schema that maps the Dictionary document structure to the database fields.
const dictionarySchema = new Schema<DictionaryDocument>({
    word: {
            type: String,
            required: true,
            maxLength: 100,
        },
    meaning: {
            type: String,
            maxLength: 1000,
        }
    }, { timestamps: true });

// Create a Mongoose model from the schema. The model provides methods to interact with the database.
const Dictionary: Model<DictionaryDocument> = mongoose.model<DictionaryDocument>("Dictionary", dictionarySchema);

// Export the model to use it in other parts of the application.
export default Dictionary;