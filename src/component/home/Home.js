import React, { useEffect, useState, useRef } from "react";
import background from "../images/tedtalk.jpeg";
import "./home.css";

import Aos from "aos";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import "aos/dist/aos.css";
// import pdf from "../images/event.pdf";
import Footer from "../footer/Footer";
const Home = () => {
  const [sdays, setdays] = useState("00");
  const [shours, sethours] = useState("00");
  const [sminutes, setmin] = useState("00");
  const [sseconds, setseconds] = useState("00");
  let interval = useRef();

  const starttimer = () => {
    const countdatetime = new Date("April 13, 2023 11:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      var distance = countdatetime - now;
      // console.log(`distance: ${distance}`);
      distance = distance / 1000; //sec
      const days = Math.floor(distance / 86400);
      distance -= 86400 * days;
      const Hours = Math.floor(distance / 3600);
      distance -= 3600 * Hours;
      const minu = Math.floor(distance / 60);
      distance -= 60 * minu;
      const seconds = Math.floor(distance);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setdays(days);
        sethours(Hours);
        setmin(minu);
        setseconds(seconds);
      }
    }, 1000);
  };
  const pdfopen = () => {
    window.open(
      "https://www.instagram.com/tedxgalgotia/?igshid=YmMyMTA2M2Y%3D"
    );
  };

  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 2000,
      easing: "ease-in-sine",
      delay: 60,
    });
  }, []);
  useEffect(() => {
    starttimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);
  return (
    <>
      <div
        data-aos="fade-up"
        class="banner"
        style={{
          width: "100%",
          height: "130vh",
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(4px)",
          overflow: "hidden",
        }}
      ></div>
      <div
        data-aos="fade-up"
        class="content"
        style={{
          zIndex: "2",
          position: "absolute",
          top: "-5%",
          width: "100%",
          margin: "auto",
        }}
      >
        <section className="timer" style={{ width: "100%", margin: "auto" }}>
          <div style={{ width: "85%", margin: "auto", paddingTop: "3vh" }}>
            <span>
              {<TimerOutlinedIcon style={{ color: "red", fontSize: "12vh" }} />}
            </span>
            <h2
              style={{
                fontWeight: "bolder",
                fontSize: "3vh",
                letterSpacing: "0.8vh",
                color: "red",
              }}
            >
              Coming Soon!!
            </h2>
            <p
              style={{
                fontWeight: "bolder",
                fontSize: "4vh",
                letterSpacing: "0.5vh",
                color: "whitesmoke",
              }}
            >
              Season 2.0 of TEDxGalgotiasCollegeofEngineering is here !!
            </p>
          </div>
          <div>
            <section className="dates">
              <p
                style={{
                  fontSize: "9vh",
                  letterSpacing: "0.5vw",
                  color: "white",
                  fontWeight: "bolder",
                }}
              >
                {sdays}
              </p>
              <p
                style={{ fontSize: "5vh", fontWeight: "bolder", color: "red" }}
              >
                <small>Days</small>
              </p>
            </section>
            <span style={{ fontSize: "8vh", fontWeight: "bolder" }}>:</span>
            <section>
              <p
                style={{
                  fontSize: "8vh",
                  letterSpacing: "0.5vw",
                  color: "white",
                  fontWeight: "bolder",
                }}
              >
                {shours}
              </p>
              <p
                style={{ fontSize: "4vh", fontWeight: "bolder", color: "red" }}
              >
                <small>Hours</small>
              </p>
            </section>
            <span
              style={{
                fontSize: "6vh",
                letterSpacing: "0.5vw",
                fontWeight: "bolder",
              }}
            >
              :
            </span>
            <section>
              <p
                style={{
                  fontSize: "6vh",
                  letterSpacing: "0.5vw",
                  color: "white",
                  fontWeight: "bolder",
                }}
              >
                {sminutes}
              </p>
              <p
                style={{ fontSize: "3vh", fontWeight: "bolder", color: "red" }}
              >
                <small>Minutes</small>
              </p>
            </section>
            <span
              style={{
                fontSize: "4vh",
                letterSpacing: "0.5vw",
                fontWeight: "bolder",
              }}
            >
              :
            </span>
            <section>
              <p
                style={{
                  fontSize: "4vh",
                  color: "white",
                  fontWeight: "bolder",
                  letterSpacing: "0.5vw",
                }}
              >
                {sseconds}
              </p>
              <p
                style={{ fontSize: "2vh", fontWeight: "bolder", color: "red" }}
              >
                <small>Seconds</small>
              </p>
            </section>
          </div>
        </section>
        <button
          style={{
            width: "20vh",
            margin: "auto",
            fontSize: "3vh",
            padding: "1.2vh",
            color: "whitesmoke",
            background: "rgb(30,30,40)",
            fontFamily: "helvetica",
            border: "none",
            borderRadius: "1vh",
            position: "relative",
            top: "10vw",
            cursor: "pointer",
          }}
          onClick={() => pdfopen()}
        >
          Event details
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Home;
