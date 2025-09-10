import React from "react";
import "../styles/Intro.css";
import Typist from "react-typist";
import Typical from 'react-typical';
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";

const keywords = [
  "Fullstack Developer",
  2000,
  "Singer",
  2000,
  "and Tea is love.",
  2000,
];

class Intro extends React.Component {
  constructor() {
    super();
  this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  
  render() {
    return (
      <div id="intro">
        <FractalTree />
        <Typist avgTypingDelay={100}>
          <span className="intro-title">
            {"hi, "}
            <span className="intro-name">{"Akash kumar"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">
            <Typical steps={keywords} loop={Infinity} wrapper="span" />
          </div>
          <div className="intro-desc">
            Aspiring final year software engineering student with hands-on
            experience in full-stack development. Passionate about solving
            real-world problems through innovative technology solutions.
          </div>
          <a href="mailto:akashkumar8449832367@gmail.com" className="intro-contact">
            <EmailRoundedIcon />
            {" Say hi!"}
          </a>
          <a
            style={{ marginLeft: '10px' }}
            href="https://drive.google.com/file/d/1X7kuXCgvT8SAKolCCJAvIQvQdUKPkpwC/view?usp=sharing" className="intro-contact">
            <OpenInNewIcon />
            {"Resume"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
