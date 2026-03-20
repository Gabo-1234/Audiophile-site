import "./Home.css";
import Newproduct from "../../Pictures/Newproduct.png";
import Speaker from "../../Pictures/Speaker.png";
import Earphone from "../../Pictures/Earphone.png";
import Headphone from "../../Pictures/HeadPhones.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
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

  return (
    <>
      <div className="Black-bg-New">
        <div className="New-Product">
          <div className="Pleft-side">
            <span className="spaces">NEW PRODUCT</span>
            <h1 className="Product-tittle">
              XX99 Mark II <br /> Headphones
            </h1>
            <span style={{ color: "#4c4c4c" }}>
              Experience natural, lifelike audio and exceptional <br /> build
              quality made for the passionate music <br /> enthusiast.
            </span>
            <button className="Product-view-btn">SEE PRODUCT</button>
          </div>
          <img src={Newproduct} className="NewP-img" draggable="false" />
        </div>
        <div className="white-bg"></div>
      </div>
      <div className="Products">
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
      <div className="Product-Gallery">
        <div className="Top">
          <img src={Speaker} className="speaker-Large" />
          <svg
            width="795"
            height="560"
            viewBox="0 0 795 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.202147">
              <circle cx="323" cy="436" r="235.5" stroke="white" />
              <circle cx="323" cy="436" r="270.5" stroke="white" />
              <circle cx="323" cy="436" r="471.5" stroke="white" />
            </g>
          </svg>
          <div className="speakerProduct">
            <h2 className="Product-tittle">
              ZX9 <br /> SPEAKER
            </h2>
            <span style={{ color: "white" }}>
              Upgrade to premium speakers that are <br /> phenomenally built to
              deliver truly remarkable <br /> sound.
            </span>
            <button className="btn2">SEE PRODUCT</button>
          </div>
        </div>
        <div className="white-bg2"></div>
        <div className="Middle">
          <h2 className="Product-Gal-tittle" style={{ color: "black" }}>
            ZX7 SPEAKER
          </h2>
          <button className="btn3">SEE PRODUCT</button>
        </div>
        <div className="Bottom">
          <div className="botPic"></div>
          <div className="botTB">
            <h2 className="Product-Gal-tittle">YX1 EARPHONES</h2>
            <button className="btn3">SEE PRODUCT</button>
          </div>
        </div>
      </div>
      <div className="Audio-Gear">
        <div className="TXT">
          <h2 className="AG-tittle">Bringing you the <br /> <span>best</span> audio gear</h2>
          <span className="text">Located at the heart of New York City, Audiophile is the premier <br /> store for high end headphones, earphones, speakers, and audio <br /> accessories. We have a large showroom and luxury <br /> demonstration rooms available for you to browse <br /> and experience a wide range of our products. Stop by our store to <br /> meet some of the fantastic people who make Audiophile the <br /> best place to buy your portable audio equipment.</span>
        </div>
        <div className="bg"></div>
      </div>
    </>
  );
};

export default Home;
