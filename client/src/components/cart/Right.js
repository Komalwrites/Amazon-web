import React from 'react';
import { useEffect,useState } from 'react';

const Right = ({item}) => {
  
    const [price, setPrice] = useState(0);
  
      useEffect(() => {
          totalAmount();
      }, [item]);
  
    const totalAmount = () => {
      let price = 0
      item.map((item) => {
          price += item.price.cost
      });
      setPrice(price)
  }

  return (
    <div className="right-cart">
        <img src="/Images/amazon-purchase-protection.png" alt="rightimg" />
        <div className="right-cost">
            <p>Your order is eligible for FREE Delivery. <br />
                <span style={{ color: "#565959" }}> Select this option at checkout. Details</span></p>
            <h3>Subtotal ({item.length} items): <span style={{ fontWeight: "700" }}> ${Math.round(price)}.00</span></h3>
            <button className="checkout-btn" >Proceed to checkout</button>
            <div className="emi">
                Emi available
            </div>
            <span className=''> Your order qualifies for EMI with valid credit cards (not available on purchase of Gold,
                Jewelry, Gift cards and Amazon pay balance top up). Learn more</span>
        </div>
    </div>
  )
}

export default Right
