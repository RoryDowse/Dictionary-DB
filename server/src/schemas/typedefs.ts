// Define GraphQL type definitions using SDL (Schema Definition Language).
const typeDefs = `
    type Dictionary {
        _id: ID!
        word: String!
        meaning: String
        createdAt: String
        updatedAt: String
    }

    type Query {
        getAllWords: [Dictionary]
        getWordMeaning(word: String!): Dictionary
        getWordsByLetter(letter: String!): [Dictionary]
    }
`;

export default typeDefs;