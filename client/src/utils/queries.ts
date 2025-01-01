import { gql } from '@apollo/client';

export const GET_ALL_WORDS = gql`
    query getAllWords {
        getAllWords {
           _id
           word
           createdAt
           updatedAt 
        }
    }
`;

export const GET_WORD_MEANING = gql`
    query getWordMeaning($word: String!) {
        getWordMeaning(word: $word) {
           word
           meaning
        }
    }
`;

export const GET_WORDS_BY_LETTER = gql`
    query getWordsByLetter($letter: String!) {
        getWordsByLetter(letter: $letter) {
            _id
           word
        }
    }
`;

