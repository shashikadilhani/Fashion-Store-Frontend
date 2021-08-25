import React from 'react';
// import { Row, Container, Col } from "reactstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.css';
import Grid from '@material-ui/core/Grid';

function Footer() {
    return (
        <footer className="footer-Home">
            <Container className="con">
                <Row className="footer-row">
                    <Col lg="3" md="6">
                        <h5 className="footer-topic">Address</h5>
                        <p className="footer-des">No.398, Galle Road , Aluthgama</p>
                    </Col>
                    <Col lg="3" md="6" >
                        <h5 className="footer-topic">Phone</h5>
                        <p className="footer-des">Reception :  +94 79 8888 990 <br />Office :  +94 34 227 0456</p>
                    </Col>
                    <Col lg="3" md="6" >
                        <h5 className="footer-topic">Email</h5>
                        <p className="footer-des">Office :  <a href="#" className="link">happypaws@gmail.com</a> <br />Site :  <a href="#" className="link">happy.com</a></p>
                    </Col>
                    <Col lg="3" md="6">
                        <h5 className="footer-topic">Social</h5>
                        <div className="round-social light">
                            <a href="#" className="link"><i className="fa fa-facebook-square" aria-hidden="true"><br/></i></a>
                            <a href="#" className="link"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="#" className="link"><i className="fa fa-instagram"aria-hidden="true"></i></a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="copyright">
                        <span >
                            © {new Date().getFullYear()}, made with{" "}
                            <i className="fa fa-heart heart" /> by 2GCode
                        </span>
                    </div>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;