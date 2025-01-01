import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import './Home.css';


const Home = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <h2 className="mt-4 text-center">Search Dictionary</h2>
                <Row className="mt-4 text-center">
                    <Col md={4} sm={12} className="mb-3">
                        <Card>
                            <Card.Body className="py-4">
                                <FaSearch className="icon" />
                                <Card.Title>
                                    All Words
                                </Card.Title>
                                <Card.Text>
                                    Search all words in the dictionary
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
                    <Col md={4} sm={12} className="mb-3">
                        <Card>
                            <Card.Body className="py-4">
                                <FaBookReader className="icon"/>
                                <Card.Title>
                                    Word Meaning
                                </Card.Title>
                                <Card.Text>
                                    Search the meaning of a word in the dictionary
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
                    <Col md={4} sm={12} className="mb-3">
                    <Card>
                        <Card.Body className="py-4">
                            <RxLetterCaseCapitalize className="icon" />
                            <Card.Title>
                                Words By Letter
                            </Card.Title>
                            <Card.Text>
                                Search words in the dictionary by letter
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