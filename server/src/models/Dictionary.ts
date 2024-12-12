import mongoose, { Schema, Document, Model } from 'mongoose';

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
            maxLength: 100,
        },
    meaning: {
            type: String,
            maxLength: 1000,
        }
    }, { timestamps: true });

const Dictionary: Model<DictionaryDocument> = mongoose.model<DictionaryDocument>("Dictionary", dictionarySchema);

export default Dictionary;