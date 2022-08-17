import React from "react"
import { useFetchServices } from "../../bus/services/hooks/useFetchServices";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import { createBrowserHistory } from 'history'

function HomePage() {
    const { data, error, isFetching } = useFetchServices();
    const history = createBrowserHistory();

    if (error) {
        return (<Button variant="outline-success" className='mb-2' onClick={() => history.go(0)}>Refresh</Button>)
    }

    return (
        <div className="wrapper">
            {isFetching ?
                <div className="text-center mt-5">
                    <Spinner animation="border" role="status" as="div">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
                : null
            }
            <Container>
                <Row>
                    {!isFetching &&
                        data &&
                        data.length && data.map((item, index) => {
                            return (
                                <Col xs key={index}>
                                    <Link to={`/${item?.id}`}>
                                        <Card style={{ width: '18rem', height: '10rem' }} className='mt-4'>
                                            <Card.Body>
                                                <Card.Title className="w-2">{item?.name}</Card.Title>
                                                <Card.Text>Price: {item?.price}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                            )
                        })}
                </Row>
            </Container>
        </div>
    )
}

export default HomePage