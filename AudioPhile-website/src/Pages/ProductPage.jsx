import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import "./ProductPage.css";
import Headphones from "../../Pictures/Headphone.png";
import SpeakerN from "../../Pictures/SpeakerN.png";
import Headphone from "../../Pictures/HeadPhones.png";
import Speaker from "../../Pictures/Speaker.png";
import Earphone from "../../Pictures/Earphone.png";
import EarphoneSm from "../../Pictures/EarphonesSmall.png"
import SpeakerL from "../../Pictures/SpeakersLarge.png"
import Newproduct from "../../Pictures/Headphone2.png";
import Newproduct2 from "../../Pictures/Newproduct.png"
import Img1 from "../../Pictures/ManTest.png"
import Img2 from "../../Pictures/SpeakStuff.png"
import Img3 from "../../Pictures/stuff2.png"
import Img4 from "../../Pictures/stuff3.png"
import Img5 from "../../Pictures/stuff4.png"
import Img6 from "../../Pictures/stuff5.png"
import Img7 from "../../Pictures/stuff6.png"
import Img8 from "../../Pictures/stuff7.png"
import Img9 from "../../Pictures/stuff8.png"
import Img10 from "../../Pictures/stuff9.png"
import Img11 from "../../Pictures/stuff10.png"
import Img12 from "../../Pictures/stuff11.png"
import Img13 from "../../Pictures/stuff12.png"
import Img14 from "../../Pictures/stuff13.png"
import Img15 from "../../Pictures/stuff14.png"

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Count, Setcount] = useState(1);
  const goTo = (path) => navigate(path);

  const productData = {
    XX99MarkII: {
      name: "XX99 Mark II Headphones",
      Prtext:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      Features:
        "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you're taking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat.",
      FeatureL2:
        "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
      Price: "$ 2,999",
      IncludedItems: [
        { quantity: 1, item: "Headphone Unit" },
        { quantity: 2, item: "Replacement Earcups" },
        { quantity: 1, item: "User Manual" },
        { quantity: 1, item: "3.5mm 5m Audio Cable" },
        { quantity: 1, item: "Travel Bag" },
      ],
    },

    XX99MarkI: {
      name: "XX99 Mark I Headphones",
      Prtext:
        "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      Features:
        "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.",
      FeatureL2:
        "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
      Price: "$ 1,750",
      IncludedItems: [
        { quantity: 1, item: "Headphone Unit" },
        { quantity: 2, item: "Replacement Earcups" },
        { quantity: 1, item: "User Manual" },
        { quantity: 1, item: "3.5mm 5m Audio Cable" },
      ],
    },

    XX59: {
      name: "XX59 Headphones",
      Prtext:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      Features:
        "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
      FeatureL2:
        "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
      Price: "$ 899",
      IncludedItems: [
        { quantity: 1, item: "Headphone Unit" },
        { quantity: 2, item: "Replacement Earcups" },
        { quantity: 1, item: "User Manual" },
        { quantity: 1, item: "3.5mm 5m Audio Cable" },
      ],
    },

    ZX9: {
      name: "ZX9 SPEAKER",
      Prtext:
        "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      Features:
        "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
      FeatureL2:
        "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
      Price: "$ 4,500",
      IncludedItems: [
        { quantity: 2, item: "Speaker Unit" },
        { quantity: 2, item: "Speaker Cloth Panel" },
        { quantity: 1, item: "User Manual" },
        { quantity: 1, item: "3.5mm 10m Audio Cable" },
        { quantity: 1, item: "Optical Cable 10m" },
      ],
    },

    ZX7: {
      name: "ZX7 SPEAKER",
      Prtext:
        "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      Features:
        "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.",
      FeatureL2:
        "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
      Price: "$ 3,500",
      IncludedItems: [
        { quantity: 2, item: "Speaker Unit" },
        { quantity: 2, item: "Speaker Cloth Panel" },
        { quantity: 1, item: "User Manual" },
        { quantity: 1, item: "3.5mm 10m Audio Cable" },
        { quantity: 1, item: "Optical Cable 7.5m" },
      ],
    },

    YX1: {
      name: "YX1 WIRELESS EARPHONES",
      Prtext:
        "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      Features:
        "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.",
      FeatureL2:
        "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
      Price: "$ 599",
      IncludedItems: [
        { quantity: 2, item: "Earphone Unit" },
        { quantity: 6, item: "Multi-size Earplug" },
        { quantity: 1, item: "User Manual" },
        { quantity: 1, item: "Travel Pouch" },
        { quantity: 1, item: "USB-C Cable" },
      ],
    },
  };

  const Increase = () => {
    Setcount(Count + 1);
  };

  const Decrease = () => {
    if (Count <= 1) {
      console.error("Invalid Number");
    } else {
      Setcount(Count - 1);
    }
  };

  const CatalogImages = {
    XX99MarkII: { Img1: Img1, Img2: Newproduct2, Img3: Img2 },
    XX99MarkI:  { Img1: Img3, Img2: Img4,       Img3: Img5 },
    XX59:       { Img1: Img6, Img2: Img7,       Img3: Img8 },
    ZX9:        { Img1: Img9, Img2: Img10,      Img3: Img11 },
    ZX7:        { Img1: Img12, Img2: Img13,     Img3: SpeakerL },
    YX1:        { Img1: Img14, Img2: Img15,     Img3: EarphoneSm },
  };

  const productImages = {
    XX99MarkII: Newproduct,
    XX99MarkI: Headphone,
    XX59: Headphones,
    ZX9: Speaker,
    ZX7: SpeakerN,
    YX1: Earphone,
  };

  const ImageClassnames = {
    XX99MarkII: "MKT",
    XX99MarkI: "MKO",
    XX59: "XXFN",
    ZX9: "ZXN",
    ZX7: "ZXS",
    YX1: "YX",
  };

  const backPaths = {
    XX99MarkII: "/HeadphonesPage",
    XX99MarkI: "/HeadphonesPage",
    XX59: "/HeadphonesPage",
    ZX9: "/SpeakersPage",
    ZX7: "/SpeakersPage",
    YX1: "/EarphonesPage",
  };

  const Newproducts = {
    XX99MarkII: "NEW PRODUCT",
    ZX9: "NEW PRODUCT",
    YX: "NEW PRODUCT",
  };

  const goBack = () => {
    const path = backPaths[id] || "/";
    navigate(path);
  };

  const currentImage = productImages[id];
  const currentClass = ImageClassnames[id];
  const currentProduct = productData[id];
  const currentCatalog = CatalogImages[id] || {};
  const NewProduct = Newproducts[id];

  return (
    <>
      <div className="Goback">
        <span onClick={goBack}>Go Back</span>
      </div>
      <div className="Top2">
        <div className="img-Box">
          <img
            className={currentClass}
            src={currentImage}
            alt={id || "product"}
          />
          <div className="ovalShadow3"></div>
        </div>
        <div className="Product-des">
          <span
            style={{ display: NewProduct ? "block" : "none" }}
            className="spaces New"
          >
            {NewProduct}
          </span>
          <h2>{currentProduct.name}</h2>
          <span>{currentProduct.Prtext}</span>
          <span className="Price">
            <strong>{currentProduct.Price}</strong>
          </span>
          <div className="Buttons">
            <div className="count">
              <button onClick={Decrease}>-</button>
              <span>{Count}</span>
              <button onClick={Increase}>+</button>
            </div>
            <button className="Product-view-btn">ADD TO CART</button>
          </div>
        </div>
      </div>
      <div className="Mid">
        <div className="Features">
          <h2 className="Main">FEATURES</h2>
          <span>{currentProduct.Features}</span>
          <span>{currentProduct.FeatureL2}</span>
        </div>
        <div className="in-the-box">
          <h2 className="Main">IN THE BOX</h2>
          <div>
            {currentProduct.IncludedItems.map((data, index) => (
              <div key={index}>
                <span className="Quantity">{data.quantity}x</span>
                <span className="accesoary">{data.item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="Bot">
       <div>
         <div className="Ca I1" style={{backgroundImage: `url(${currentCatalog.Img1})`}}></div>
        <div className="Ca I1" style={{backgroundImage: `url(${currentCatalog.Img2})`}}></div>
       </div>
        <div className="Ca I2" style={{backgroundImage: `url(${currentCatalog.Img3})`}}></div>
      </div>
      <div className="Products">
        <div onClick={() => goTo("/HeadphonesPage")}>
          <img
            src={Headphone}
            className="img1"
            draggable="false"
            alt="Headphones"
          />
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
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
        <div onClick={() => goTo("/SpeakersPage")}>
          <img
            src={Speaker}
            className="img2"
            draggable="false"
            alt="Speakers"
          />
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
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
        <div onClick={() => goTo("/EarphonesPage")}>
          <img
            src={Earphone}
            className="img3"
            draggable="false"
            alt="Earphones"
          />
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
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
