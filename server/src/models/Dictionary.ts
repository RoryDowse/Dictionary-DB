import { Schema, type Document } from 'mongoose';

// Typescript interface
export interface DictionaryDocument extends Document {
    _id: string;
    word: string;
    meaning: string;
}

// Moongoose schema
const dictionarySchema = new Schema<DictionaryDocument>({
    word: {
            type: String,
            required: true,
        },
    meaning: {
            type: String
        }
})

export default dictionarySchema;