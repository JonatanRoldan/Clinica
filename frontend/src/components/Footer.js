import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logoc.png";
import icon1 from "../assets/img/icon-whatsapp.png";
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://api.whatsapp.com/send/?phone=50236289472&text=Hola%20Bienvenido!"><img src={icon1} alt="whatsapp" /></a>
                        </div>
                        <p>CopyRight 2023. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}