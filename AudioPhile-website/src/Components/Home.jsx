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
          <img src={Newproduct} />
        </div>
      </div>
      <div className="Products">
        <div>
          <img src={Headphone} className="img1" />
          <h3>headphones</h3>
        </div>
        <div>
          <img src={Speaker} className="img2" />
          <h3>speakers</h3>
        </div>
        <div>
          <img src={Earphone} className="img3" />
          <h3>earphones</h3>
        </div>
      </div>
    </>
  );
};

export default Home;
