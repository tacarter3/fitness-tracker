import { Card, ListGroup, Form, Row, Col } from "react-bootstrap"


const Calories = () => {
    return (
    <div>
        <div className="calorie-banner" style={{ backgroundImage: "url(/images/mixed-river-rocks.jpg", backgroundSize: "cover" }}>
            <h1 className="calorie-title">Calorie Tracking</h1>
        </div>
        <div className="calorie-img" style={{ backgroundImage: "url(/images/scale.jpg", height: "85vh", width: "86.8vh", backgroundSize: "cover" }}>

        <div className="calorie-form">
                    <Form className="calorie-form-box">
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
        <Card className="calorie-report" style={{ width: "30rem", marginTop: "2em" }}>
                <Card.Header style={{ backgroundColor: "black", color: "white", fontSize: "20px", fontStyle: "italic", fontWeight: "bold"}}>Exercise</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>New</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Card>

            <Card className="calorie-report" style={{ width: "30rem", marginTop: "2em" }}>
                <Card.Header style={{ backgroundColor: "black", color: "white", fontSize: "20px", fontStyle: "italic", fontWeight: "bold"}}>Water Intake</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>New</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Card>

            <Card className="calorie-report" style={{ width: "30rem", marginTop: "2em" }}>
                <Card.Header style={{ backgroundColor: "black", color: "white", fontSize: "20px", fontStyle: "italic", fontWeight: "bold"}}>Calorie Count</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>New</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
        

        
    </div>
    )
}


export default Calories