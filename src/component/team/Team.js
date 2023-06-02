import React, { useEffect } from "react";
import ayush from "../images/ayush.png";
import ojas from "../images/ojas.jpg";
import "./team.css";
import banner from "../images/banner.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../footer/Footer";
import { Grid } from "@material-ui/core";

const datas = [
  {
    name: "Post Production",
    student: ["Rishabh Jaiswal"],
  },
  {
    name: "Curator",
    student: ["Akshita Awasthi"],
  },
  {
    name: "Operations",
    student: ["Arpit Rathi"],
  },
  {
    name: "Marketing",
    student: ["Sanjana Rai"],
  },
  {
    name: "Production",
    student: ["Rishabh Dwivedi"],
  },
  {
    name: "Partnerships",
    student: ["Subrat Tripathi"],
  },
];
const datas2 = [
  " Himanshu Mishra",
  " Yash Kainth",
  " Anushka Choudhary",
  " Mohammad Momin Khan",
  " Bushra Khan",
  " Vardhan Salathia",
  " Aman Yadav",
  " Arnav Kumar",
  " Aman Gujjar",
  " Vikhyat Tewari",
  " Abhishek Bhati",
  " Yuvraj Dhama",
  " Ishita Agrawal",
  " Shivansh Mishra",
  " Priya Gupta",
  " Daksh Sahu",
  " Prashant Bharadwaj",
  " Chaitanya Gautam",
  " Maroof Sameer",
  " Vaishnav Srivastava",
  " Ritik Sachan",
  " Vaidik Dixit",
  " Samriddhi",
  " Aryanshi Dutt",
  " Nikhil Jaiswal",
];

const Team = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 2000,
      easing: "ease-in-sine",
      delay: 60,
    });
  }, []);
  return (
    <>
      <div
        data-aos="fade-up"
        style={{
          width: "100vw",
          textAlign: "center",
          background: `url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="team"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <div className=" textsss" style={{ width: "100%", height: "30vh" }}>
            <span
              className="span1"
              style={{ color: "whitesmoke", fontFamily: "Helvetica" }}
            >
              Our Team
            </span>
            <br />
            <br />
            <span
              data-aos="fade-in"
              className="span2"
              style={{
                color: "whitesmoke",
                fontFamily: "Helvetica",
                fontSize: "4vh",
              }}
            >
              One of the most important things for any leader is to never let
              anyone else define who you are.{" "}
            </span>
          </div>
          <div data-aos="fade-up" class="container-team">
            <div class="card-team">
              <div class="content-team">
                <div class="imgBx-team">
                  <img src={ayush} alt="" />
                </div>
                <div class="contentBx-team">
                  <h4>Ayush Agarwal</h4>

                  <h5>Organizer</h5>
                  <h3>Greater Noida</h3>
                </div>
                <div class="sci">
                  <a href="https://www.linkedin.com/in/ayushagarwal016/">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                  <a href="https://instagram.com/ayushagarwal016/">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a href="https://twitter.com/ayushagarwal016">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" class="container-team">
            <div class="card-team">
              <div class="content-team">
                <div class="imgBx-team">
                  <img src={ojas} alt="" />
                </div>
                <div class="contentBx-team">
                  <h4>Ojas Saran</h4>

                  <h5>Co-Organizer</h5>
                  <h3>Greater Noida</h3>
                </div>
                <div class="sci">
                  <a href="https://www.linkedin.com/in/ojas-saran-a58a961aa/">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                  <a href="https://www.instagram.com/ofi.01/">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a href="https://twitter.com/">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Grid
          data-aos="fade-up"
          container
          justifyContent="space-around"
          style={{
            position: "relative",
            top: "-10vh",
            width: "95%",
            margin: "auto",
          }}
          spacing="3"
        >
          <div style={{ width: "100%", margin: "auto", paddingBottom: "4vh" }}>
            <span style={{ fontSize: "5vh", color: "whitesmoke" }}>
              Team Members
            </span>
          </div>
          <Grid item xs={12} md={6} lg={6}>
            {datas.map((item) => (
              <div className="members">
                {item.student.map((i) => (
                  <>
                    <span
                      style={{
                        color: "whitesmoke",
                        fontSize: "3.8vh",
                        fontWeight: "bold",
                        padding: "1.5vh",
                      }}
                    >
                      {i}
                    </span>
                    <br />
                  </>
                ))}
                <span
                  style={{
                    color: "#e0ac1c",
                    fontSize: "2.8vh",
                    fontWeight: "bold",
                    fontFamily: "Helvetica",
                    padding: "1.5vh",
                  }}
                >
                  {item.name}
                </span>
                <br />
              </div>
            ))}
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            {datas2.map((item) => (
              <div className="members">
                <span
                  style={{
                    color: "whitesmoke",
                    fontSize: "2.45vh",
                    fontWeight: "bold",
                    fontFamily: "Helvetica",
                    padding: "2vh",
                  }}
                >
                  {item}
                </span>
                <br />
              </div>
            ))}
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default Team;
