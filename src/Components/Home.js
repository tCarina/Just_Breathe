import NavBar from "./Navbar";
import Card from "react-bootstrap/Card";
import "../Styles/Home.css";
export default function Home() {
  return (
    <div className="Home">
      {" "}
      <NavBar />
      General Information
          <div className="card-facts">
          <div className="card2">   
        <Card border="primary" style={{ width: "18rem" }} >
          <Card.Header>Fact #1</Card.Header>
          <Card.Body>
            <Card.Title>Panic Disorder (PD)</Card.Title>
            <Card.Text>
              PD affects 6 million adults, or 2.7% of the U.S. population. men
              are twice as likely to be affected as men.
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        <div className="card3">
        <Card border="primary" style={{ width: "18rem" }} > 
          <Card.Header>Fact #2</Card.Header>
          <Card.Body>
            <Card.Title>Generalized Anxiety Disorder (GAD)</Card.Title>
            <Card.Text>
              GAD affects 6.8 million adults, or 3.1% of the U.S. population,
              yet only 43.2% are receiving treatment.
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        <div className="card4">
        <Card border="primary" style={{ width: "18rem" }} >
          <Card.Header>Fact #3</Card.Header>
          <Card.Body>
            <Card.Title>Social Anxiety Disorder</Card.Title>
            <Card.Text>
              SAD affects 15 million adults, or 6.8% of the U.S. population. SAD
              is equally common among men and women and typically begins around
              age 13.
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        <div className="card5">
        <Card border="primary" style={{ width: "18rem" }} >
          <Card.Header>Fact #4</Card.Header>
          <Card.Body>
            <Card.Title>Stress</Card.Title>
            <Card.Text>
              The difference between stress and anxiety is that stress is a
              response to a threat in a situation. Anxiety is a reaction to the
              stress.
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        <div className="card6">
        <Card border="primary" style={{ width: "18rem" }} >
          <Card.Header>Fact #5</Card.Header>
          <Card.Body>
            <Card.Title>Children</Card.Title>
            <Card.Text>
              Anxiety disorders affect 25.1% of children between 13 and 18 years
              old with untreated children to be at higher risk at performing
              poorly in school.
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        <div className="card7">
        <Card border="primary" style={{ width: "18rem" }} >
          <Card.Header>Fact #6</Card.Header>
          <Card.Body>
            <Card.Title>Additional Statistics</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        </div>
    </div>
  );
}
