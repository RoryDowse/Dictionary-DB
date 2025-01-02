import { useState, useEffect } from "react";
import { Table, Container, Spinner } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { GET_ALL_WORDS } from "../utils/queries";
import ErrorPage from "./ErrorPage";
import { Dictionary } from "../models/Dictionary";

const SearchAllWords = () => {
    const { loading, error, data } = useQuery(GET_ALL_WORDS);
    const [words, setWords] = useState<Dictionary[]>([]);

    useEffect(() => {
        if (data && data.getAllWords) {
            // Alphabetize the words
            const sortedWords = [...data.getAllWords].sort((a, b) =>
                a.word.localeCompare(b.word)  
            );
            setWords(sortedWords);
        }
    }, [data]);

    if (error) {
        console.error("Error fetching words:", error);
        return <ErrorPage />;
    }

    if (loading) {
        return (
            <Container className="text-center">
                <Spinner animation="border" variant="primary" />
            </Container>
        );
    }

    return (
        <Container className="mt-4 text-center" style={{ padding: '0 10%' }}>
            <h2 className="text-center">Search All Words</h2>
            {words.length > 0 ? (
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Word</th>
                        </tr>
                    </thead>
                    <tbody>
                        {words.map((word) => (
                            <tr key={word._id}>
                                <td>{word.word}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <p>No words found.</p>
            )}
        </Container>
    );
};

export default SearchAllWords;