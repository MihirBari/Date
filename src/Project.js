import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "./assets/img/Marine-Drive.jpg";
import projImg2 from "./assets/img/JUHU.jpg";


export const Projects = () => {
    const projects = [
        {
            title: "Sunset At marines",
            description: "Dinner at It's Lucknowi",
            imgUrl: projImg1,
        },
        {
            title: "Sunset at juhu",
            description: "Dinner at Exotic",
            imgUrl: projImg2,
        }
    ];


    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2 style={{color:"red"}}>PICK A PLACE</h2>
                        <Row className="d-flex">
                            {projects.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    {...project}
                                />
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};


