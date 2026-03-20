import "./Home.css";
import Newproduct from "../../Pictures/Newproduct.png";
import Speaker from "../../Pictures/Speaker.png";
import Earphone from "../../Pictures/Earphone.png";
import Headphone from "../../Pictures/HeadPhones.png";

const Home = () => {
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
      </div>
      <div className="Products">
        <div>
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
        <div>
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
        <div>
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

export default Home;
