import React from "react";
import "./main.css";
import devImage1 from "../../img/pic01.jpg";
import customerImage1 from "../../img/pic02.jpg";
import matthew2 from "../../img/matthew2.jpg";
import ricardo from "../../img/ricardo.png";
import juan from "../../img/juan.jpg";
import patrick from "../../img/patrick.jpg";
import nlouda from "../../img/nlouda.jpeg";
const WelcomeToDevTinder = () => (
  <div>
    {/* Header - Welcome to the app section */}
    <section id="banner">
      <div className="inner">
        <header>
          <h1>DevTinder</h1>
          <p>
            Platform to connect customers who need dev support on a project
            <br />
            to developers who can work on their projects based on their
            expertise
          </p>
          <p>Who are you??</p>
        </header>
        <a href="#developer" className="button big scrolly">
          A DEVELOPER
        </a>{" "}
        |{" "}
        <a href="#customer" className="button big scrolly">
          A CUSTOMER
        </a>
      </div>
    </section>

    {/* As a Developer */}
    <section className="wrapper style1">
      <div className="inner">
        {/* <!-- 2 Columns --> */}
        <div className="flex flex-2">
          <div className="mol col1">
            <div className="image round fit">
              <img src={devImage1} alt="" />
            </div>
          </div>
          {/* {{!-- Custom Mol conflicting with Col from jquery --}} */}
          <div className="mol col2">
            <h3>As a developer...</h3>
            <p>
              It is important to keep your skills fine tuned, and what better
              way to fine tune your skills than while building up your resume
              and making some money on the side? Dev tinder allows you to
              accomplish all of the above! By creating an account, you will be
              eligible to work on a variety of freelance projects our customer
              user base have created!
            </p>
            <p>
              So what are you waiting for?! Create a free account today and
              start building your resume, honing your skills, and making some
              money on the side!
            </p>
            <a href="/developerlogin" className="button">
              Start as a developer
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* As a Customer */}
    <section className="wrapper style2">
      <div className="inner">
        <div className="flex flex-2">
          <div className="mol col2">
            <h3>As a customer...</h3>
            <p>
              Your needs and standards are important to us. Thats why here at
              dev Tinder, we take great pride in matching you with the right
              developer to bring your project to life. Through our state of the
              art matching algorithm, we take parameters specified by you upon
              "creating a project", compare them to our database of developers,
              and provide you with a list of developers who are qualified to get
              the job done!
            </p>
            <p>
              Simply put, if you have a project that needs to be developed and
              dont have time to develop it yourself, or if you lack the skills
              to bring your project from the drawing board to production, youre
              in the right place! Create a profile and match with a developer
              who will bring your project to life!
            </p>
            <a href="/customerlogin" className="button">
              Start as a customer..
            </a>
          </div>
          {/* Custom Mol conflicting with Col from jquery */}
          <div className="mol col1 first">
            <div className="image round fit">
              <img src={customerImage1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <div className="row">
      <div className="col align-center">
        <div className="image round fit">
          <img src={matthew2} alt="" />
        </div>
        <p>Matthew Bogard</p>
        <p>
          Full-Stack Developer responsible for rewriting the framework of the application with React.js.
        </p>
        <a href="https://github.com/BogieBogard" className="button">
          <i className="fab fa-github" /> Learn More
        </a>
      </div>
      <div className="col align-center">
        <div className="image round fit">
          <img src={juan} alt="" />
        </div>
        <p>Juan Varon</p>
        <p>
          Full-Stack Developer responsible for web security, user authentication
          and browser security.
        </p>
        <a href="https://github.com/juan-camilo11" className="button">
          <i className="fab fa-github" /> Learn More
        </a>
      </div>

      <div className="col align-center">
        <div className="image round fit">
          <img src={patrick} alt="" />
        </div>
        <p>Patrick Wang</p>
        <p>
          Full-Stack Developer responsible for UI/UX and web page structure
          development.
        </p>
        <a href="https://github.com/paichunwang" className="button">
          {" "}
          <i className="fab fa-github" />
          Learn More
        </a>
      </div>

      <div className="col align-center">
        <div className="image round fit">
          <img src={ricardo} alt="" />
        </div>
        <p>Ricardo Bentin</p>
        <p>
          Full-Stack Developer responsible for project flow and structure
          development.
        </p>
        <a href="https://github.com/ricardobentin" className="button">
          <i className="fab fa-github" /> Learn More
        </a>
      </div>

      <div className="col align-center">
        <div className="image round fit">
          <img src={nlouda} alt="" />
        </div>
        <p>Nancy Louda</p>
        <p>
          Full-Stack Developer responsible for front-end style and back-end logic contributions.
        </p>
        <a href="https://github.com/nlouda" className="button">
          <i className="fab fa-github" /> Learn More
        </a>
      </div>

    </div>
  </div>
);

export default WelcomeToDevTinder;
