import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_WORDS_BY_LETTER } from "../utils/queries";
import { Table, Container, Form, Button, Spinner, Alert } from "react-bootstrap";

const SearchWordsByLetter = () => {
    // State for storing the search letter
    const [letter, setLetter] = useState<string>("");
    // State for submitting the letter
    const [searchLetter, setSearchLetter] = useState<string>("");

    const { data, loading, error } = useQuery(GET_WORDS_BY_LETTER, {
        variables: { letter: searchLetter },
        skip: !searchLetter, // Skip the query if no search letter is entered
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSearchLetter(letter.trim().toLowerCase()); // Trigger the search when the form is submitted
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLetter(e.target.value); // Update letter state as the user types
    };

    return (
        <Container className="mt-4 text-center" style={{ padding: "0 10%" }}>
            <h2 className="text-center">Search Words By Letter</h2>
            <Form onSubmit={handleSubmit} className="mb-4">
                <Form.Group controlId="letter">
                    <Form.Label className="mb-2">Enter a letter to search for words:</Form.Label>
                    <Form.Control
                        className="text-center"
                        type="text"
                        value={letter}
                        maxLength={1}
                        pattern="[a-zA-Z]"
                        onChange={handleChange}
                        placeholder="Please enter a single letter"
                    />
                </Form.Group>
                <Button type="submit" variant="primary" className=" button mt-3">
                    Search
                </Button>
            </Form>

            {searchLetter && (
                <>
                    {loading && (
                        <Container className="text-center mt-5">
                            <Spinner animation="border" style={{ color: 'white' }} />
                            <p>Loading...</p>
                        </Container>
                    )}

                    {error && (
                        <Alert variant="danger">
                            <p>
                                Error searching for "<strong>{searchLetter}</strong>": {error.message}
                            </p>
                            <p>Please try again or verify the word exists in the dictionary.</p>
                        </Alert>
                    )}

                    {!loading && !error && data && data.getWordsByLetter.length > 0 && (
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Word</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.getWordsByLetter.map((word: { _id: string; word: string }) => (
                                    <tr key={word._id}>
                                        <td>{word.word}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}

                    {!loading && !error && data && data.getWordsByLetter.length === 0 && (
                        <p>No words found for "{searchLetter}". Please try another letter.</p>
                    )}
                </>
            )}
        </Container>
    );
};

export default SearchWordsByLetter;
