import { Card, ListGroup } from "react-bootstrap"


let item = "Hello World"

const ActivityReport = () => {
    return (
        <div>
            <div className="activity-banner" style={{ backgroundImage: "url(/images/metal-grid.jpg", backgroundSize: "cover" }}>
                <h1 className="activity-title">Activity Report</h1>
            </div>
            <div className="activity-img" style={{ backgroundImage: "url(/images/workout.jpg", height: "78vh", width: "100%", backgroundSize: "cover" }}>
                <div className="activity-report">
                    <Card className="exercise-card" style={{ width: "30rem", marginTop: "2em" }}>
                        <Card.Header style={{ backgroundImage: "url(/images/metal-grid.jpg", backgroundSize: "cover", color: "white", fontSize: "20px", fontStyle: "italic", fontWeight: "bold"}}>Exercise</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>{item}</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <Card className="water-card" style={{ width: "30rem", marginTop: "2em" }}>
                        <Card.Header style={{ backgroundImage: "url(/images/metal-grid.jpg", backgroundSize: "cover", color: "white", fontSize: "20px", fontStyle: "italic", fontWeight: "bold"}}>Water Intake</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>{item}</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Card>

                    <Card className="calorie-card" style={{ width: "30rem", marginTop: "2em" }}>
                        <Card.Header style={{ backgroundImage: "url(/images/metal-grid.jpg", backgroundSize: "cover", color: "white", fontSize: "20px", fontStyle: "italic", fontWeight: "bold"}}>Calorie Count</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>{item}</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            
            </div>
            <div className="workout-footer" style={{ backgroundImage: "url(/images/metal-grid.jpg", backgroundSize: "cover", height: "5em",  width: "100%" }}>
            </div>
            
        </div>
            
    )
}


export default ActivityReport