import { Card, ListGroup } from "react-bootstrap"


let item = "Hello World"

const ActivityReport = () => {
    return (
        <div>
            <div className="activity-banner">
                <h1 className="activity-title">Activity Report</h1>
            </div>
            <div className="acitivty-img" style={{ backgroundImage: "url(/images/workout.jpg", height: "100vh", width: "100%", backgroundSize: "cover" }}>
                <div className="activity-report">
                    <Card className="exercise-card" style={{ width: "30rem", marginTop: "2em" }}>
                        <Card.Header style={{ backgroundColor: "#76641D", color: "white", fontSize: "20px", fontStyle: "italic", fontWeight: "bold"}}>Exercise</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>{item}</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <Card className="water-card" style={{ width: "30rem", marginTop: "2em" }}>
                        <Card.Header style={{ backgroundColor: "#76641D", color: "white", fontSize: "20px", fontStyle: "italic", fontWeight: "bold"}}>Water Intake</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>{item}</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Card>

                    <Card className="calorie-card" style={{ width: "30rem", marginTop: "2em" }}>
                        <Card.Header style={{ backgroundColor: "#76641D", color: "white", fontSize: "20px", fontStyle: "italic", fontWeight: "bold"}}>Calorie Count</Card.Header>
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


export default ActivityReport