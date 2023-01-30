import React, { useRef, useState } from "react";
import "./services.css";
import { motion, useInView } from "framer-motion";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const ref = useRef(null);
  const isInView = useInView(ref);
  // Framer motion variables

  return (
    <section
      className="services section"
      id="services"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Projects that I have built</span>
      <div className="services__container container grid">
        <motion.div
          whileHover={{ boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)" }}
          className={
            toggleState === 1
              ? "services__content open__modal-effect"
              : "services__content"
          }
        >
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Designer <br /> Home
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right  services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal "
            }
            onClick={() => toggleTab(0)}
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">Designer Home</h3>
              <p className="services__modal-description">
                I have developed{" "}
                <a
                  className="link"
                  target="_blank"
                  href="https://designerhome.sa/"
                  rel="noreferrer"
                >
                  Designer Home
                </a>{" "}
                website for a client. Designer home is a leading institution
                that provides integrated services and specializes in residential
                and commercial projects. It manages the project from planning to
                execution, in addition to supervising all details of the work in
                all its stages by experts in the field who seek to gain customer
                satisfaction and reach the best possible results.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">HTML.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    CSS / Bootstrap framework
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">JavaScript.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">Firebase.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">JQuery.</p>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)" }}
          className={
            toggleState === 2
              ? "services__content open__modal-effect"
              : "services__content"
          }
        >
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Weather <br /> App
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
            onClick={() => toggleTab(0)}
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">Weather App</h3>
              <p className="services__modal-description">
                <a
                  className="link"
                  target="_blank"
                  href="https://justmuath1.github.io/weatherApp/"
                  rel="noreferrer"
                >
                  Weather App
                </a>{" "}
                is a project that asks the user for a name of a city. The
                returns an image and the weather data from API's with current
                local time.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">HTML</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    CSS / Bootstrap Framework.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">Javascript.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">Unsplash API.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">OpenWeather API.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">Abstract API .</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    GitHub repo:{" "}
                    <a
                      href="https://github.com/JustMuath1/weatherApp"
                      target="_blank"
                      rel="noreferrer"
                      className="link"
                    >
                      weatherApp
                    </a>{" "}
                    .
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)" }}
          className={
            toggleState === 3
              ? "services__content open__modal-effect"
              : "services__content"
          }
        >
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Developer <br /> Task List
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal "
            }
            onClick={() => toggleTab(0)}
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">Developer Task List</h3>
              <p className="services__modal-description">
                <a
                  className="link"
                  target="_blank"
                  href="https://justmuath1.github.io/developerTasklist.github.io/"
                  rel="noreferrer"
                >
                  developerTasklist
                </a>{" "}
                is a learning project for DOM in vanilla javascript -- with more
                features continually added and always keep updating the project
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">HTML.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    CSS / Bootstrap framework.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">Javascript.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">GitHub Pages.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    Github Repo :{" "}
                    <a
                      className="link"
                      target="_blank"
                      href="https://github.com/JustMuath1/developerTasklist.github.io"
                      rel="noreferrer"
                    >
                      developerTasklist
                    </a>{" "}
                    .
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
