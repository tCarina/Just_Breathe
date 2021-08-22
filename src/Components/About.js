import React from "react";
import "../Styles/About.css";
import img1 from "../Media/Carina.jpg";
import img2 from "../Media/Shoaib.jpg";
import img3 from "../Media/Carlos.jpg";
import NavBar from "./Navbar";
export default function About() {
  return (
    <div>
      <NavBar />
      <main className="About">
        <div className="header">
          <h1>Purpose</h1>
          <p>
            Our app is designed around to help individuals who suffer from
            Anxitey and give them a safe space to be able to take control of
            their situation.{" "}
          </p>
        </div>
        <section className="header2">
          <h3>Our Team Members</h3>
          <section>
            <div className="Carlos">
              <img src={img3} alt="Carlos-Hidalgo-pic" className="top" />
              <h5>Carlos Hidalgo</h5>
              <p>Personal Description</p>
              <a
                href="https://github.com/chidalgo1221"
                target="_blank"
                rel="noopener noreferrer"
                className="github"
              >
                Github
              </a>
            </div>
            <div className="Carina">
              <img src={img1} alt="Carina-Taveras-pic" />
              <h5>Carina Taveras</h5>
              <p>Need a personal description</p>
              <a
                href="https://github.com/tCarina"
                target="_blank"
                rel="noopener noreferrer"
                className="github"
              >
                Github
              </a>
            </div>
            <div className="Shoaib">
              <img src={img2} alt="Shoaib-Dar-pic" />
              <h5>Shoaib Dar</h5>
              <p>Need a personal description</p>
              <a
                href="https://github.com/SDAR30"
                target="_blank"
                rel="noopener noreferrer"
                className="github"
              >
                Github
              </a>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
