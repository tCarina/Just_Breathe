import { Navbar, Container, Nav} from "react-bootstrap";
export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Just Breathe</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/techniques">Techniques</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
