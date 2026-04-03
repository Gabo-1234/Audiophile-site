import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundColor = "#f1f1f1";

    return () => {
      document.body.style.backgroundColor = "#000";
    };
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="Checkout">
        <span onClick={goBack} className="Go-back">
          Go Back
        </span>

        <div className="UserInfo">
          <form className="Form">
            <h2 className="h1">Checkout</h2>
            <h4 className="Details">Billing Details</h4>
            <div className="Input3">
              <div className="Tp2">
                <div>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Alexei Ward" required/>
                </div>
                <div>
                  <label htmlFor="email">Email Address</label>
                  <input type="text" id="email" placeholder="alexei@mail.com" required/>
                </div>
              </div>
              <label htmlFor="phone">Phone Number</label>
              <input type="text" id="phone" placeholder="+1 202-555-0136" required />
            </div>
            <h4 className="Details">Shipping Info</h4>
            <label htmlFor="address" style={{marginLeft: "30px"}}>Address</label>
            <input
              type="text"
              id="address"
              placeholder="1137 Williams Avenue"
              className="leftOut"
              required
            />
            <div className="Input3">
              <div className="Tp2">
                <div>
                  <label htmlFor="Zip">ZIP Code</label>
                  <input type="text" id="Zip" placeholder="10001" required />
                </div>
                <div>
                  <label htmlFor="city">City</label>
                  <input type="text" id="city" placeholder="New York" required/>
                </div>
              </div>
              <label htmlFor="Country">Country</label>
              <input type="text" id="Country" placeholder="United States" required />
            </div>
            <h4 className="Details">Payment Details</h4>
           <div className="Pay">
            <div className="Payment">
                <label htmlFor="Payment">Payment Method</label>
             <div>
                <div>
                 <label htmlFor="eMoney">e-Money</label>
              <input type="radio" id="eMoney" name="payment" value="eMoney" checked required/>
             </div>
              <div>
                <label htmlFor="Cash on Delivery">Cash on Delivery</label>
              <input
                type="radio"
                id="Cash on Delivery"
                name="payment"
                value="cash"
                required
              />
              </div>
             </div>
              </div>
              <div className="Tp2" style={{marginLeft: "30px"}}>
                <div>
                    <label htmlFor="eMoneyNumber">e-Money Number</label>
                <input type="text" id="eMoneyNumber" placeholder="238521993" required/>
               </div> <div>
                    <label htmlFor="eMoneyPin">e-Money PIN</label>
                <input type="text" id="eMoneyPin" placeholder="6891" required />           
                </div>
              </div>
           </div>
          </form>
          <div className="Tot">a</div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
