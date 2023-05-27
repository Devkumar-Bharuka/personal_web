import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project.gif";
import projImg2 from "../assets/img/project2.gif";
import projImg3 from "../assets/img/project3.gif";
import projImg4 from "../assets/img/project4.png";
import projImg5 from "../assets/img/project5.gif";
import projImg6 from "../assets/img/project6.gif";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Extraction Agricultural Field using Active Contour",
      description:
        "Advanced Boundary Extraction from Satellite Imagery | Efficiently extracting precise boundaries of agricultural fields from satellite images and generating KML files with accurate coordinates. Empowering data-driven decision making in agriculture.",
      imgUrl: projImg1,
    },
    {
      title: "Music Listening and Suggesting Web App",
      description:
        "Personalized Music Discovery Web App | Categorized music library with intelligent user profiling. Recorded user's song history, analyzed preferences, and suggested curated playlists based on their unique musical taste. Rediscover the joy of music.",
      imgUrl: projImg2,
    },
    {
      title: "Android App Development",
      description:
        "SNT Stock Management and Buyer App | Streamlined stock management and buyer tracking for SNT company. Seamlessly organized inventory, recorded buyer details, and analyzed data insights for enhanced business operations. Empowering efficient decision-making.",
      imgUrl: projImg3,
    },
  ];

  const projects2 = [
    {
      title: "Automated Voice Assistant",
      description:
        "Smart Voice Assistant with Natural Language Processing | Created a versatile voice assistant leveraging Python libraries to process audio input and provide intuitive responses. Handled tasks, answered queries, and made daily interactions effortless with the power of voice.",
      imgUrl: projImg4,
    },
    {
      title: "Pacman Game",
      description:
        "Pacman Game in C with Graphics Library | Retro Fun and Classic Gameplay | Developed a Pacman-inspired game using C programming language and the graphic.h library.",
      imgUrl: projImg5,
    },
    {
      title: "Covid Vaccination Locator",
      description:
        "An Android app that locates nearby vaccination centers. Stay informed about vaccine availability, charges, and age group eligibility. Book your vaccination slots effortlessly and protect yourself.",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>My Projects</h2>
                  <p>Hover to see details.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? "animate__animated animate__slideInUp" : ""}
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
