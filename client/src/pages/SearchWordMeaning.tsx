import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_WORD_MEANING } from "../utils/queries";
import { Container, Form, Button, Spinner, Alert } from "react-bootstrap";

const SearchWordMeaning = () => {
    // State for storing the search word
    const [word, setWord] = useState<string>("");
    // State for submitting the word
    const [searchTerm, setSearchTerm] = useState<string>("");

    const { data, loading, error } = useQuery(GET_WORD_MEANING, {
        variables: { word: searchTerm },
        skip: !searchTerm, // Skip the query if no search term is entered
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSearchTerm(word.trim()); // Trigger the search when the form is submitted
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWord(e.target.value); // Update word state as the user types
    };

    return (
        <Container className="mt-4">
            <h2 className="text-center">Search Word Meaning</h2>
            <Form onSubmit={handleSubmit} className="mb-4">
                <Form.Group controlId="word">
                    <Form.Label>Enter a word to search for its meaning:</Form.Label>
                    <Form.Control
                        type="text"
                        value={word}
                        onChange={handleChange}
                        placeholder="Enter a word"
                    />
                </Form.Group>
                <Button type="submit" variant="primary" className="mt-3">
                    Search
                </Button>
            </Form>

            {/* Render content only if a search term is entered */}
            {searchTerm && (
                <>
                    {loading && (
                        <Container className="text-center">
                            <Spinner animation="border" variant="primary" />
                            <p>Loading...</p>
                        </Container>
                    )}

                    {error && (
                        <Alert variant="danger">
                            <p>
                                Error searching for "<strong>{searchTerm}</strong>": {error.message}
                            </p>
                            <p>Please try again or verify the word exists in the dictionary.</p>
                        </Alert>
                    )}

                    {!loading && !error && data &&data.getWordMeaning && (
                        <div>
                            <h3>Word: {data.getWordMeaning.word}</h3>
                            <p>
                                <strong>Meaning:</strong> {data.getWordMeaning.meaning}
                            </p>
                        </div>
                    )}
                    
                    {!loading && !error && data && data.getWordMeaning.length === 0 && (
                            <p>No results found for "{searchTerm}". Please try another word.</p>
                    )}
                </>
            )}
        </Container>
    );
};

export default SearchWordMeaning;
