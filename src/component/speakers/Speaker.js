import React, { useEffect } from "react";
import "./speaker.css";
import amaresh from "../images/amaresh.png";
import { Grid } from "@material-ui/core";
import amit from "../images/amit.png";
import parin from "../images/parin.jpg";

import tedx from "../images/tedx2.webp";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../footer/Footer";

import monica from "../images/monica.jpg";
import rupinder from "../images/ropinder.jpg";
import anil from "../images/anil.jpg";
import bhuvesh from "../images/bhuvesh.jpg";
import himanshu from "../images/himanshu.jpg";
import avirat from "../images/avirat.jpg";
import oviya from "../images/oviya.png";
import samriddi from "../images/samriddhi.jpg";
import yash from "../images/yash.jpg";
import arun from "../images/arun.jpg";
import rohit from "../images/rohit.jpg";

const data = [
  {
    image: yash,
    name: "Maj. Gen. Yash Mor",
    job: "Sena Medal",
  },
  {
    image: amaresh,
    name: "Amresh Bharti",
    job: "Youtuber | Mahatmaji Technical",
  },
  {
    image: bhuvesh,
    name: "Bhuvesh Kapoor",
    job: "Creative Head | Jaw Drop Works",
  },
  {
    image: himanshu,
    name: "Himansu Sekhar Panda",
    job: "CEO | Skyrider",
  },
  {
    image: amit,
    name: "amit kumar",
    job: "CEO | OLX Group India",
  },
  {
    image: anil,
    name: "Anil Sood",
    job: "Hon. President | CHETNA",
  },
  {
    image: arun,
    name: "Arun Pandit",
    job: "Astrologer",
  },
  {
    image: rupinder,
    name: "Ms. Rupinder Maliya",
    job: "Founder | Vision Upgraded",
  },
  {
    image: monica,
    name: "Ms. Monica Marwah",
    job: "HR Director | Bluepi",
  },

  {
    image: parin,
    name: "Dr. Parin Somani",
    job: "Director | London Organization of Skills Development",
  },
  {
    image: avirat,
    name: "Avirat Jain",
    job: "Young Author | World Record Holder",
  },
  {
    image: oviya,
    name: "Oviya Singh",
    job: "Student | Motivational Speaker",
  },
  {
    image: samriddi,
    name: "Samriddhi",
    job: "Student at Gcet",
  },
  {
    image: rohit,
    name: "Rohit Vaidwan",
    job: "Educationist",
  },
];
const Speaker = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 60,
    });
  }, []);
  return (
    <>
      <div data-aos="fade-up" style={{ background: "#212121", height: "100%" }}>
        <div
          style={{
            textAlign: "center",
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            backgroundImage: `url(${tedx})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            overflow: "hidden",
          }}
        >
          <div style={{ width: "80%", position: "relative", margin: "auto" }}>
            <span
              style={{
                fontWeight: "bolder",
                fontSize: "5vh",
                color: "white",
                fontFamily: "Helvetica",
              }}
            >
              OUR SPEAKERS
            </span>
            <br />
            <span
              style={{
                fontWeight: "bolder",
                fontSize: "3vh",
                color: "whitesmoke",
                fontFamily: "Helvetica",
              }}
            >
              From entrepreneurs to child prodigies to actual princes, we’ve had
              some wonderful speakers from diverse backgrounds. The powerful
              stories and ideas they shared epitomize the spirit of TEDx and
              we’re truly privileged to have hosted these icons.
            </span>
          </div>
        </div>

        <Grid
          style={{ paddingTop: "2vw" }}
          container
          spacing="3"
          justifyContent="space-evenly"
        >
          {data.map((item) => (
            <Grid item lg={4} md={6} xs={12}>
              <section data-aos="fade-up" id="team" class="team-area">
                <div style={{ width: "85%", margin: "auto" }}>
                  <div class="item">
                    <div class="thumb">
                      <img class="img-fluid" src={item.image} alt="Thumb" />
                      <div class="overlay">
                        <h4 style={{ fontFamily: "helvetica" }}>{item.name}</h4>
                        <p>{item.job}</p>
                        {/* <div class="social">
                                        <ul>
                                            <li class="twitter">
                                                <a href="#"><i class="fab fa-twitter"></i></a>
                                            </li>
                                            <li class="pinterest">
                                                <a href="#"><i class="fab fa-pinterest"></i></a>
                                            </li>
                                            <li class="instagram">
                                                <a href="#"><i class="fab fa-instagram"></i></a>
                                            </li>
                                            <li class="vimeo">
                                                <a href="#"><i class="fab fa-vimeo-v"></i></a>
                                            </li>
                                        </ul>
                                    </div> */}
                      </div>
                    </div>
                    <div class="info">
                      <span class="message">
                        <a href="#">
                          <i class="fas fa-envelope-open"></i>
                        </a>
                      </span>
                      <h4 style={{ fontFamily: "helvetica" }}>{item.name}</h4>
                    </div>
                  </div>
                </div>
              </section>
              {/* </div> */}
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default Speaker;
