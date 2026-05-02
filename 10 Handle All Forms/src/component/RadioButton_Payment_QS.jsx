import React, { useState } from "react";

const RadioButton_Payment_QS = () => {
  const [payments, setPayments] = useState("UPI");

  const payment = [
    { id: "UPI", Info: "UPI payment" },
    { id: "CARD", Info: "CARD Pament" },
    { id: "COD", Info: "CASH On Devery PayMent" },
  ];

  console.log(payments);

  console.log(payment.find((obj) => obj.id === payments).Info);

  return (
    <div>
      {payment.map((items) => {
        return (
          <div>
            <label htmlFor={items.id}>
              <input
                id={items.id}
                type="radio"
                name="paymentes"
                value={items.id}
                checked={payments === items.id}
                onChange={(e) => setPayments(e.target.value)}
              />
              {items.id}
            </label>
          </div>
        );
      })}

      <p>Mode Payment : {payments}</p>
      <p>Details : {payment.find((obj) => obj.id === payments).Info}</p>
    </div>
  );
};

export default RadioButton_Payment_QS;
