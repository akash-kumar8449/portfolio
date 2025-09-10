import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const spotlightProjects = {
      Imagify: {
        title: "Imagify",
        desc:
          "Imagify is a full-stack web application that provides secure user authentication and credit-based image processing using React, Node.js, and MongoDB.",
        techStack: "MongoDb, Express.js, React.js, Node.js",
        link: "https://github.com/akash-kumar8449/imagify",
        // open: "https://docmate-frontend.vercel.app/",
        image: "/assets/imagify.png",
      },
      URLShortener: {
        title: "Url-Shortener",
        desc:
          "URL Shortener is a full-stack application that allows users to create and manage secure shortened URLs with authentication, analytics, and MongoDB integration.",
        techStack: "MongoDb, Express.js, React.js, Node.js",
        link: "https://github.com/akash-kumar8449/URL-Shortener",
        // open: "https://local-seva-sakshgupta.vercel.app/",
        image: "/assets/shortener-url.png",
      },
      Gemini : {
        title: "Gemini Clone",
        desc:
          "Gemini Clone is a React-based AI application that integrates Google Generative AI APIs to generate dynamic responses with configurable model parameters.",
        techStack: " React.js",
        link: "https://github.com/akash-kumar8449/Gemini-clone",
        image: "/assets/Gemini.png",
      },
    };
    const projects = {
      Imagify : {
        desc:
          "Imagify is a full-stack web application that provides secure user authentication and credit-based image processing using React, Node.js, and MongoDB.",
        techStack: "MongoDb, Express.js, React.js, Node.js",
        link: "https://github.com/akash-kumar8449/imagify",
        // open: "https://docmate-frontend.vercel.app/",
      },
      URLShortener : {
        desc:
          "URL Shortener is a full-stack application that allows users to create and manage secure shortened URLs with authentication, analytics, and MongoDB integration.",
        techStack: "MongoDb, Express.js, React.js, Node.js",
        link: "https://github.com/akash-kumar8449/URL-Shortener",
        // open: "https://local-seva-sakshgupta.vercel.app/",
      },
      Gemini: {
        desc:
          "Gemini Clone is a React-based AI application that integrates Google Generative AI APIs to generate dynamic responses with configurable model parameters.",
        techStack: " React.js",
        link: "https://github.com/akash-kumar8449/Gemini-clone",
      },
      // "Sylus AI": {
      //   desc:
      //     "AI chatbot similar to Google Gemini. It utilizes the Gemini API with the model gemini-1.5-flash for natural language processing and generation.",
      //   techStack: "React.js, ContextAPI, Generative AI",
      //   link: "https://github.com/abh1nav9/Sylus-AI",
      //   open: "https://sylusai.vercel.app/",
      // },
      // "Trading Bot": {
      //   desc:
      //     "Automated trading application designed to fetch real-time stock prices and perform trading operations.",
      //   techStack: "Javascript, Express.js, FS, Alpaca API",
      //   link: "https://github.com/abh1nav9/tradingBot",
      // },
      // "Task Manager": {
      //   desc:
      //     "Task manager web app to manage your all tasks with CRUD functionality.",
      //   techStack: "MongoDb, Express.js, React.js, Node.js",
      //   link: "https://github.com/abh1nav9/TaskManagerAssignment",
      //   open: "https://task-manager-assignment-frontend.vercel.app/",
      // },
      // "Currency Convertor": {
      //   desc: "A simple react app to convert currency worldwide.",
      //   techStack: "React.js, Node.js",
      //   link: "https://github.com/abh1nav9/Currency-Convertor",
      //   open: "https://currency-convertor-pied-rho.vercel.app/",
      // },
      // "Diabetes Prediction": {
      //   desc:
      //     "This web application predicts whether a person has diabetes based on various health parameters.",
      //   techStack: "Jupyter Notebook, Python",
      //   link: "https://github.com/abh1nav9/DiabetesPrediction",
      // },
      // "Link Stack": {
      //   desc: "A simple web app that contains all user social links.",
      //   techStack: "Typescript, React.ts",
      //   link: "https://github.com/abh1nav9/Link-Stack",
      //   open: "https://links-ashy-six.vercel.app/",
      // },
      // Meteora: {
      //   desc: "3D Interactive Earth + Weather App",
      //   techStack: "ReactJS, Javascript, Spline 3D, OpenWeatherAPI",
      //   link: "https://github.com/abh1nav9/Meteora",
      //   open: "https://meteora-six-olive.vercel.app/",
      // },
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ pet projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
