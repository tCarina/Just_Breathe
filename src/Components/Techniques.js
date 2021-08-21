import Carousel from 'react-bootstrap/Carousel';
import "../Styles/techniques.css"
import img1 from "../Media/exercise.jpeg"
import img2 from "../Media/grass.jpeg"
import img3 from "../Media/imagination.jpeg"
import NavBar from './Navbar';
export default function Techniques() {
    return (
        <div>
            <NavBar />
            <div className="carousel-div">
                <Carousel>
                    <Carousel.Item interval={10000}>
                        <img
                            className="img1 d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <div className="modal-div">
                                <h2>Walk or do light exercise</h2>
                                <p>Walking can remove a person from a stressful environment, and the rhythm of walking may also help them regulate their breathing. Moving around releases hormones called endorphins that relax the body and improve mood. Taking up regular exercise can help reduce anxiety over time, which may lead to a reduction in the number or severity of panic attacks.</p>
                                <a href="https://www.medicalnewstoday.com/articles/153390">Learn more here</a>

                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={10000}>
                        <img
                            className="img2 d-block w-100"
                            src={img2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <div className="modal-div">
                                <h2>The 5-4-3-2-1 method</h2>
                                <p>Look at 5 separate objects. Think about each one for a short while.
                                    Listen for 4 distinct sounds. Think about where they came from and what sets them apart.
                                    Touch 3 objects. Consider their texture, temperature, and what their uses are.
                                    Identify 2 different smells. This could be the smell of your coffee, your soap, or the laundry detergent on your clothes.
                                    Name 1 thing you can taste. Notice whatever taste is in your mouth, or try tasting a piece of candy.</p>
                                <a href="https://images.squarespace-cdn.com/content/v1/5536830ce4b04567e58178fa/1531767643952-UCZO3TBAW6WIIJLFJHUK/Barefoot-Grass-Walking-Health.jpg">Learn more here</a>
                            </div></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={10000}>
                        <img
                            className="img3 d-block w-100"
                            src={img3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <div className="modal-div">
                                <h2>Challenge and Replace unrealistic thoughts.</h2>
                                <p>This is a process by which you stop your anxiety-producing thoughts and replace them with thoughts of something that brings
                                     you happiness or peace. This can help you avoid rumination, that broken-record thought cycle where you can’t seem to stop
                                      obsessing about something. You can also ask yourself some questions. Is the thing you are afraid of a true and present danger?
                                       Realize that you are experiencing fear, but that you are not in danger. Taking the danger out of the situation will help you
                                        to relax a bit</p>
                                <a href="https://www.wikihow.com/Calm-Yourself-During-an-Anxiety-Attack">Learn more here</a>
                            </div></Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>);
}
