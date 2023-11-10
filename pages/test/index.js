import React, { useCallback, useEffect, useState } from "react";
import useRazorpay from "react-razorpay";
const Test = () => {
  const [orderId, setOrderId] = useState(null);
  const [Razorpay, isLoaded] = useRazorpay();

  const handlePayment = useCallback(async () => {
    const response = await fetch("http://localhost:3001/test", {
      method: "POST",
    });
    const order = await response.json();
    console.log("handlePayment order", order);
    const options = {
      // key: "YOUR_KEY_ID",
      order_id: order?.order_id,
      amount: order?.amount,
      currency: order?.current,
      name: "ChanreBookShop",
      description: "Test Transaction",
      image: "https://bookshop.assamtechnologies.com/logo.png",
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: "Test Name",
        email: "test@gmail.com",
        contact: "1234567890",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  useEffect(() => {
    if (isLoaded) {
      handlePayment();
    }
  }, [isLoaded, handlePayment]);
  return (
    <div>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Test;

// const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   useEffect(() => {
//     const Script = document.createElement("script");
//     //id should be same as given to form element
//     const Form = document.getElementById("donateForm");
//     Script.setAttribute(
//       "src",
//       "https://checkout.razorpay.com/v1/payment-button.js"
//     );
//     Script.setAttribute("data-payment_button_id", "YOUR ID");
//     if (Form) {
//       Form.appendChild(Script);
//     }
//   }, [mounted]);
// return mounted ? <form id="donateForm"></form> : null

//-------------------------------------------------------------
// const initializeRazorpay = () => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";

//       script.onload = () => {
//         resolve(true);
//       };
//       script.onerror = () => {
//         resolve(false);
//       };
//       document.body.appendChild(script);
//     });
//   };
// const makePayment = async () => {
//     const res = await initializeRazorpay();

//     if (!res) {
//       alert("Razorpay SDK Failed to load");
//       return;
//     }

//     // Make API call to the serverless API
//     const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
//       t.json()
//     );
//     console.log(data);
//     var options = {
//       key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
//       name: "Manu Arora Pvt Ltd",
//       currency: data.currency,
//       amount: data.amount,
//       order_id: data.id,
//       description: "Thankyou for your test donation",
//       image: "https://manuarora.in/logo.png",
//       handler: function (response) {
//         // Validate payment at server - using webhooks is a better idea.
//         alert(response.razorpay_payment_id);
//         alert(response.razorpay_order_id);
//         alert(response.razorpay_signature);
//       },
//       prefill: {
//         name: "Manu Arora",
//         email: "manuarorawork@gmail.com",
//         contact: "9999999999",
//       },
//     };

//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   }
