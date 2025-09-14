import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently a <b>Learner</b> at
        <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" target="_blank"> FindOut?</a>, learning Data Structures and Algorithms (<b>DSA</b>) and practising <b>Development</b>. At the same time, I am undertaking
        graduation. <b> Bachelor of Technology</b> in <b>Computer Sciences and Engineering </b>at{" "}
        <a href="https://aktu.ac.in/" target="_blank">AKTU</a>.
      </p>
    );
    const two = (
      <p>
      Outside of the work, I play guitar, sing and dance as well. I also play a lot of video games. And make cringe videos.
      </p>
    );

    const tech_stack = [
      "React.js",
      "C++",
      "Express.js",
      "Node.js",
      "Javascript ES6+",
      "MongoDb/PostgressSQL"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Akash Kumar" src={"/assets/image.jpeg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
