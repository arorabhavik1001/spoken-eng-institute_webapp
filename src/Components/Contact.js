import React from "react";
import "../css/style.css";
import "../css/style.css.map";
import "../css/vendor/bootstrap.min.css";
import "../css/vendor/animate.min.css";
import "../css/vendor/font-awesome.min.css";
import "../css/vendor/magnific-popup.css";
import "../App.css";
import axios from "axios";
import { db } from "../firebase";
import enlogo from "../images/enlogo.png";
import enlogbot from "../images/enlogbot.png";
import wh1logo from "../images/wh1logo.png";
import Modal from "react-modal";

const stylesByBhavik = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-40%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#22272b",
    border: "2px solid gray",
    textAlign: "center",
    borderRadius: "20px",
    boxShadow: "2px 2px 8px gray",
  },
  overlay: { zIndex: 1000 },
};
class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      number: "",
      email: "",
      message: "",
      isModalOpen: false,
      subscribedName: "",
    };
  }
  book = (event) => {
    event.preventDefault();
    this.setState({
        trialName: event.target.name.value
    })
    db.collection("messages")
      .add({
        name: event.target.name.value,
        number: event.target.number.value,
        message: event.target.message.value,
        email: event.target.mail.value,
        time: new Date(),
      })
      .then((result) => this.setState({isModalOpen: true,}))
      .catch((err) => alert(err.message));

    document.getElementById("newForm").reset();
  };
  handleChange = (event, stateVariable) => {
    this.setState({
      [stateVariable]: event.target.value,
    });
  };
  cross = () => {
    this.setState({
      isModalOpen: false,
    });
  };
  render() {
    const { trialName, isModalOpen } = this.state;
    return (
      <React.Fragment>
        <div className="header header-1">
          {/* TOPBAR */}
          <a
            href="https://api.whatsapp.com/send?phone=+919929369844&amp;text=Hello%20Enhaance!"
            className="whlogo hoverable"
            target="_blank"
            style={{ right: "30" }}
          >
            <img src={wh1logo} />
          </a>
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

        <section className="text-gray-600 body-font relative ">
          <div
            className="container px-5 py-24 mx-auto"
            style={{ "padding-top": "3rem", "padding-bottom": "3rem" }}
          >
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Contact Us
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Feel free to contact us for any queries.
              </p>
            </div>
            <form id="newForm" onSubmit={this.book}>
            <div className="lg:w-full md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      onChange={(event) => this.handleChange(event, "name")}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-blue-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full md:w-1/2 lg:w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="number"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Contact number
                    </label>
                    <input
                      type="text"
                      required
                      id="number"
                      name="number"
                      onChange={(event) => this.handleChange(event, "number")}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-blue-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="mail"
                      onChange={(event) => this.handleChange(event, "mail")}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-blue-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      onChange={(event) => this.handleChange(event, "message")}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-blue-600  h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="sbutton flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    // onClick={this.book}
                  >
                    Submit
                  </button>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a
                    className="text-indigo-500"
                    href="mailto:contact.enhaance@gmail.com"
                  >
                    contact.enhaance@gmail.com
                  </a>
                  <p className="leading-normal my-5">
                    F-4, Subhash Nagar, Shopping center,
                    <br />
                    opp.Kanha Sweets, Jaipur-302016
                  </p>
                </div>
              </div>
            </div>
              </form>
          </div>
        </section>
        <Modal isOpen={isModalOpen} style={stylesByBhavik} closeTimeoutMS={2}>
          <React.Fragment>
            <p style={{ "font-size": "23px", color: "white" }}>
              Hi {trialName}!, Thanks for contacting us. You will be replied by
              our team on your whatsapp and mail soon.
            </p>
            <br />
            <button
              onClick={this.cross}
              className="cross"
              style={{
                float: "right",
                color: "white",
                "background-color": "#ffbf43",
                width: "3rem",
              }}
            >
              OK
            </button>
          </React.Fragment>
        </Modal>

        {/* --------------------------------------- */}

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

export default Contact;
