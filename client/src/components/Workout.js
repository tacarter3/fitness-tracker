// import Form from 'react-bootstrap/Form';
import { Form, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import '../App.css'
import { Card, ListGroup } from "react-bootstrap"

// import background from '.../images/exercise.jpg';


const Workout = () => {
      
    return (
    <main className="main"> 
    <div className='Workout'>
        <div className="workout-banner" style={{ backgroundColor: "#F5F5F5", width: "100%", border: "1px black solid" }}>
            <h1 className='workout-header'>Add a Workout</h1>
                <div className="workout-form">
                    <Form className="form-box">
                        <Row>
                            <Col xs={4} className="date-col">
                                <span>Date</span>
                            </Col>
                            <Col xs={5} className="exercise-col">
                                <span>Exercise</span>
                            </Col>
                            <Col xs={3}className="duration-col">
                                <span>Duration</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4} className="workout-column1" style={{ marginRight: "3em"}}>
                                <Form.Control type="date"></Form.Control>
                            </Col>
                            <Col xs={4} className="workout-column2">
                                <Form.Select aria-label="Default select example">
                                <option>Choose an Exercise</option>
                                <option value="1">Walking</option>
                                <option value="2">Cycling</option>
                                <option value="3">Running</option>
                                </Form.Select> 
                            </Col>
                            <Col xs={2} className="counter" style={{ backgroundColor: "lightgray",marginLeft: "3em"  }}>
                            <div className="box">
                                <button className="btn increment">+</button>
                                    <div>
                                        <span className="text">
                                            0
                                        </span>
                                    </div>
                                <button className="btn decrement">&ndash;</button>
                            </div>
                            </Col>
                        </Row>
                    </Form>
                </div>
        </div>
    </div>
        <div className="workout-body" style={{ backgroundImage: "url(/images/exercise.jpg)", height: "60em", width: "100%", backgroundSize: "cover", backgroundPosition: "center" }}>
        <Card className="workout-report" style={{ width: "30rem", marginTop: "2em", marginLeft: "20em" }}>
                <Card.Header style={{ backgroundColor: "#8F8F8F", color: "white", fontSize: "20px", fontStyle: "italic", fontWeight: "bold"}}>New Workout Added</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Item 1</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
 </main>   
 )
}


export default Workout
