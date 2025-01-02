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
        setSearchTerm(word.trim().toLowerCase()); // Trigger the search when the form is submitted
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWord(e.target.value); // Update word state as the user types
    };

    return (
        <Container className="mt-4 text-center" style={{ padding: "0 10%" }}>
            <h2 className="text-center">Search Word Meaning</h2>
            <Form onSubmit={handleSubmit} className="mb-4">
                <Form.Group controlId="word">
                    <Form.Label className="mb-2">Enter a word to search for its meaning:</Form.Label>
                    <Form.Control
                        className="text-center"
                        type="text"
                        value={word}
                        onChange={handleChange}
                        placeholder="Enter a word"
                    />
                </Form.Group>
                <Button type="submit" variant="primary" className="mt-3 button">
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
                            <p className="mt-3">
                                Sorry, I could not find "<strong>{searchTerm}</strong>". Does it exist in this dictionary?
                            </p>
                            <a href={`/search-all-words`} className="error-link">
                                <Button className="button">
                                Search All Words
                                </Button>
                            </a>
                        </Alert>
                    )}

                    {!loading && !error && data &&data.getWordMeaning && (
                        <div style={{ paddingTop: '20px' }}>
                            <h3>{data.getWordMeaning.word}</h3>
                            <p>{data.getWordMeaning.meaning}</p>
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
