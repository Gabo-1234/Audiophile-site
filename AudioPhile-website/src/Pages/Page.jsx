import { useEffect } from "react";
import "./Page.css";
import { useLocation, useNavigate } from "react-router-dom";
import data from "../Data.json";

import Headphones from "../../Pictures/Headphone.png";
import SpeakerN from "../../Pictures/SpeakerN.png";
import Headphone from "../../Pictures/Headphones.png";
import Speaker from "../../Pictures/Speaker.png";
import Earphone from "../../Pictures/Earphone.png";
import Newproduct from "../../Pictures/HeadPhone2.png";

const Page = () => {
  const loca = useLocation();
  const navigate = useNavigate();

  const goToHeadphones = () => {
    navigate("/HeadphonesPage");
  };

  const goToSpeakers = () => {
    navigate("/SpeakersPage");
  };

  const goToEarphones = () => {
    navigate("/EarphonesPage");
  };

  useEffect(() => {
    const box = document.getElementById("F");
    const box2 = document.getElementById("S");

    if (box) {
      if (loca.pathname === "/EarphonesPage") {
        box.classList.add("hidden");
      } else {
        box.classList.remove("hidden");
      }
    }

    if (box2) {
      if (
        loca.pathname === "/SpeakersPage" ||
        loca.pathname === "/EarphonesPage"
      ) {
        box2.classList.add("hidden");
      } else {
        box2.classList.remove("hidden");
      }
    }
  }, [loca.pathname]);

  const isHP = loca.pathname === "/HeadphonesPage";
  const isSP = loca.pathname === "/SpeakersPage";
  const isEP = loca.pathname === "/EarphonesPage";

  return (
    <>
      <div className="box">
        <div className="L">
          <img
            className="imgp1"
            src={isHP ? Newproduct : isSP ? Speaker : isEP ? Earphone : ""}
            alt=""
          />
          <div className="ovalShadow2"></div>
        </div>
        <div className="R">
          <h1>
            {isHP
              ? data.Tittles.EarphoneTittle.F[0]
              : isSP
                ? data.Tittles.SpeakerTittle.F[0]
                : isEP
                  ? data.Tittles.Earphone.F[0]
                  : ""}
          </h1>
          <p>
            {isHP
              ? data.Text.HeadphoneText.F[0]
              : isSP
                ? data.Text.SpeakerText.F[0]
                : isEP
                  ? data.Text.EarphoneText.F[0]
                  : ""}
          </p>
          <button className="Product-view-btn">SEE PRODUCT</button>
        </div>
      </div>

      <div className="box" id="F">
        <div className="R">
          <h1>
            {isHP
              ? data.Tittles.EarphoneTittle.S[0]
              : isSP
                ? data.Tittles.SpeakerTittle.S[0]
                : ""}
          </h1>
          <p>
            {isHP
              ? data.Text.HeadphoneText.S[0]
              : isSP
                ? data.Text.SpeakerText.S[0]
                : ""}
          </p>
          <button className="Product-view-btn">SEE PRODUCT</button>
        </div>
        <div className="L">
          <img
            className="imgp2"
            src={isHP ? Headphone : isSP ? SpeakerN : ""}
            alt=""
          />
          <div className="ovalShadow2"></div>
        </div>
      </div>

      <div className="box" id="S">
        <div className="L">
          <img className="imgp3" src={isHP ? Headphones : ""} alt="" />
          <div className="ovalShadow2"></div>
        </div>
        <div className="R">
          <h1>{isHP ? data.Tittles.EarphoneTittle.T[0] : ""}</h1>
          <p>{isHP ? data.Text.HeadphoneText.T[0] : ""}</p>
          <button className="Product-view-btn">SEE PRODUCT</button>
        </div>
      </div>

      <div className="Products" style={{marginTop: "50px"}}>
        <div onClick={goToHeadphones}>
          <img src={Headphone} className="img1" draggable="false" />
          <div className="ovalShadow"></div>
          <div>
            <h3>
              <strong>headphones</strong>
            </h3>
            <button className="goshop">
              Shop
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.707153 0.707092L5.70715 5.70709L0.707153 10.7071"
                  stroke="#D87D4A"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>
        </div>
        <div onClick={goToSpeakers}>
          <img src={Speaker} className="img2" draggable="false" />
          <div className="ovalShadow"></div>
          <div>
            <h3>
              <strong>speakers</strong>
            </h3>
            <button className="goshop">
              Shop
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.707153 0.707092L5.70715 5.70709L0.707153 10.7071"
                  stroke="#D87D4A"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>
        </div>
        <div onClick={goToEarphones}>
          <img src={Earphone} className="img3" draggable="false" />
          <div className="ovalShadow"></div>
          <div>
            <h3>
              <strong>earphones</strong>
            </h3>
            <button className="goshop">
              Shop
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.707153 0.707092L5.70715 5.70709L0.707153 10.7071"
                  stroke="#D87D4A"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
