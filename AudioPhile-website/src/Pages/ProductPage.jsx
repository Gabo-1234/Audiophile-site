import { useParams } from "react-router-dom";
import "./ProductPage.css";
import Headphones from "../../Pictures/Headphone.png";
import SpeakerN from "../../Pictures/SpeakerN.png";
import Headphone from "../../Pictures/Headphones.png";
import Speaker from "../../Pictures/Speaker.png";
import Earphone from "../../Pictures/Earphone.png";
import Newproduct from "../../Pictures/HeadPhone2.png";

const ProductPage = () => {
  const { id } = useParams();

  const productImages = {
    "XX90MarkII": Newproduct,
    "XX90MarkI": Headphone,
    "XX59": Headphones,
    "ZX9": Speaker,
    "ZX7": SpeakerN,
    "YX1": Earphone
  };

  const currentImage = productImages[id];

  return (
    <div>
      <div className="L">
        <img
          className="imgp1"
          src={currentImage}
          alt={id || "product"}
        />
        <div className="ovalShadow2"></div>
      </div>
    </div>
  );
};

export default ProductPage;