import React, {useState, useEffect} from "react";
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
import { db } from "../firebase";
import s1 from "../images/s1.jpg";
import s2 from "../images/s2.png";
import s3 from "../images/s3.png";
import Modal from "react-modal";

const stylesByNewBhavik = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-40%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "lightpink",
    border: "2px solid gray",
    textAlign: "center",
    borderRadius: "3%",
    boxShadow: "2px 2px 8px gray",
  },
  overlay: { zIndex: 1000 },
};
function Workshops () {
  // constructor() {
  //   super();
  //   this.state = {
  //     upcomingSeminar: []
  //   };
  // }
  const [upcomingSeminar, setUpcomingSeminar] = useState([])
  const [upcomingEvents, setUpcomingEvents] = useState([])
  useEffect(() => {
    db.collection("upcoming-workshop").onSnapshot((snapshot) => {
      setUpcomingSeminar(snapshot.docs[0].data());
    });
    db.collection("upcomingEvents").onSnapshot((snapshot) => {
      setUpcomingEvents(snapshot.docs.map((doc) => doc.data()));
    });
    console.log(upcomingEvents);
  }, []);
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
                        "padding-bottom": "10px",
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
        <div
          className="section bgi-cover-center"
          data-background="images/dummy-img-1920x900-2.jpg"
        >
          <div
            className="content-wrap"
            style={{ "padding-top": "50px", "padding-bottom": "30px" }}
          >
            <div className="container">
              <h1
                className="section-heading"
                style={{
                  "text-align": "center",
                  "font-size": "60px",
                  "text-decoration": "underline",
                  paddingBottom: "30px",
                  color: "#711379",
                }}
              >
                Weekly FREE workshops!
              </h1>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 m-3">
                  <div
                    className="row rs-news-1"
                    style={{
                      display: "flex",
                      paddingBottom: "0px",
                      boxShadow: "2px 5px 20px -4px",
                      alignItems: "center",
                    }}
                  >
                    <div className=" col-sm-12 col-md-8 col-lg-7">
                      <img
                        src={upcomingSeminar.imgUrl}
                        alt
                        className="img-fluid"
                      />
                    </div>
                    <div
                      className="body-box col-sm-12 col-md-4 col-lg-5"
                      style={{ paddingBottom: "0px" }}
                    >
                      <div
                        className="title "
                        style={{ fontSize: "29px", color: "red" }}
                      >
                        {upcomingSeminar.title}
                      </div>
                      <p>
                        <span style={{ fontWeight: "bold" }}>Age-group:</span>{" "}
                        {upcomingSeminar.ageGroup}
                      </p>
                      <p>
                        <span style={{ fontWeight: "bold" }}>Date:</span>{" "}
                        {upcomingSeminar.date}
                      </p>
                      <p>
                        <span style={{ fontWeight: "bold" }}>Topic:</span>{" "}
                        {upcomingSeminar.topic}
                      </p>
                      <p>{upcomingSeminar.description}</p>
                      <p
                        style={{ fontSize: "20px" }}
                        className="section-heading"
                      >
                        <span style={{ color: "red" }}>•</span> Round the corner
                      </p>
                      {/*  <p>We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...</p>*/}
                      <div className="text-center">
                        <a
                          className="btn btn-primary"
                          href={upcomingSeminar.registrationForm}
                          target="_blank"
                        >
                          Register Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="supheading text-center mt-6">Upcoming Events</p>
              <div className="row mt-4">
                {/* Item 1 */}
                {upcomingEvents.map((event) => (
                  <div className="col-sm-12 col-md-12 col-lg-4 mb-5">
                    <div className="rs-news-1">
                      <div className="media-box">
                        <img src={event.imgUrl} alt className="img-fluid" />
                      </div>
                      <div className="body-box">
                        <div className="title">{event.topic}</div>
                        <p>
                          <span style={{ fontWeight: "bold" }}>Age-group:</span>{" "}
                          {event.ageGroup}
                        </p>
                        <p>
                          <span style={{ fontWeight: "bold" }}>Date:</span>{" "}
                          {event.date}
                        </p>
                        <p>
                          <span style={{ fontWeight: "bold" }}>Topic:</span>{" "}
                          {event.topic}
                        </p>
                        <p>{event.description}</p>
                        {/*  <p>We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...</p>*/}
                        <div className="text-center">
                          <a
                            className="btn btn-primary"
                            href={event.registrationForm}
                          >
                            Register Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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

export default Workshops;
