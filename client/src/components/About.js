import {Card} from 'react-bootstrap'



const About = () => {
    return (
        <div className="about">
            <h1>About Fitness Tracker</h1>
            <Card body className="about-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nobis facilis illo ab numquam odio aperiam, quaerat sequi non architecto vitae doloribus in, quasi exercitationem assumenda itaque. Veniam, voluptates atque.
            </Card>
            <div className="about-img" style={{ backgroundImage: "url(/images/swimming-pool.jpg", height: "75vh", width: "100%", backgroundSize: "cover" }}></div>
        </div>
    )
}


export default About