import { Card, ListGroup, Form, Row, Col } from "react-bootstrap"


const Calories = () => {
    return (
    <div>
        <div className="calorie-banner" style={{ backgroundImage: "url(/images/mixed-river-rocks.jpg", backgroundSize: "cover" }}>
            <h1 className="calorie-title">Calorie Tracking</h1>
        </div>
        <div className="calorie-img" style={{ backgroundImage: "url(/images/scale.jpg", height: "85vh", width: "100vh", backgroundSize: "cover" }}>

        <div className="calorie-form">
                    <Form className="calorie-form-box">
                        <Row>
                            <Col xs={3} className="date-col">
                                <span>Date</span>
                            </Col>
                            <Col xs={5} className="exercise-col">
                                <span>Calories Consumed</span>
                            </Col>
                            <Col xs={3}className="duration-col">
                                <span>Calorie Expenditure</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={3} className="workout-column1" style={{ marginRight: "3em"}}>
                                <Form.Control type="date"></Form.Control>
                            </Col>
                            <Col xs={3} className="counter" style={{ backgroundColor: "#11ffee00", marginLeft: "3em"  }}>
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
                            <Col xs={3} className="counter" style={{ backgroundColor: "#11ffee00", marginLeft: "3em"  }}>
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