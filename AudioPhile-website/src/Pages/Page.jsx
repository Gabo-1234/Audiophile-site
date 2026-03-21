import "./Page.css";
import { useLocation, useNavigate } from "react-router-dom";

import Headphones from "../../Pictures/Headphone.png";
import SpeakerN from "../../Pictures/SpeakerN.png";
import Headphone from "../../Pictures/Headphones.png";
import Speaker from "../../Pictures/Speaker.png";
import Earphone from "../../Pictures/Earphone.png";
import Newproduct from "../../Pictures/HeadPhone2.png";

const Page = () => {
  const data = {
    Text: {
      HeadphoneText: {
        F: ["The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."],
        S: ["As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."],
        T: ["Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."],
      },
      SpeakerText: {
        F: ["Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."],
        S: ["Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."],
      },
      EarphoneText: {
        F: ["Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."],
      },
    },
    Tittles: {
      EarphoneTittle: {
        F: ["XX99 Mark II Headphones"],
        S: ["XX99 Mark I Headphones"],
        T: ["XX59 Headphones"],
      },
      SpeakerTittle: {
        F: ["ZX9 SPEAKER"],
        S: ["ZX7 SPEAKER"],
      },
      Earphone: {
        F: ["YX1 WIRELESS EARPHONES"],
      },
    },
  };

  const loca = useLocation();
  const navigate = useNavigate();

  const goTo = (path) => navigate(path);

  const isHP = loca.pathname === "/HeadphonesPage";
  const isSP = loca.pathname === "/SpeakersPage";
  const isEP = loca.pathname === "/EarphonesPage";

  return (
    <>
      <div className="box">
        <div className="L">
          <img className="imgp1" src={isHP ? Newproduct : isSP ? Speaker : isEP ? Earphone : ""} alt="" />
          <div className="ovalShadow2"></div>
        </div>
        <div className="R">
          <h1>
            {isHP ? data.Tittles.EarphoneTittle.F[0] : isSP ? data.Tittles.SpeakerTittle.F[0] : isEP ? data.Tittles.Earphone.F[0] : ""}
          </h1>
          <p>
            {isHP ? data.Text.HeadphoneText.F[0] : isSP ? data.Text.SpeakerText.F[0] : isEP ? data.Text.EarphoneText.F[0] : ""}
          </p>
          <button className="Product-view-btn" onClick={() => goTo(isHP ? "/Product/XX99MarkII" : isEP ? "/Product/YX1" : "/Product/ZX9")}>
            SEE PRODUCT
          </button>
        </div>
      </div>

      {!isEP && (
        <div className="box">
          <div className="R">
            <h1>{isHP ? data.Tittles.EarphoneTittle.S[0] : isSP ? data.Tittles.SpeakerTittle.S[0] : ""}</h1>
            <p>{isHP ? data.Text.HeadphoneText.S[0] : isSP ? data.Text.SpeakerText.S[0] : ""}</p>
            <button className="Product-view-btn" onClick={() => goTo(isHP ? "/Product/XX99MarkI" : "/Product/ZX7")}>
              SEE PRODUCT
            </button>
          </div>
          <div className="L">
            <img className="imgp2" src={isHP ? Headphone : isSP ? SpeakerN : ""} alt="" />
            <div className="ovalShadow2"></div>
          </div>
        </div>
      )}

      {isHP && (
        <div className="box">
          <div className="L">
            <img className="imgp3" src={Headphones} alt="" />
            <div className="ovalShadow2"></div>
          </div>
          <div className="R">
            <h1>{data.Tittles.EarphoneTittle.T[0]}</h1>
            <p>{data.Text.HeadphoneText.T[0]}</p>
            <button className="Product-view-btn" onClick={() => goTo("/Product/XX59")}>
              SEE PRODUCT
            </button>
          </div>
        </div>
      )}

      <div className="Products">
        <div onClick={() => goTo("/HeadphonesPage")}>
          <img src={Headphone} className="img1" draggable="false" alt="Headphones" />
          <div className="ovalShadow"></div>
          <div>
            <h3><strong>headphones</strong></h3>
            <button className="goshop">Shop 
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.707153 0.707092L5.70715 5.70709L0.707153 10.7071" stroke="#D87D4A" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
        <div onClick={() => goTo("/SpeakersPage")}>
          <img src={Speaker} className="img2" draggable="false" alt="Speakers" />
          <div className="ovalShadow"></div>
          <div>
            <h3><strong>speakers</strong></h3>
            <button className="goshop">Shop 
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.707153 0.707092L5.70715 5.70709L0.707153 10.7071" stroke="#D87D4A" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
        <div onClick={() => goTo("/EarphonesPage")}>
          <img src={Earphone} className="img3" draggable="false" alt="Earphones" />
          <div className="ovalShadow"></div>
          <div>
            <h3><strong>earphones</strong></h3>
            <button className="goshop">Shop 
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.707153 0.707092L5.70715 5.70709L0.707153 10.7071" stroke="#D87D4A" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;