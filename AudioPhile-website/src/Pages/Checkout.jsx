import { useEffect, useContext, useState, useRef } from "react";
import { CartContext } from "../CartContext";
import { useNavigate } from "react-router-dom";
import {
  validateEmail,
  validateName,
  validatePhone,
  validateAddress,
  validateZipCode,
} from "./FormErrors";
import "./Checkout.css";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, removeAllFromCart } = useContext(CartContext);
  const [OpenCheckout, setOpenCheckout] = useState(false);
  const [isDeliveryCashSelected, setIsDeliveryCashSelected] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    eMoneyNumber: "",
    eMoneyPin: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    eMoneyNumber: "",
    eMoneyPin: "",
  });
  const formRef = useRef(null);

    const visibleItems = showAll ? cartItems : cartItems.slice(0, 1);

  useEffect(() => {
    if (OpenCheckout) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [OpenCheckout]);

  const getFieldError = (field, value) => {
    if (!value.trim()) return `${field} is required`;
    switch (field) {
      case "name":
        return validateName(value) ? "invalid name" : "";
      case "email":
        return validateEmail(value) ? "invalid email" : "";
      case "phone":
        return validatePhone(value) ? "invalid phone" : "";
      case "address":
        return validateAddress(value) ? "invalid address" : "";
      case "zipCode":
        return validateZipCode(value) ? "invalid zip code" : "";
      case "city":
        return value ? "" : "city is required";
      case "country":
        return value ? "" : "country is required";
      case "eMoneyNumber":
        return !isDeliveryCashSelected ? (value ? "" : "card number is required") : "";
      case "eMoneyPin":
        return !isDeliveryCashSelected ? (value ? "" : "pin is required") : "";
      default:
        return "";
    }
  };

  const validateAllFields = () => {
    const errors = {
      name: formData.name.trim() ? (validateName(formData.name) ? "invalid name" : "") : "name is required",
      email: formData.email.trim() ? (validateEmail(formData.email) ? "invalid email" : "") : "email is required",
      phone: formData.phone.trim() ? (validatePhone(formData.phone) ? "invalid phone" : "") : "phone is required",
      address: formData.address.trim() ? (validateAddress(formData.address) ? "invalid address" : "") : "address is required",
      zipCode: formData.zipCode.trim() ? (validateZipCode(formData.zipCode) ? "invalid zip code" : "") : "zip code is required",
      city: formData.city.trim() ? "" : "city is required",
      country: formData.country.trim() ? "" : "country is required",
      eMoneyNumber: !isDeliveryCashSelected ? (formData.eMoneyNumber.trim() ? "" : "card number is required") : "",
      eMoneyPin: !isDeliveryCashSelected ? (formData.eMoneyPin.trim() ? "" : "pin is required") : "",
    };
    setFormErrors(errors);
    return errors;
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    if (submitAttempted) {
      setFormErrors((prev) => ({
        ...prev,
        [id]: getFieldError(id, value),
      }));
    }
  };

  const handleContinuePay = () => {
    setSubmitAttempted(true);
    const form = formRef.current;
    if (!form) return;

    const errors = validateAllFields();
    const hasErrors = Object.values(errors).some((error) => error !== "");

    if (hasErrors || !form.checkValidity()) {
      form.reportValidity();
      return;
    }

    showCheckedout();
  };

  const showCheckedout = () => {
    setOpenCheckout(true);
    const TH = document.getElementById("ThankU");
    const Bg = document.getElementById("Bg");
    if (Bg) {
      Bg.classList.remove("hidden");
      Bg.classList.add("bg-dark");
    }
    if (TH) {
      TH.classList.remove("hidden");
      TH.classList.add("ThankU");
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#f1f1f1";

    return () => {
      document.body.style.backgroundColor = "#000";
    };
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  const Backhome = () => {
    removeAllFromCart();
    navigate("/");
  };

  return (
    <>
      <div className="Checkout">
        <span onClick={goBack} className="Go-back">
          Go Back
        </span>

        <div className="UserInfo">
          <form ref={formRef} className={`Form${submitAttempted ? " submitted" : ""}`} noValidate>
            <h2 className="h1">Checkout</h2>
            <h4 className="Details">Billing Details</h4>
            <div className="Input3">
              <div className="Tp2">
                <div>
                  <div className="ErrorName">
                    <label htmlFor="name" className={formErrors.name ? "label-error" : ""}>Name</label>
                    {formErrors.name && <span className="FieldError">{formErrors.name}</span>}
                  </div>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Alexei Ward"
                    required
                    className={formErrors.name ? "input-error" : ""}
                  />
                </div>
                <div>
                  <div className="ErrorName">
                    <label htmlFor="email" className={formErrors.email ? "label-error" : ""}>Email Address</label>
                    {formErrors.email && <span className="FieldError">{formErrors.email}</span>}
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="alexei@mail.com"
                    required
                    className={formErrors.email ? "input-error" : ""}
                  />
                </div>
                </div>
                <div>
                  <div className="ErrorName2">
                  <label htmlFor="phone" className={formErrors.phone ? "label-error" : ""}>Phone Number</label>
                  {formErrors.phone && <span className="FieldError">{formErrors.phone}</span>}
                </div>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 202-555-0136"
                  required
                  className={formErrors.phone ? "input-error" : ""}
                />
              </div>
            </div>
            <h4 className="Details">Shipping Info</h4>
            <div>
              <div className="ErrorName3" style={{marginLeft: "30px"}}>
                <label htmlFor="address" className={formErrors.address ? "label-error" : ""}>
                  Address
                </label>
                {formErrors.address && <span className="FieldError">{formErrors.address}</span>}
              </div>
              <input
                style={{width: "90%"}}
                type="text"
                id="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="1137 Williams Avenue"
                className={`leftOut ${formErrors.address ? "input-error" : ""}`}
                required
              />
            </div>
            <div className="Input3">
              <div className="Tp2">
                    <div>
                    <div className="ErrorName">
                      <label htmlFor="zipCode" className={formErrors.zipCode ? "label-error" : ""}>ZIP Code</label>
                      {formErrors.zipCode && <span className="FieldError">{formErrors.zipCode}</span>}
                    </div>
                    <input
                      type="text"
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="10001"
                      required
                      className={formErrors.zipCode ? "input-error" : ""}
                    />
                  </div>
                  <div>
                    <div className="ErrorName">
                      <label htmlFor="city" className={formErrors.city ? "label-error" : ""}>City</label>
                      {formErrors.city && <span className="FieldError">{formErrors.city}</span>}
                    </div>
                    <input
                      type="text"
                      id="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="New York"
                      required
                      className={formErrors.city ? "input-error" : ""}
                    />
                  </div>
              </div>
              <div>
                <div className="ErrorName2">
                  <label htmlFor="country" className={formErrors.country ? "label-error" : ""}>Country</label>
                  {formErrors.country && <span className="FieldError">{formErrors.country}</span>}
                </div>
                <input
                  type="text"
                  id="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder="United States"
                  required
                  className={formErrors.country ? "input-error" : ""}
                />
              </div>
            </div>
            <h4 className="Details">Payment Details</h4>
            <div className="Pay">
              <div className="Payment">
                <label htmlFor="Payment">Payment Method</label>
                <div>
                  <div>
                    <label htmlFor="eMoney">e-Money</label>
                    <input
                      type="radio"
                      id="eMoney"
                      name="payment"
                      value="eMoney"
                      checked={!isDeliveryCashSelected}
                      onChange={() => setIsDeliveryCashSelected(false)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cash">Cash on Delivery</label>
                    <input
                      type="radio"
                      id="cash"
                      name="payment"
                      value="cash"
                      checked={isDeliveryCashSelected}
                      onChange={() => setIsDeliveryCashSelected(true)}
                      required
                    />
                  </div>
                </div>
              </div>
              {!isDeliveryCashSelected ? (
                <div className="Tp2" style={{ marginLeft: "30px" }}>
                  <div>
                    <div className="ErrorName">
                      <label htmlFor="eMoneyNumber" className={formErrors.eMoneyNumber ? "label-error" : ""}>e-Money Number</label>
                      {formErrors.eMoneyNumber && <span className="FieldError" style={{ margin: 0, whiteSpace: "nowrap" }}>{formErrors.eMoneyNumber}</span>}
                    </div>
                    <input
                      type="text"
                      id="eMoneyNumber"
                      value={formData.eMoneyNumber}
                      onChange={handleInputChange}
                      placeholder="238521993"
                      required
                      className={formErrors.eMoneyNumber ? "input-error" : ""}
                    />
                  </div>
                  <div>
                    <div className="ErrorName">
                      <label htmlFor="eMoneyPin" className={formErrors.eMoneyPin ? "label-error" : ""}>e-Money PIN</label>
                      {formErrors.eMoneyPin && <span className="FieldError" style={{ margin: 0, whiteSpace: "nowrap" }}>{formErrors.eMoneyPin}</span>}
                    </div>
                    <input
                      type="text"
                      id="eMoneyPin"
                      value={formData.eMoneyPin}
                      onChange={handleInputChange}
                      placeholder="6891"
                      required
                      className={formErrors.eMoneyPin ? "input-error" : ""}
                    />
                  </div>
                </div>
              ) : (
                <div className="Cash">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M42.2812 8.4375H46.5938C47.3704 8.4375 48 9.06713 48 9.84375C48 10.6204 47.3704 11.25 46.5938 11.25H45.0938V23.9062C45.0938 24.6829 44.4641 25.3125 43.6875 25.3125H33.8438V40.9688C33.8438 41.7454 33.2141 42.375 32.4375 42.375H25.0773C24.4239 45.5805 21.5831 48 18.1875 48H1.40625C0.629625 48 0 47.3704 0 46.5938C0 45.8171 0.629625 45.1875 1.40625 45.1875H18.1875C20.021 45.1875 21.585 44.012 22.1653 42.375H8.4375C7.66087 42.375 7.03125 41.7454 7.03125 40.9688C7.03125 40.1921 7.66087 39.5625 8.4375 39.5625H12.5625C13.3379 39.5625 13.9688 38.9317 13.9688 38.1562C13.9688 37.3808 13.3379 36.75 12.5625 36.75H9.43444C6.87619 36.75 4.37297 37.6373 2.38575 39.2485C1.78247 39.7376 0.896906 39.6454 0.407719 39.0419C-0.0814688 38.4385 0.0110625 37.553 0.614344 37.0639C2.84203 35.2578 5.58806 34.1792 8.4375 33.9741V18.375C8.4375 17.5984 9.06713 16.9688 9.84375 16.9688H18.375V7.03125C18.375 6.25462 19.0046 5.625 19.7812 5.625H28.1223C31.9334 2.02078 36.9875 0 42.2641 0H46.5938C47.3704 0 48 0.629625 48 1.40625C48 2.18287 47.3704 2.8125 46.5938 2.8125H42.2642C38.805 2.8125 35.4975 3.79453 32.658 5.625H38.0625C38.8326 5.625 39.4688 6.25228 39.4688 7.03125C39.4688 7.52423 39.3372 7.69561 38.4891 8.80021C38.0648 9.3528 37.4613 10.1389 36.6052 11.3157C36.2039 11.8513 36.3433 12.6075 36.8974 12.9688C37.4088 13.3025 38.0923 13.1781 38.4534 12.6856L41.1473 9.01219C41.4121 8.65088 41.8333 8.4375 42.2812 8.4375ZM32.4375 16.9688C32.9273 16.9688 33.3582 17.2195 33.6099 17.5993C35.4415 15.9118 34.2652 12.7969 31.7344 12.7969C29.5943 12.7969 28.2687 15.1348 29.3533 16.9688H32.4375ZM21.1875 8.4375H35.2472C35.0152 8.75898 34.8251 9.00687 34.6644 9.21646C34.3106 9.67792 34.0992 9.95371 33.896 10.4204C29.6796 8.64131 25.1696 12.4771 26.337 16.9688H21.1875V8.4375ZM22.5938 25.4062V19.7812H19.7812V25.4062H22.5938ZM31.0312 39.5625H16.5403C17.5098 36.8283 15.4711 33.9375 12.5625 33.9375H11.25V19.7812H16.9688V26.8125C16.9688 27.5891 17.5984 28.2188 18.375 28.2188H24C24.7766 28.2188 25.4062 27.5891 25.4062 26.8125V19.7812H31.0312V39.5625ZM33.8438 20.7288V22.5H42.2812V12.2217L40.7213 14.3488C39.9301 15.4278 38.6519 16.0371 37.2972 15.9602C37.1467 18.1043 35.7894 19.9393 33.8438 20.7288Z"
                      fill="#D87D4A"
                    />
                  </svg>
                  <span className="CashOnDel">
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery <br /> courier arrives at your residence.
                    Just make sure your address is correct so <br /> that your
                    order will not be cancelled.
                  </span>
                </div>
              )}
            </div>
          </form>
          <div className="Tot">
            <h2 className="h22" style={{ marginRight: "200px" }}>
              <strong>Summary</strong>
            </h2>
            <ul className="AddedPr">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <li key={item.id} className="prs">
                    <div className="l">
                      <div className="smallImg">
                        <div className="img-box">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div>
                          <h5 className="h4">{item.name}</h5>
                          <span className="price2">{item.price}</span>
                        </div>
                      </div>
                      <div className="count2">
                        <span>x{item.quantity}</span>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <li
                  style={{
                    padding: "20px",
                    textAlign: "center",
                    color: "#999",
                  }}
                >
                  Cart is empty
                </li>
              )}
            </ul>
            <div className="checkNtotal">
              <div>
                <span className="Span">Total</span>
                <span className="price2">
                  $
                  {cartItems
                    .reduce((total, item) => {
                      const price = parseInt(item.price.replace(/[^0-9]/g, ""));
                      return total + price * item.quantity;
                    }, 0)
                    .toLocaleString()}
                </span>
              </div>
              <div>
                <span className="Span">Shipping</span>
                <span className="price2">$50</span>
              </div>
              <div>
                <span className="Span">VAT (INCLUDED)</span>
                <span className="price2">$1,079</span>
              </div>
              <div>
                <span className="Span">Grand Total</span>
                <span className="totalPrice">
                  $
                  {(
                    cartItems.reduce((total, item) => {
                      const price = parseInt(item.price.replace(/[^0-9]/g, ""));
                      return total + price * item.quantity;
                    }, 0) +
                    50 +
                    1079
                  ).toLocaleString()}
                </span>
              </div>
              <button
                type="button"
                className="Product-view-btn"
                style={{ width: "calc(100% - 60px)", marginLeft: "30px", marginRight: "30px" }}
                onClick={handleContinuePay}
              >
                Continue & Pay
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hidden"
        id="Bg"
        onClick={() => setOpenCheckout(false)}
      ></div>
      <div className={OpenCheckout ? "ThankU" : "hidden"} id="ThankU">
    <div className="Stretch">
      <div className="Ball">
        <svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.41406 10.4658L8.16558 17.2173L23.9687 1.41418" stroke="white" strokeWidth="4" />
        </svg>
      </div>
      <h2 className="h1">THANK YOU <br /> FOR YOUR ORDER</h2>
      <span className="Span" style={{ fontSize: "15px", textTransform: "capitalize" }}>
        You will receive an email confirmation shortly.
      </span>
    </div>

    <div className="TotNPro">
      <div className="AddedPr2">
        <div className="ItemsWrapper">
          <div className="Items">
            {visibleItems.map((item) => (
              <li key={item.id} className="prs">
                <div className="l">
                  <div className="smallImg">
                    <div className="img-box">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div>
                      <h5 className="h4">{item.name}</h5>
                      <span className="price">{item.price}</span>
                    </div>
                  </div>
                  <div className="count2">
                    <span>x{item.quantity}</span>
                  </div>
                </div>
              </li>
            ))}
          </div>
          {cartItems.length > 1 && (
            <div className="view-toggle" onClick={() => setShowAll(!showAll)} style={{textAlign: 'center', cursor: 'pointer', padding: '12px 0', borderTop: '1px solid #f1f1f1'}}>
              <span className="Span" style={{fontSize: '12px', fontWeight: 'bold', color: 'rgba(0,0,0,0.5)'}}>
                {showAll 
                  ? "View less" 
                  : `and ${cartItems.length - 1} other item(s)`}
              </span>
            </div>
          )}
        </div>

        <div className="GrTo" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span className="Span" style={{ color: 'rgba(255,255,255,0.5)' }}>GRAND TOTAL</span>
          <span className="totalPrice2">
            $
            {(
              cartItems.reduce((total, item) => {
                const price = parseInt(item.price.replace(/[^0-9]/g, ""));
                return total + price * item.quantity;
              }, 0) + 50 + 1079
            ).toLocaleString()}
          </span>
        </div>
      </div>

      <button
        className="Product-view-btn"
        style={{ width: "100%", marginTop: '24px' }}
        onClick={() => {
          setOpenCheckout(false);
          Backhome();
        }}
      >
        BACK TO HOME
      </button>
    </div>
  </div>
  </>
  );
};

export default Checkout;
