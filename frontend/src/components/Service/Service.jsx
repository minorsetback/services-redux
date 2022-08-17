import { useParams } from "react-router-dom";
import { useFetchServices } from "../../bus/services/hooks/useFetchServices";
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";
import { createBrowserHistory } from 'history'

function Services() {
    let { id } = useParams();
    const { data, error, isFetching } = useFetchServices(String(id));
    const navigate = useNavigate();
    const history = createBrowserHistory();


    if (error) {
        return (<Button variant="outline-success" className='mb-2' onClick={() => history.go(0)}>Refresh</Button>)
    }

    if (isFetching) {
        return (
            <Spinner animation="border" role="status" className="loader">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }

    return (
        <>
            <Button variant="outline-success" className='mb-2' onClick={() => navigate(-1)}>Go back</Button>
            <Card>
                <Card.Body>
                    <Card.Title className="w-2">{data?.name}</Card.Title>
                    <Card.Text>Price: {data?.price}</Card.Text>
                    <Card.Text>Content: {data?.content}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Services