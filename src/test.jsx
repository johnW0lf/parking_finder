import React from "react";

const GooglePayButton = ({ amnt }) => {
  const handleClick = () => {
    // Customize this part
    const upiID = "ronsinoy2004@okicici";
    const payeeName = "parkingAI";
    const amount = amnt;
    const note = "Payment for service";

    const url = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;

    // Redirect to UPI payment
    window.location.href = url;
  };

  return <button onClick={handleClick}>Pay</button>;
};

export default GooglePayButton;
