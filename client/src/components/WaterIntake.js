import { Form, Stack, Button } from "react-bootstrap"
import { Card, ListGroup, Row, Col } from "react-bootstrap"



let item = "Hello World"

const WaterIntake = () => {
    return (
        <div>
            <div className="water-intake-banner" style={{ backgroundImage: "url(/images/teal.jpg", backgroundSize: "cover"}}>
                <h1 className="water-intake-title">Water Intake Report</h1>
            </div>
            <div className="water-img" style={{ backgroundImage: "url(/images/water-level.jpg", height: "100vh", width: "100%", backgroundSize: "cover" }}>
                <div>
                <Row className="water-intake-row-1">
                            <Col xs={2} className="date-col">
                                <span>Date</span>
                            </Col>
                            <Col xs={5} className="exercise-col">
                                <span>Water Consumed (ounces)</span>
                            </Col>
                </Row>
                <Row className="water-intake-row-2">
                            <Col xs={2} className="workout-column1" style={{ marginRight: "3em"}}>
                                <Form.Control type="date"></Form.Control>
                            </Col>
                            <Col xs={5} className="counter" style={{ backgroundColor: "#11ffee00", marginLeft: "3em"  }}>
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
                </div>
                
                <div className="water-intake-report">
                    <Card className="exercise-card" style={{ width: "30rem", marginTop: "2em" }}>
                        <Card.Header style={{ backgroundImage: "url(/images/water-level.jpg", backgroundSize: "cover", color: "black", fontSize: "20px", fontStyle: "italic", fontWeight: "bold"}}>Exercise</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>{item}</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            
            </div>
            
        </div>
    )
}
export default WaterIntake