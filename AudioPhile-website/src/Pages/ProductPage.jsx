import { useNavigate, useParams } from "react-router-dom";
import "./ProductPage.css";
import Headphones from "../../Pictures/Headphone.png";
import SpeakerN from "../../Pictures/SpeakerN.png";
import Headphone from "../../Pictures/HeadPhones.png";
import Speaker from "../../Pictures/Speaker.png";
import Earphone from "../../Pictures/Earphone.png";
import Newproduct from "../../Pictures/Headphone2.png";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const productImages = {
    "XX99MarkII": Newproduct,
    "XX99MarkI": Headphone,
    "XX59": Headphones,
    "ZX9": Speaker,
    "ZX7": SpeakerN,
    "YX1": Earphone
  };

  const ImageClassnames = {
    "XX99MarkII": "MKT",
    "XX99MarkI": "MKO",
    "XX59": "XXFN",
    "ZX9": "ZXN",
    "ZX7": "ZXS",
    "YX1": "YX"
  };

const backPaths = {
    "XX99MarkII": "/HeadphonesPage",
    "XX99MarkI": "/HeadphonesPage",
    "XX59": "/HeadphonesPage",
    "ZX9": "/SpeakersPage",
    "ZX7": "/SpeakersPage",
    "YX1": "/EarphonesPage"
  };

  const goBack = () => {
    const path = backPaths[id] || "/";
    navigate(path)
  }

  const currentImage = productImages[id];
  const currentClass = ImageClassnames[id]; 

  return (
    <>
    <div className="Goback"><span onClick={goBack}>Go Back</span></div>
    <div className="box2">
      <div className="img-Box">
        <img
          className={currentClass}
          src={currentImage}
          alt={id || "product"}
        />
        <div className="ovalShadow3"></div>
      </div>
    </div>
    </>
  );
};

export default ProductPage;