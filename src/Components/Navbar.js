import { Navbar, Container, Nav } from "react-bootstrap";
import {NavLink} from "react-router-dom"
import "../Styles/navbar.css"
export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className="nav-format">
                <Nav className="nav-logo">
                    Just Breathe
                </Nav>
                <Nav>
                    <NavLink className="nav-text" exact to="/home">
                        Home
                    </NavLink>
                </Nav>
                <Nav>
                    <NavLink className="nav-text" exact to="/techniques">
                        Coping Techniques
                    </NavLink>
                </Nav>
                <Nav>
                    <NavLink className="nav-text" exact to="/about">
                        About
                    </NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
}
