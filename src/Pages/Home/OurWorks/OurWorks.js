import React from "react";
import { Container } from "react-bootstrap";
import "./OurWorks.css";

const OurWorks = () => {
  return (
    <div className="full-works-container">
      <Container className="py-5">
        <div id="image-gallary">
          <h2>Our Works</h2>
          <div className="grid-container">
            <div className="single-image">
              <a className="image-title" href="./">
                Tours <span>1550 Locations</span>
              </a>
              <div className="root-image">
                <a href="./">
                  <img
                    width="300"
                    height="169"
                    src="http://themes.codezion.com/angular/toor/assets/images/tour-block_4.jpg"
                    alt="Richarlison"
                  />
                </a>
              </div>
            </div>
            <div className="single-image">
              <a className="image-title" href="./">
                Cruises <span>1100 Locations</span>
              </a>

              <div className="root-image">
                <a href="./">
                  <img
                    width="300"
                    height="169"
                    src="http://themes.codezion.com/angular/toor/assets/images/tour-block_2.jpg"
                    alt="Harry Kane"
                  />
                </a>
              </div>
            </div>
            <div className="single-image">
              <a className="image-title" href="./">
                Hotels <span>1200 Locations</span>
              </a>

              <div className="root-image">
                <a href="./">
                  <img
                    width="300"
                    height="169"
                    src="http://themes.codezion.com/angular/toor/assets/images/tour-block_3.jpg"
                    alt="Fabinho"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurWorks;
