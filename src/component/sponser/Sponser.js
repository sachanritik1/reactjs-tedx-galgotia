import React from "react";
import { Grid } from "@material-ui/core";
import e from "../images/sponser1.jpg";
import f from "../images/sponser31.jpg";
import g from "../images/sponser2.png";
import h from "../images/sponser4.png";
import i from "../images/safeexpress.png";
import "./sponser.css";
const Sponser = () => {
  return (
    <div style={{ position: "absolute", top: "20vh", width: "100%" }}>
      <div style={{ textAlign: "center", width: "100%", margin: "auto" }}>
        <span
          style={{
            fontSize: "5vh",
            fontFamily: "PT Sans Caption",
            fontWeight: "bold",
            color: "red",
          }}
        >
          Running successfully with our Sponsors
        </span>
      </div>
      <div
        style={{
          width: "60%",
          margin: "auto",
          height: "0.2vh",
          backgroundColor: "#7F7F7F",
        }}
      ></div>
      <br />
      <br />
      <Grid className="gridd" container>
        <Grid item xs={4} md={4} lg={4} style={{ flexBasis: 0 }}>
          <div className="company_logos">
            <img style={{ width: "100%", height: "100%" }} src={e} alt="tata" />
          </div>
        </Grid>
        <Grid item xs={4} md={4} lg={4} style={{ flexBasis: 0 }}>
          <div className="company_logos">
            <img style={{ width: "100%", height: "100%" }} src={f} alt="img" />
          </div>
        </Grid>

        <Grid item xs={4} md={4} lg={4} style={{ flexBasis: 0 }}>
          <div className="company_logos">
            <img
              style={{ width: "100%", height: "100%" }}
              src={g}
              alt="kotak"
            />
          </div>
        </Grid>
        <Grid item xs={4} md={4} lg={4} style={{ flexBasis: 0 }}>
          <div className="company_logos">
            <img
              style={{ width: "100%", height: "100%" }}
              src={h}
              alt="goorej"
            />
          </div>
        </Grid>
        <Grid item xs={4} md={4} lg={4} style={{ flexBasis: 0 }}>
          <div className="company_logos">
            <img
              style={{ width: "100%", height: "100%" }}
              src={i}
              alt="goorej"
            />
          </div>
        </Grid>
      </Grid>
      <div
        style={{
          width: "40%",
          margin: "auto",
          height: "0.2vh",
          backgroundColor: "#7F7F7F",
          marginTop: "4vh",
        }}
      ></div>

      <div className="sponserdiv">
        <span
          className="innersponserdiv"
          style={{ fontWeight: "bold", fontFamily: "Helvetica" }}
        >
          Partner with us
        </span>
        <span
          className="inner1sponserdiv"
          style={{ fontWeight: "bold", fontFamily: "Helvetica" }}
        >
          Contact{" "}
          <a href="mailto:sponsorship.gclub@gmail.com">
            sponsorship.gclub@gmail.com
          </a>
        </span>
      </div>
    </div>
  );
};

export default Sponser;
