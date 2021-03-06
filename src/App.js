import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './css/style.css';
import './css/style.css.map';
import './css/vendor/bootstrap.min.css';
import './css/vendor/animate.min.css';
import './css/vendor/font-awesome.min.css';
import './css/vendor/magnific-popup.css';
// import './css/vendor/owl.carousel.min.css';
// import './css/vendor/owl.theme.default.min.css';
import './App.css';
import logo from './images/logo.png';
import a from './images/a.jpg';
import b from './images/b.jpg';
import k1 from './images/k1.png';
import k2 from './images/k2.png';
import k3 from './images/k3.png';
import c from './images/c.jpg';
import nri from './images/nri.png';
import c1 from './images/c1.png';
import c12 from './images/c12.png';
import c7 from './images/c7.png';
import c2 from './images/c2.png';
import c4 from './images/c4.png';
import c6 from './images/c6.png';
import c5 from './images/c5.png';
import d from './images/d.jpg';
import e from './images/e.jpg';
import enlogo from './images/enlogo.png';
import enlogbot from './images/enlogbot.png';
import begin1 from './images/begin1.png';
import prof1 from './images/prof1.png';
import inter1 from './images/inter1.png';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBFormInline,  MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import axios from 'axios'

class App extends React.Component {
// const App = () => {
  constructor() {
    super();
    this.state={
      name: "",
      age: 0,
      number: 0,
      radio: "",
      mail: "",
    }
  }
  book = () =>{
    const {name, number, age, radio, mail} = this.state;
    const details = {
      name,
      number,
      age,
      radio,
      mail,
    }
    axios({
      method: 'POST',
      url: 'http://localhost:5000/api/trial',
      headers: { 'Content-Type': 'application/json' },
      data: details
  }).then(result => {
      alert(`Hi ${result.data.name}!, Thanks for booking your trial class. You will be contacted on your whatsapp soon.`)
      console.log(result)
  }).catch(err => {
      alert(`There was some problem. Pls try again later`)
      console.log(err)
  })
  }
  
  onClick = nr => () => {
    this.setState({
      radio: nr
    });
  };

  handleChange = (event, stateVariable) => {
    this.setState({
      [stateVariable]: event.target.value
    });
  }
  render() {
    const {name, age, number} = this.state;
  return (
    <React.Fragment>
      <div>
  {/* BACK TO TOP SECTION */}
  <a href="#topbar" className="cd-top cd-is-visible">Top</a>
  {/* HEADER */}
  <div className="header header-1">
    {/* TOPBAR */}
    <div className="topbar" id="topbar">
      <div className="container">
        <div className="row align-items-center" style={{display: 'flex', "justify-content": "space-between"}}>
          <div className="col-sm-8 col-md-6">
            <div className="info" >
              <div className="info-item">
                <i className="fa fa-phone" /> +91-9929369844
              </div>
              <div className="info-item">
                <i className="fa fa-envelope-o" /> <a href="mailto:contact.enhaance@gmail.com" title>contact.enhaance@gmail.com</a>
              </div>
            </div>
          </div>
          {/* <div className="col-sm-4 col-md-6">
            <div className="sosmed-icon pull-right d-inline-flex">
              <a href="#" className="fb"><i className="fa fa-facebook" /></a> 
              <a href="#" className="tw"><i className="fa fa-twitter" /></a> 
              <a href="#" className="ig"><i className="fa fa-instagram" /></a> 
              <a href="#" className="in"><i className="fa fa-linkedin" /></a> 
            </div>
          </div> */}
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
                <div className="col-lg-12 col-md-12 col-sm-12"><img src={enlogo} alt style={{"text-align": "center", width: "200px", display:'block', margin: "0 auto", "padding-top":"20px", "padding-bottom":"20px"}}/></div>
                <br/>
                <h4  className="nurcap" style={{"text-align": "center", margin: "0 auto", "padding-bottom":"20px"}}>"Nurturing Tomorrow..."</h4>
              </div>
            
          {/* <a className="navbar-brand" href="index.html" >
          </a> */}
          {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown"> */}
            {/* <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">ABOUT US</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="classes.html">CLASSES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="teachers.html">TEACHERS</a>
              </li>
              <li className="nav-item dropdown dmenu">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  PAGES
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="page-gallery.html">GALLERY</a>
                  <a className="dropdown-item" href="page-testimonials.html">TESTIMONIALS</a>
                  <a className="dropdown-item" href="page-faq.html">FAQ</a>
                  <a className="dropdown-item" href="page-404.html">404 PAGE</a>
                  <a className="dropdown-item" href="page-events.html">EVENTS</a>
                  <a className="dropdown-item" href="page-events-single.html">SINGLE EVENTS</a>
                  <a className="dropdown-item" href="page-news.html">NEWS</a>
                  <a className="dropdown-item" href="page-news-single.html">SINGLE NEWS</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">CONTACT US</a>
              </li>
            </ul> */}
          {/* </div> */}
        {/* </nav>  */}
        {/* */}
        </div>
            </div>
      </div>
    </div>
  </div>
  {/* BANNER */}
  <div id="oc-fullslider" className="banner">
    <div className="owl-carousel owl-theme full-screen">
       <div className="item">
        <img src={b} alt="Slider" />
        <div className="overlay-bg" />
        <div className="container d-flex align-items-center"> 
          <div className="wrap-caption" >
            <h5 className="myfont" style={{"margin-top":"10px"}}>Welcome to <span style={{"font-size": "35px",}}>Enhaance!!!</span></h5>
            <br />
            <h1 className="my-heading"style={{"margin-top":"10px"}}>India???s best institute for Spoken English &amp; Communication Skills</h1>
            <br />
            <div className="spacer-10" />
            
            <a href="#book" className="btn btn-danger" style={{"margin-bottom": "15px", "margin-top":"15px", "border-radius":"10px"}}>Book a Free Demo!</a>
            {/* <br /> */}
        <div className="spacer-10" />
        </div>  
        </div>
      </div>
      {/* <div className="item">
        <img src="images/dummy-img-1920x900-2.jpg" alt="Slider" />
        <div className="overlay-bg" />
        <div className="container d-flex align-items-center">
          <div className="wrap-caption">
            <h5 className="caption-supheading">Welcome to Kids</h5>
            <h1 className="caption-heading">Best Kindergarten at California</h1>
            <a href="#" className="btn btn-secondary">LEARN MORE</a>
          </div>  
        </div>
      </div>   */}
      {/* <div className="item">
        <img src="images/dummy-img-1920x900-3.jpg" alt="Slider" /> 
        <div className="overlay-bg" />
        <div className="container d-flex align-items-center">
          <div className="wrap-caption">
            <h5 className="caption-supheading">Welcome to Kids</h5>
            <h1 className="caption-heading">Best Kindergarten at California</h1>
            <a href="#" className="btn btn-secondary">LEARN MORE</a>
          </div>  
        </div>
      </div>   */}
    </div>
    {/* <div className="custom-nav owl-nav" /> */}
  </div>	
  {/* SHORTCUT */}
  {/* that new.text will come here */}
  <div className="section">
    <div className="content-wrap" style={{"padding-bottom":"60px"}}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            {/* <img src={a} alt className="img-fluid img-border" /> */}
            <iframe width="560" height="315" className="parents-vdo intro-vdo" src="https://www.youtube.com/embed/YwyXETG7OyM?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6" style={{"padding-left":"40px"}}>
            <h2 className="section-heading">
              Welcome to Enhaance
            </h2>
            <p>Enhaance is a Spoken English, Communication Skills &amp; Personality development Institute. We are committed to enhance the positives hidden deep inside into an individual.</p>
            <p>Over 10 years of experience delivering training and solutions to the people. </p>
            <div className="spacer-10" />
            <a className="btn btn-info" href="#parentstestimonial" style={{"border-radius":"10px"}}>See what parents say</a>
          </div>
        </div>
            <div className="spacer-10" />
            <div className="spacer-10" />
            <div className="spacer-10" />
            <hr />
      </div>
    </div>
  </div>
  {/* WHY CHOOSE US */}
  <div className="section bgi-repeat" data-background="images/dummy-img-1920x900-3.jpg">
    <div className="content-wrap pb-0" style={{"padding-top":"10px"}}>
      <div className="container">
        <div className="row align-items-end">
          <div className="col-sm-12 col-md-12 col-lg-7">
            <p className="supheading">Major Attraction</p>
            <h2 className="section-heading">
              The NRI Course
            </h2>
            <p className="text-black">In the search of a successful career people leave India and go abroad to make their dreams come true. But due to the lack of fluency &amp; knowledge of English language it becomes very embarrassing and difficult to cope up. Enhaance brings such a unique module which not only helps to improve the english communication skills but  boosts confidence as well.</p>
            {/* <p className="p-check text-black">100% education, for your kids, consectetuer adipiscing elit, sed diam nonummy nibh euismod. Dolor sit amet, dolor gravida placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod.</p>
            <p className="p-check text-black">More programs activities, sed diam nonummy nibh euismod. Lorem ipsum dolor sit amet.</p>
            <p className="p-check text-black">More benefit nonummy nibh euismod. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p> */}
            
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5">
            <img src={nri} alt className="img-fluid" style={{"text-align": "center", "vertical-align": "middle"}}/>
          </div>
        </div>
          <div className="spacer-30" />
          <div className="spacer-30" />
          <hr />
      </div>
    </div>
  </div>
  {/* OUR ARTICLES */}
  <div className>
    <div className="content-wrap">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <p className="supheading text-center">Our Programs</p>
            <h3 className="section-heading text-center mb-5">
            THERE???S SO MUCH TO LEARN AT ENHAANCE
            </h3>
          </div>
        </div>
        <div className="row mt-4">
          {/* Item 1 */}
          <div className="col-sm-12 col-md-12 col-lg-4">
            <div className="rs-class-box mb-5">
              <div className="media-box">
                <img src={begin1} style={{margin: "auto", "text-align": "center"}} alt className="img-fluid" />
              </div>
              <div className="body-box">
                <div className="class-name">
                  <div className="title">Beginner's Course</div>
                  {/* <div className="price">$20</div> */}
                </div>
                {/* <div className="open-class">Open Class : <span>08:00 am - 10:00 am</span></div> */}
                <p style={{"margin-top":"10px", "margin-bottom":"10px", "text-align":"left"}}>
                  &bull; Full focus on child's Conversational English skills
                  <br />
                  &bull; Special sessions for Pronunciation Lessons
                  <br />
                  &bull; Overall Grammar grooming
                  <br />
                  &bull; Thousand Vocablury Words
                  <br />
                  &bull; Improvement in child's creative skills
                  <br />
                </p>
                <div className="detail" style={{"text-align": "center"}}>
                {/* <div className="age col"><button style={{background:'none', border: 'none', cursor: 'pointer', color: 'white', "text-align": "center", margin: "auto"}} className="myButton" href="#book">Book a Free Trial</button></div> */}
                <div className="age col"><a style={{background:'none', border: 'none', cursor: 'pointer', color: 'white', "text-align": "center", margin: "auto"}} className="myButton" href="#book">Book a Free Trial</a></div>
                  <div className="size col"><button style={{background:'none', border: 'none', cursor: 'pointer', color: 'white', "text-align": "center", margin: "auto"}} className="myButton">Enroll Now</button></div>
                </div>
              </div>
            </div>
          </div>
          {/* Item 2 */}
          <div className="col-sm-12 col-md-12 col-lg-4">
            <div className="rs-class-box mb-5">
              <div className="media-box">
                <img src={inter1} alt className="img-fluid" />
              </div>
              <div className="body-box">
                <div className="class-name">
                  <div className="title">Intermediate Course</div>
                  {/* <div className="price">$20</div> */}
                </div>
                {/* <div className="open-class">Open Class : <span>08:00 am - 10:00 am</span></div> */}
                <p style={{"margin-top":"10px", "margin-bottom":"10px", "text-align":"left"}}>
                  &bull; Interview preparation for college admissions
                  <br />
                  &bull; Regressive spoken english practice under the guideline of TRINITY College of London and ESL
                  <br />
                  &bull; SAT, GATE level essay writing practice
                  <br />
                  &bull; 500 intermediate level Vocablury practice
                  <br />
                  &bull; Improvement in child's creative skills
                  <br />
                </p>
                <div className="detail">
                    {/* <div className="age col"><button style={{background:'none', border: 'none', cursor: 'pointer', color: 'white', margin: "auto"}} className="myButton">Book a Free Trial</button></div> */}
                    <div className="age col"><a style={{background:'none', border: 'none', cursor: 'pointer', color: 'white', "text-align": "center", margin: "auto"}} className="myButton" href="#book">Book a Free Trial</a></div>
                  <div className="size col"><button style={{background:'none', border: 'none', cursor: 'pointer', color: 'white', margin: "auto"}} className="myButton">Enroll Now</button></div>
                </div>
              </div>
            </div>
          </div>
          {/* Item 3 */}
          <div className="col-sm-12 col-md-12 col-lg-4">
            <div className="rs-class-box mb-5">
              <div className="media-box">
                <img src={prof1} alt className="img-fluid" />
              </div>
              <div className="body-box">
                <div className="class-name">
                  <div className="title">The Professional Course</div>
                  {/* <div className="price">$20</div> */}
                </div>
                {/* <div className="open-class">Open Class : <span>08:00 am - 10:00 am</span></div> */}
                <p style={{"margin-top":"10px", "margin-bottom":"10px"}}>
                  &bull; Learn the best professional english for your work life
                  <br />
                  &bull; Speak English confidently and naturally on a wide range of everyday topics
                  <br />
                  &bull; Let us help you succeed and grow in your career.
                  </p>
                <div className="detail">
                  {/* <div className="age col"><button style={{background:'none', border: 'none', cursor: 'pointer', color: 'white', margin: "auto"}} className="myButton">Book a Free Trial</button></div> */}
                  <div className="age col"><a style={{background:'none', border: 'none', cursor: 'pointer', color: 'white', "text-align": "center", margin: "auto"}} className="myButton" href="#book">Book a Free Trial</a></div>
                  <div className="size col"><button style={{background:'none', border: 'none', cursor: 'pointer', color: 'white', margin: "auto"}} className="myButton">Enroll Now</button></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-sm-12 col-md-12">
            <div className="text-center">
              <a href="#" className="btn btn-primary">SEE MORE CLASSES</a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </div>
  <div className="section bgi-repeat" data-background="images/dummy-img-1920x900-3.jpg">
    <div className="content-wrap pb-0" style={{"padding-top":"10px"}}>
      <div className="container">
        <div className="row align-items-end">
        <div className="col-sm-12 col-md-12 col-lg-5">
          <div style={{margin:"0 auto"}}>
            <img src={k2} alt className="img-fluid trainer" style={{"text-align": "center", "vertical-align": "middle", "border-radius": "15px", "margin":"0 auto"}}/>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7" style={{"vertical-align": "middle"}}>
            <div style={{"vertical-align": "middle"}}>
            <p className="supheading">Major Attraction</p>
            <h2 className="section-heading">
              About the Trainer
            </h2>
            <p className="text-black">Ms.Kirty Harit, is an excellent communicator with great fluency in English, and has teaching experience of more than 10 years. She is also a TEFL/TESOL certified trainer. She did her schooling from BITS Pilani and Masters from Banasthali Vidyapeeth.</p>
            {/* <p className="p-check text-black">100% education, for your kids, consectetuer adipiscing elit, sed diam nonummy nibh euismod. Dolor sit amet, dolor gravida placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod.</p>
            <p className="p-check text-black">More programs activities, sed diam nonummy nibh euismod. Lorem ipsum dolor sit amet.</p>
            <p className="p-check text-black">More benefit nonummy nibh euismod. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p> */}
            </div>
          </div>
          
        </div>
          <div className="spacer-30" />
          <div className="spacer-30" />
          <hr />
      </div>
    </div>
  </div>
  {/* OUR GALLERY */}
  <div className>
    <div className="content-wrap">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <p className="supheading text-center">Our Gallery</p>
            <h2 className="section-heading text-center mb-5">
              Moment from kids
            </h2>
          </div>
        </div>
        <div className="row popup-gallery gutter-5">
          {/* Item 1 */}
          <div className="col-xs-12 col-md-6 col-lg-4">
            <div className="box-gallery img-fluid">
              {/* <a href="images/dummy-img-600x400.jpg" title="Gallery #1"> */}
                
                <div className="project-info">
                  <div className="project-icon">
                    <span className="fa fa-search" />
                  </div>
                </div>
                
                <img src={c7} alt className="img-fluid" />
              {/* </a> */}
            </div>
          </div>
          {/* Item 1 */}
          <div className="col-xs-12 col-md-6 col-lg-4">
            <div className="box-gallery">
              {/* <a href="images/dummy-img-600x400.jpg" title="Gallery #2"> */}
                <img src={c12} alt className="img-fluid" />
                <div className="project-info">
                  <div className="project-icon">
                    <span className="fa fa-search" />
                  </div>
                </div>
              {/* </a> */}
            </div>
          </div>
          {/* Item 1 */}
          <div className="col-xs-12 col-md-6 col-lg-4">
            <div className="box-gallery">
              {/* <a href="images/dummy-img-600x400.jpg" title="Gallery #3"> */}
                <img src={c4} alt className="img-fluid" />
                <div className="project-info">
                  <div className="project-icon">
                    <span className="fa fa-search" />
                  </div>
                </div>
              {/* </a> */}
            </div>
          </div>
          {/* Item 2 */}
          <div className="col-xs-12 col-md-6 col-lg-4">
            <div className="box-gallery media-box">
              {/* <a href="images/dummy-img-600x400.jpg" title="Gallery #4"> */}
                <img src={c2} alt className="img-fluid" />
                <div className="project-info">
                  <div className="project-icon">
                    <span className="fa fa-search" />
                  </div>
                </div>
              {/* </a> */}
            </div>
          </div>
          {/* Item 3 */}
          <div className="col-xs-12 col-md-6 col-lg-4">
            <div className="box-gallery">
              {/* <a href="images/dummy-img-600x400.jpg" title="Gallery #5"> */}
                <img src={c5} alt className="img-fluid" />
                <div className="project-info">
                  <div className="project-icon">
                    <span className="fa fa-search" />
                  </div>
                </div>
              {/* </a> */}
            </div>
          </div>
          {/* Item 4 */}
          <div className="col-xs-12 col-md-6 col-lg-4">
            <div className="box-gallery">
              {/* <a href="images/dummy-img-600x400.jpg" title="Gallery #6"> */}
                <img src={c6} alt className="img-fluid myimg" />
                <div className="project-info">
                  <div className="project-icon">
                    <span className="fa fa-search" />
                  </div>
                </div>
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* OUR EVENTS */}
  <div className="section bgi-cover-center" data-background="images/dummy-img-1920x900-2.jpg">
    <div className="content-wrap">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <p className="supheading text-center">Our Events</p>
            <h2 className="section-heading text-center mb-5">
              Don't miss our events
            </h2>
          </div>
        </div>
        <div className="row mt-4">
          {/* Item 1 */}
          <div className="col-sm-12 col-md-12 col-lg-4 mb-5">
            <div className="rs-news-1">
              <div className="media-box">
                <img src={c} alt className="img-fluid" />
              </div>
              <div className="body-box">
                <div className="title">English Day on Carfree day</div>
                <div className="meta-date">March 19, 2016 / 08:00 am - 10:00 am</div>
                <p>We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...</p>
                <div className="text-center">
                  <a href="page-events-single.html" className="btn btn-primary">JOIN NOW</a>
                </div>
              </div>
            </div>
          </div>
          {/* Item 2 */}
          <div className="col-sm-12 col-md-12 col-lg-4 mb-5">
            <div className="rs-news-1">
              <div className="media-box">
                <img src={c} alt className="img-fluid" />
              </div>
              <div className="body-box">
                <div className="title">Play &amp; Study with Mrs. Smith</div>
                <div className="meta-date">March 19, 2016 / 08:00 am - 10:00 am</div>
                <p>We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...</p>
                <div className="text-center">
                  <a href="page-events-single.html" className="btn btn-primary">JOIN NOW</a>
                </div>
              </div>
            </div>
          </div>
          {/* Item 3 */}
          <div className="col-sm-12 col-md-12 col-lg-4 mb-5">
            <div className="rs-news-1">
              <div className="media-box">
                <img src={c} alt className="img-fluid" />
              </div>
              <div className="body-box">
                <div className="title">Drawing at City Park</div>
                <div className="meta-date">March 19, 2016 / 08:00 am - 10:00 am</div>
                <p>We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...</p>
                <div className="text-center">
                  <a href="page-events-single.html" className="btn btn-primary">JOIN NOW</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="container" style={{"padding-bottom":"80px"}}>
            <hr id="book"/>
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <div className="spacer-30"></div>
            {/* <p className="supheading text-center" >Our Testimonials</p> */}
            <h2 className="section-heading text-center mb-5" style={{"font-weight":"400"}}>
              Book a Free Trial Class Now!!!
            </h2>
          </div>
        </div>
  <MDBContainer>
      <MDBRow>
      {/* <MDBCol md="6">
          <h2 className="">Book a Free Trial Today!</h2>
        </MDBCol> */}
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center" >
                <h5 className="dark-grey-text mb-5">
                  <strong>Hurry! Only few slots available for this week</strong>
                </h5>
              </div>
              <MDBInput
                label="Your name"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                onChange={(event) => this.handleChange(event, 'name')}
              />
              
              <MDBInput
                label="Your Mobile No."
                group
                type="text"
                validate
                containerClass="mb-0"
                onChange={(event) => this.handleChange(event, 'number')}
              />
              <MDBInput
                label="Your Email-id"
                group
                type="text"
                validate
                containerClass="mb-0"
                onChange={(event) => this.handleChange(event, 'mail')}
              />
              <MDBInput
                label="Your age"
                group
                type="number"
                validate
                containerClass="mb-0"
                onChange={(event) => this.handleChange(event, 'age')}
              />
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

Choose Course:
</p>
              <MDBFormInline>
                <MDBInput
                  onClick={this.onClick("beginner")}
                  checked={this.state.radio === "beginner" ? true : false}
                  label='Beginner'
                  type='radio'
                  id='radio1'
                  containerClass='mr-5'
                />
                <MDBInput
                  onClick={this.onClick("intermediate")}
                  checked={this.state.radio === "intermediate" ? true : false}
                  label='Intermediate'
                  type='radio'
                  id='radio2'
                  containerClass='mr-5'
                />
                <MDBInput
                  onClick={this.onClick("professional")}
                  checked={this.state.radio === "professional" ? true : false}
                  label='Professional English'
                  type='radio'
                  id='radio3'
                  containerClass='mr-5'
                />
                <MDBInput
                  onClick={this.onClick("nri")}
                  checked={this.state.radio === "nri" ? true : false}
                  label='NRI Course'
                  type='radio'
                  id='radio4'
                  containerClass='mr-5'
                />
              </MDBFormInline>
              <br />
              {/* <p className="font-small blue-text d-flex justify-content-end pb-3">
                Forgot
                <a href="#!" className="blue-text ml-1">

                  Password?
                </a>
              </p> */}
              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                  onClick={this.book}
                >
                  Book a Free Trial Class
                </MDBBtn>
              </div>
              {/* <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                or Sign in with:
              </p>
              <div className="row my-3 d-flex justify-content-center">
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="z-depth-1a"
                >
                  <MDBIcon fab icon="google-plus-g" className="blue-text" />
                </MDBBtn> 
              </div>*/}
            </MDBCardBody>
            {/* <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
              Not a member?
              <a href="#!" className="blue-text ml-1">
              
              Sign Up
              </a>
              </p>
            </MDBModalFooter> */}
          </MDBCard>
        </MDBCol>
        
      </MDBRow>
    </MDBContainer>
    
            </div>
  {/* OUR TESTIMONIALS */}
  <div className="section">
    <div className="content-wrap" style={{"padding-top":"30px"}}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <p className="supheading text-center" id="parentstestimonial" >Our Testimonials</p>
            <h2 className="section-heading text-center mb-5">
              What parents say
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-10 offset-md-1">
            
            <div id="testimonial" className="owl-carousel owl-theme col-md-12 col-sm-12 col-lg-12">
              {/* <div className="item">
                <div className="rs-box-testimony">
                  <div className="quote-box">
                    <blockquote>
                      Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam
                    </blockquote>
                    <div className="media">
                      <img src={e} alt className="rounded-circle" />
                    </div>
                    <p className="quote-name">
                      Johnathan Doel <span>Businessman</span>
                    </p>                        
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="rs-box-testimony"> 
                  <div className="quote-box">
                    <blockquote>
                      Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam
                    </blockquote>
                    <div className="media">
                      <img src={e} alt className="rounded-circle" />
                    </div>
                    <p className="quote-name">
                      Johnathan Doel <span>CEO Buka Kreasi</span>
                    </p>                        
                  </div>
                </div>
              </div> */}
              <iframe width="100%" height="500px" src="https://www.youtube.com/embed/X0HVvhClT18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   {/* <form>
 <label>Name:</label>
          <input type="text" value={name} onChange={(event) => this.handleChange(event, 'name')}></input> 
          <br/>
          <label>Whatsapp mobile number:</label>
          <input type="text" value={number} onChange={(event) => this.handleChange(event, 'number')}></input> 
          <br/>
          <label>Age:</label>
          <input type="number" value={age} onChange={(event) => this.handleChange(event, 'age')}></input> 
          <br/>
          <input type="submit" />
  </form> */}
  
  {/* CTA */}
  <div className="section bg-tertiary">
    <div className="content-wrap py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-12">
            <div className="cta-1">
              <div className="body-text mb-3">
                <h3 className="my-1 text-secondary" style={{"font-weight":"bold"}}>Join us now!</h3>
                <p className="uk18 mb-0 text-white">Feel free to contact us for any queries.</p>
              </div>
              <div className="body-action">
                <a href="/contact" className="btn btn-primary mt-3">CONTACT US</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* FOOTER SECTION */}
  <div className="footer" data-background="images/dummy-img-1920x900-3.jpg">
    <div className="content-wrap">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="footer-item">
              <img src={enlogbot} alt="logo bottom" style={{width: "150px"}} className="logo-bottom" />
              <div className="spacer-30" />
              <p style={{'font-weight':"bold"}}>Get the best Spoken English Lessons for a perfect career.</p>
              
            </div>
          </div>					
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="footer-item">
              <div className="footer-title">
                Contact Info
              </div>
              <ul className="list-info">
                <li>
                  <div className="info-icon">
                    <span className="fa fa-map-marker" />
                  </div>
                  <div className="info-text">F-4, Subhash Nagar, Shopping center, opp.Kanha Sweets, Jaipur-302016</div> </li>
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
                  <a href="mailto:contact.enhaance@gmail.com" className="info-text" style={{color: "white"}}>contact.enhaance@gmail.com</a>
                </li>
                
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="footer-item">
              <div className="footer-title">
                Useful Links
              </div>
              <ul className="list">
                <li><a href="about.html" title="About us">About us</a></li>
                <li><a href="teachers.html" title="Our Teacher">Our Teacher</a></li>
                <li><a href="classes.html" title="Our Classes">Our Classes</a></li>
                <li><a href="page-events.html" title="Our Events">Our Events</a></li>
                <li><a href="contact.html" title="Contact Us">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="footer-item">
              <div className="footer-title">
                Get in Touch
              </div>
              <p>Check out our facebook page </p>
              <div className="sosmed-icon d-inline-flex">
                <a href="https://www.facebook.com/enhaance" className="fb"><i className="fa fa-facebook" /></a> 
                {/* <a href="#" className="tw"><i className="fa fa-twitter" /></a> 
                <a href="#" className="ig"><i className="fa fa-instagram" /></a> 
                <a href="#" className="in"><i className="fa fa-linkedin" /></a>  */}
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
            <p className="ftex" style={{color:"purple", 'font-weight':'bold'}}>Copyright 2021 ?? <span className="color-primary">Enhaance</span> | Created by <a href="https://www.instagram.com/bhavikar.1001/" target="_blank"><span className="color-primary">Bhavik Arora</span></a></p> 
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </React.Fragment>
  )
  }

}
export default App;
