import React from "react";
import "./main.css";
import devImage1 from "../../img/pic01.jpg";
import customerImage1 from "../../img/pic02.jpg";

const WelcomeToDevTinder = () => (
  <div>
    {/* Header - Welcome to the app section */}
    <section id="banner">
      <div class="inner">
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
        <a href="#developer" class="button big scrolly">
          A DEVELOPER
        </a>{" "}
        |{" "}
        <a href="#customer" class="button big scrolly">
          A CUSTOMER
        </a>
      </div>
    </section>

    {/* As a Developer */}
    <section class="wrapper style1">
      <div class="inner">
        {/* <!-- 2 Columns --> */}
        <div class="flex flex-2">
          <div class="mol col1">
            <div class="image round fit">
              <img src={devImage1} alt="" />
            </div>
          </div>
          {/* {{!-- Custom Mol conflicting with Col from jquery --}} */}
          <div class="mol col2">
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
            <a href="/developerlogin" class="button">
              Start as a developer
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* As a Customer */}
    <section class="wrapper style2">
      <div class="inner">
        <div class="flex flex-2">
          <div class="mol col2">
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
            <a href="/customerlogin" class="button">
              Start as a customer..
            </a>
          </div>
          {/* Custom Mol conflicting with Col from jquery */}
          <div class="mol col1 first">
            <div class="image round fit">
              <img src={customerImage1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <div class="col align-center">
      <div class="image round fit">
        <img src="/assets/img/juan.jpg" alt="" />
      </div>
      <p>Juan Varon</p>
      <p>
        Full-Stack Developer responsible for web security, user authentication
        and browser security.
      </p>
      <a href="https://github.com/juan-camilo11" class="button">
        <i class="fab fa-github" /> Learn More
      </a>
    </div>
    <div class="col align-center">
      <div class="image round fit">
        <img src="/assets/img/juan.jpg" alt="" />
      </div>
      <p>Juan Varon</p>
      <p>
        Full-Stack Developer responsible for web security, user authentication
        and browser security.
      </p>
      <a href="https://github.com/juan-camilo11" class="button">
        <i class="fab fa-github" /> Learn More
      </a>
    </div>

    <div class="col align-center">
      <div class="image round fit">
        <img src="/assets/img/patrick.jpg" alt="" />
      </div>
      <p>Patrick Wang</p>
      <p>
        Full-Stack Developer responsible for UI and web page structure
        development.
      </p>
      <a href="https://github.com/paichunwang" class="button">
        {" "}
        <i class="fab fa-github" />
        Learn More
      </a>
    </div>

    <div class="col align-center">
      <div class="image round fit">
        <img src="/assets/img/ricardo.png" alt="" />
      </div>
      <p>Ricardo Bentin</p>
      <p>
        Full-Stack Developer responsible for project flow and structure
        development.
      </p>
      <a href="https://github.com/ricardobentin" class="button">
        <i class="fab fa-github" /> Learn More
      </a>
    </div>
  </div>
);

export default WelcomeToDevTinder;
