import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import item1 from "../assets/img/item1.jpg";
import item2 from "../assets/img/item2.jpg";
import item3 from "../assets/img/item3.jpg";
import item4 from "../assets/img/item4.jpg";
import './Servicios.css';
import { forwardRef } from "react";

export const Servicios = () => {
    const responsive ={
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Servicios
                            </h2>
                            <p>Texto de ejemplo</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={item1} alt="Image" />
                                    <h5>Alergista pediátrico</h5>
                                </div>
                                <div className="item">
                                    <img src={item2} alt="Image" />
                                    <h5>Neonatología</h5>
                                </div>
                                <div className="item">
                                    <img src={item3} alt="Image" />
                                    <h5>Inmunología</h5>
                                </div>
                                <div className="item">
                                    <img src={item4} alt="Image" />
                                    <h5>Neurología</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

//<img className="background-image" src={colorSharp} />