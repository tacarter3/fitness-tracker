// import Form from 'react-bootstrap/Form';
import { Form, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import '../App.css'


const Workout = () => {
      
    return (
    <div className='Workout'>
        <h1 className='workout-header'>Add a Workout</h1>
            <div className="workout-form">
                <Form>
                    <Row>
                        <Col className="workout-column1">
                            <Form.Control type="date"></Form.Control>
                        </Col>
                        <Col className="workout-column2">
                            <Form.Select aria-label="Default select example">
                            <option>Choose an Exercise</option>
                            <option value="1">Walking</option>
                            <option value="2">Cycling</option>
                            <option value="3">Running</option>
                            </Form.Select> 
                        </Col>
                        <Col className="workout-column3">
                            <Form.Select aria-label="Default select example">
                            <option>Select the Duration</option>
                            <option value="1">Walking</option>
                            <option value="2">Cycling</option>
                            <option value="3">Running</option>
                            </Form.Select> 
                        </Col>    
                        <Col>
                        <ButtonGroup className="btn-workout" aria-label="Basic example">
                            <Col>
                            <Button variant="secondary">Left</Button>
                            </Col>
                            <Col>
                            <Button variant="secondary">Middle</Button>
                            </Col>
                        </ButtonGroup>
                        </Col>
                        <Col className="counter">
                        <div className="box">
                            <button className="btn increment">+</button>
                                <div>
                                    <span className="text">
                                        0
                                    </span>
                                </div>
                            <button className="btn decrement">-</button>
                        </div>
                        </Col>
                                                







                    </Row>



                </Form>
            </div>
    </div>
    )
}


export default Workout
