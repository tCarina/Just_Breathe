import NavBar from "./Navbar";
import Card from "react-bootstrap/Card";
import "../Styles/Home.css";
export default function Home() {
  return (
    <div className="Home">
      {" "}
      <NavBar />
      <div className='homeContainer'>
      <h4>
        Anxitey is a feeling of Fear, Dread, and Uneasiness. It is one of the
        leading Mental Health concerns in the US with over 40 million adults
        being affected. Let's take a second to Just Breathe and process the
        facts that are down below.
      </h4>
      <div className="card-facts">
        <div className="card2">
          <Card border="primary" style={{ width: "18rem" }}>
          <Card.Header>Panic Disorder (PD)</Card.Header>
            <Card.Body>
              <Card.Text>
                PD affects 6 million adults, or 2.7% of the U.S. population. men
                are twice as likely to be affected as men.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="card3">
          <Card border="primary" style={{ width: "18rem" }}>
            <Card.Header>Generalized Anxiety Disorder (GAD)</Card.Header>
            <Card.Body>
              <Card.Text>
                GAD affects 6.8 million adults, or 3.1% of the U.S. population,
                yet only 43.2% are receiving treatment.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="card4">
          <Card border="primary" style={{ width: "18rem" }}>
            <Card.Header>Social Anxiety Disorder</Card.Header>
            <Card.Body>
              <Card.Text>
                SAD affects 15 million adults, or 6.8% of the U.S. population.
                SAD is equally common among men and women and typically begins
                around age 13.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="card5">
          <Card border="primary" style={{ width: "18rem" }}>
            <Card.Header>Stress</Card.Header>
            <Card.Body>
              <Card.Text>
                The difference between stress and anxiety is that stress is a
                response to a threat in a situation. Anxiety is a reaction to
                the stress.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="card6">
          <Card border="primary" style={{ width: "18rem" }}>
            <Card.Header>Children</Card.Header>
            <Card.Body>
              <Card.Text>
                Anxiety disorders affect 25.1% of children between 13 and 18
                years old with untreated children to be at higher risk at
                performing poorly in school.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="card7">
          <Card border="primary" style={{ width: "18rem" }}>
            <Card.Header>Additional Statistics</Card.Header>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
    </div>
  );
}
