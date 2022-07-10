// import Form from 'react-bootstrap/Form';
import { Form, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import '../App.css'
import { Card, ListGroup } from "react-bootstrap"

// import background from '.../images/exercise.jpg';


const Workout = () => {
      
    return (
    <div className='Workout'>
        <div className="workout-banner" style={{ backgroundImage: "url(/images/brick-workout.jpg", backgroundSize: "cover", width: "100%" }}>
            <h1 className='workout-title'>Add a Workout</h1>
        </div>
        <div className="workout-report" style={{ backgroundImage: "url(/images/exercise.jpg)", height: "60em", width: "100%", backgroundSize: "cover", backgroundPosition: "center" }}>
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
                            <Col xs={2} className="counter" style={{ backgroundColor: "#11ffee00", marginLeft: "3em"  }}>
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
                    <Card className="workout-card" style={{ width: "30rem", marginTop: "3em", marginLeft: "12em" }}>
                        <Card.Header style={{ backgroundImage: "url(/images/brick-workout.jpg)", backgroundSize: "cover", color: "white", fontSize: "20px", fontStyle: "italic", fontWeight: "bold"}}>New Workout Added</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Item 1</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
        </div>
        <div className="workout-footer" style={{ backgroundImage: "url(/images/brick-workout.jpg", backgroundSize: "cover", height: "9em",  width: "100%" }}>

        </div>
    </div> 
 )
}


export default Workout
