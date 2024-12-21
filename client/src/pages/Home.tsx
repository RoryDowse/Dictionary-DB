import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <h2>Search Dictionary</h2>
                <Row className="mt-4">
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    All Words
                                </Card.Title>
                                <Card.Text>
                                    Search all words in the dictionary.
                                </Card.Text>
                                <Button 
                                variant="primary"
                                aria-label="Search all words in the dictionary"
                                onClick={() => navigate('/search-all-words')}
                                >
                                    Search Words
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    Word Meaning
                                </Card.Title>
                                <Card.Text>
                                    Search the meaning of a word in the dictionary.
                                </Card.Text>
                                <Button 
                                variant="primary"
                                aria-label="Search the meaning of a word in the dictionary"
                                onClick={() => navigate('/search-word-meaning')}
                                >
                                    Search Meaning
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                Words By Letter
                            </Card.Title>
                            <Card.Text>
                                Search words in the dictionary by letter.
                            </Card.Text>
                            <Button 
                            variant="primary"
                            aria-label="Search words in the dictionary by letter"
                            onClick={() => navigate('/search-words-by-letter')}
                            >
                                Search Letter
                            </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
        </Container>
    );
};

export default Home;