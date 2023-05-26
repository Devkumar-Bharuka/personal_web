import React from 'react';
import ProgressMeter from './Progressmeter'; // Note the lowercase 'm' in 'Progressmeter'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../assets/img/color-sharp.png';
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
              Dynamic Full Stack Developer | HTML, CSS, React, Node.js, JavaScript & Python | 
                <br /> Skilled Backend Developer | AI/ML & Python Expert | Innovating computer engineering with cutting-edge tech. Strong coding foundation and drive for excellence. 
              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <ProgressMeter progressValue={90} />
                  <h5>Python</h5>
                  <h7>Basic+OOPS+Lib</h7>
                </div>
                <div className="item">
                  <ProgressMeter progressValue={80} />
                  <h5>Database</h5>
                  <h7>SQL/MongoDB/Firebase</h7>
                </div>
                <div className="item">
                  <ProgressMeter progressValue={75} />
                  <h5>AWS</h5>
                  <h7>Host/IAAS/SAAS/PAAS</h7>
                </div>
                <div className="item">
                  <ProgressMeter progressValue={90} />
                  <h5>HTML-CSS</h5>
                  <h7>Frontend/Webpage</h7>
                </div>
                <div className="item">
                  <ProgressMeter progressValue={50} />
                  <h5>ReactJS</h5>
                  <h7>Frontend</h7>
                </div>
                <div className="item">
                  <ProgressMeter progressValue={50} />
                  <h5>NodeJS</h5>
                  <h7>Backend</h7>
                </div>
                <div className="item">
                  <ProgressMeter progressValue={50} />
                  <h5>JAVA</h5>
                  <h7>Android Dev</h7>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
