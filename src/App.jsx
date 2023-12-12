import React from "react";
import { useEffect } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";

import Nav from "./Components/Nav/Nav";
import Social from "./Components/SocialCard/Social";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";

import git from "./assets/git.png";
import instagram from "./assets/instagram.png";
import linkedin from "./assets/linkedin.png";
import telegram from "./assets/telegram.png";
import whatsapp from "./assets/whatsapp.png";


function App() {
  useEffect(() => {
    const navLinks = document.querySelectorAll("nav ul li");
    const indicator = document.querySelector("nav .indicator");

    const navIcons = document.querySelectorAll(".nav-toggle .nav-icon");

    const pages = document.querySelectorAll(".page");

    const profile = document.querySelector(".profile");

    function handleScroll() {
      let homeBottom = pages[0].getBoundingClientRect().bottom;
      let homeHeight = pages[0].offsetHeight;

      if (homeBottom < homeHeight / 2) {
        profile.classList.add("active");
      } else {
        profile.classList.remove("active");
      }

      for (let i = 0; i < pages.length; i++) {
        let currentPage = pages[i];

        let pageTop = currentPage.getBoundingClientRect().top;

        if (pageTop < 300) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
          });

          navLinks[i].classList.add("active");

          let width = navLinks[i].offsetWidth;
          let left = navLinks[i].offsetLeft;

          indicator.style.width = `${width + 28}px`;
          indicator.style.left = left + "px";

          navIcons.forEach((icon) => {
            icon.classList.remove("active");
          });

          navIcons[i].classList.add("active");
        }
      }
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Header />
      <Nav />

      <main>
        <div className="page" id="home">
          <Home />
        </div>

        <div className="page" id="about">
          <About />
        </div>

        <div className="socials-wrapper">
          <h2 className="quick-links">Socials</h2>

          <div className="socials">
            <Social logo={git} value="GitHub" link='https://github.com/Makar-rd'/>
            <Social logo={instagram} value="Instagram" link='https://instagram.com/_makkarronn_?igshid=MzNlNGNkZWQ4Mg=='/>
            <Social logo={telegram} value="Telegram" link='https://t.me/makarr1'/>
            <Social logo={whatsapp} value="Whatsapp" link='https://wa.me/qr/3QVLQPF3WKJMG1'/>
            <Social logo={linkedin} value="Linkedin" link='https://www.linkedin.com/in/makkarronn/'/>
          </div>
        </div>

        <div className="page" id="projects">
          <Projects />
        </div>

        <div className="page" id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
