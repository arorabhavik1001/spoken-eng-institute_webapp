import React from "react";
import "../css/style.css";
import "../css/style.css.map";
import "../css/vendor/bootstrap.min.css";
import "../css/vendor/animate.min.css";
import "../css/vendor/font-awesome.min.css";
import "../css/vendor/magnific-popup.css";
import "../App.css";
import enlogo from "../images/enlogo.png";
import enlogbot from "../images/enlogbot.png";
import wh1logo from "../images/wh1logo.png";

class Beginner extends React.Component {
  render() {
    return (
      <React.Fragment>
        <a
          href="https://api.whatsapp.com/send?phone=+919929369844&amp;text=Hello%20Enhaance!"
          className="whlogo hoverable"
          target="_blank"
          style={{ right: "30" }}
        >
          <img src={wh1logo} />
        </a>
        <div className="header header-1">
          {/* TOPBAR */}
          <div className="topbar" id="topbar">
            <div className="container">
              <div
                className="row align-items-center"
                style={{ display: "flex", "justify-content": "space-between" }}
              >
                <div className="col-sm-8 col-md-6">
                  <div className="info">
                    <div className="info-item">
                      <i className="fa fa-phone" /> +91-9929369844
                    </div>
                    <div className="info-item">
                      <i class="fa fa-envelope" aria-hidden="true" />{" "}
                      <a href="mailto:contact.enhaance@gmail.com" title>
                        contact.enhaance@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* NAVBAR SECTION */}
          <div className="navbar-main">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  {/* <nav id="navbar-example" className="navbar navbar-expand-lg"style={{"text-align": "center", "padding": "10px"}}> */}
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <a href="/">
                        <img
                          src={enlogo}
                          alt
                          style={{
                            "text-align": "center",
                            width: "200px",
                            display: "block",
                            margin: "0 auto",
                            "padding-top": "20px",
                            "padding-bottom": "20px",
                          }}
                        />
                      </a>
                    </div>
                    <br />
                    <h4
                      className="nurcap"
                      style={{
                        "text-align": "center",
                        margin: "0 auto",
                        "padding-bottom": "20px",
                      }}
                    >
                      "Nurturing Tomorrow..."
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="content-wrap" style={{ "padding-bottom": "30px" }}>
            <div className="container">
              <h1
                className="section-heading"
                style={{
                  "text-align": "center",
                  "font-size": "60px",
                  "text-decoration": "underline",
                  color: "#711379",
                }}
              >
                Beginner Course Curriculum
              </h1>
              <div
                className="row"
                style={{ "text-align": "center", "line-height": "1.6" }}
              >
                <div className="col-sm-12 col-lg-6 col-md-6">
                  <br />
                  <h2 className="section-heading">Grammar:</h2>
                  <p style={{ "line-height": "1.6" }}>
                    &bull; PARTS OF SPEECH
                    <br />
                    &bull; SENTENCE STRUCTURING
                    <br />
                    &bull; TENSES
                    <br />
                    &bull; MODALS
                    <br />
                    &bull; Auxiliary verbs
                    <br />
                    &bull; Punctuation
                    <br />
                  </p>
                </div>
                <div className="col-sm-12 col-lg-6 col-md-6">
                  <br />
                  <h2 className="section-heading">Vocabulary:</h2>
                  <p style={{ "line-height": "1.6" }}>
                    &bull; Thousand active words
                    <br />
                    &bull; Synonyms and Antonyms
                    <br />
                  </p>
                </div>
              </div>
              <div className="row" style={{ "text-align": "center" }}>
                <div className="col-sm-12 col-lg-6 col-md-6">
                  <br />
                  <h2 className="section-heading">Conversational English:</h2>
                  <p style={{ "line-height": "1.6" }}>
                    &bull; Question formation
                    <br />
                    &bull; Basic greetings
                    <br />
                    &bull; Ten most common situational conversant
                    <br />
                    &bull; Conversation starters
                    <br />
                    &bull; Making request
                    <br />
                    &bull; Seeking permission
                    <br />
                    &bull; Commands
                    <br />
                  </p>
                </div>
                <div className="col-sm-12 col-lg-6 col-md-6">
                  <br />
                  <h2 className="section-heading">Creative Skills:</h2>
                  <p style={{ "line-height": "1.6" }}>
                    &bull; Story writing
                    <br />
                    &bull; Descriptive writing
                    <br />
                    &bull; Dialogue writing
                    <br />
                    &bull; Formal writing
                    <br />
                  </p>
                </div>
                <div className="col-12" style={{ "text-align": "center" }}>
                  <br />
                  <h2 className="section-heading">Listening skills:</h2>
                  <p style={{ "line-height": "1.6" }}>
                    &bull; 20 minute of active listening in every session
                    <br />
                    &bull; Projects and assignments related to the English
                    movies and web series.
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container" style={{ "padding-bottom": "40px" }}>
          <div className="row" style={{ "text-align": "center" }}>
            <div className="col-lg-12">
              {" "}
              <a
                className="btn btn-warning btn-large"
                href="/"
                style={{ margin: "0 auto", "text-align": "center" }}
              >
                Go to Home Page
              </a>
            </div>
          </div>
        </div>

        <div
          className="footer"
          data-background="images/dummy-img-1920x900-3.jpg"
        >
          <div className="content-wrap">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <div className="footer-item">
                    <a href="/">
                      <img
                        src={enlogbot}
                        alt="logo bottom"
                        style={{ width: "150px" }}
                        className="logo-bottom"
                      />
                    </a>
                    <div className="spacer-30" />
                    <p style={{ "font-weight": "bold" }}>
                      Get the best Spoken English Lessons for a perfect career.
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <div className="footer-item">
                    <div className="footer-title">Contact Info</div>
                    <ul className="list-info">
                      <li>
                        <div className="info-icon">
                          <span className="fa fa-map-marker" />
                        </div>
                        <div className="info-text">
                          F-4, Subhash Nagar, Shopping center, opp.Kanha Sweets,
                          Jaipur-302016
                        </div>{" "}
                      </li>
                      <li>
                        <div className="info-icon">
                          <span className="fa fa-phone" />
                        </div>
                        <div className="info-text">(91) 9929-3698-44</div>
                      </li>
                      <li>
                        <div className="info-icon">
                          <span className="fa fa-envelope" />
                        </div>
                        {/* <div className="info-text">info@yoursite.com</div> */}
                        <a
                          href="mailto:contact.enhaance@gmail.com"
                          className="info-text"
                          style={{ color: "white" }}
                        >
                          contact.enhaance@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                  <div className="footer-item">
                    <div className="footer-title">Get in Touch</div>
                    <p>
                      Check out our{" "}
                      <a href="https://www.facebook.com/enhaance">facebook</a>{" "}
                      page{" "}
                    </p>
                    <div className="sosmed-icon d-inline-flex">
                      <a
                        className="text-gray-500"
                        href="https://www.facebook.com/enhaance"
                      >
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5 fb"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fcopy">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12">
                  <p
                    className="ftex"
                    style={{ color: "purple", "font-weight": "bold" }}
                  >
                    Copyright 2021 ©{" "}
                    <span className="color-primary">Enhaance</span> | Created by{" "}
                    <a
                      href="https://www.instagram.com/bhavikar.1001/"
                      target="_blank"
                    >
                      <span className="color-primary">Bhavik Arora</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Beginner;
