import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import pdfFile from "../assets/img/dv.pdf";

export const Newsletter = ({}) => {


  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'dv.pdf';
    link.click();
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Open to Exciting Opportunities!<br /> </h3>
              <h5>Have a project in mind? Let's bring it to life! Contact me below and let's discuss how we can work together.</h5>
            </Col>
            <Col md={6} xl={7}>
              <div className="new-email-bx">
                <button type="button" onClick={handleDownload}>Download CV</button>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
