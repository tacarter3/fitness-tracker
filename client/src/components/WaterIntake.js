import { Form, Stack, Button } from "react-bootstrap"


const WaterIntake = () => {
    return (
        <div className="water-img" style={{ backgroundImage: "url(/images/water-fountain.jpg", height: "100vh", width: "100%", backgroundSize: "cover" }}>
            <h1 className="water-header">Water Intake</h1>
            <div className="water-intake">
                <Stack direction="horizontal" gap={3 }>
                    <Form.Control className="me-auto" placeholder="Add your item here..." />
                    <Button variant="secondary">Submit</Button>
                    <div className="vr" />
                    <Button variant="outline-warning">Reset</Button>
                </Stack>
            </div>
            <div className="water-content">
                <Stack gap={3}>
                    <div className="bg-light border">First item</div>
                    <div className="bg-light border">Second item</div>
                    <div className="bg-light border">Third item</div>
                </Stack>
            </div>
        
        
        
        
        
        
        </div>



    )
}

export default WaterIntake