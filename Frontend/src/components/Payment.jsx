import React from "react";
import { makePayment } from "../Api";

const Payment = ({ sessionDetails, setPaymentDetails, nextStep, prevStep }) => {
  const handlePayment = () => {
    const paymentData = {
      amount: sessionDetails.duration * 1000,
      mentorId: sessionDetails.mentor._id,
      studentId: 1,
      sessionDuration: sessionDetails.duration,
    };
    makePayment(paymentData).then((response) => {
      setPaymentDetails(response.data);
      nextStep();
    });
  };

  return (
    <div className=" flex justify-center items-center h-dvh flex-col gap-4 bg-gradient-to-b from-white to-gray-500">
      <h2 className=" text-3xl font-semibold animate-pulse">Payment</h2>
      <p className="text-3xl font-semibold animate-pulse">
        Total: ₹{sessionDetails.duration * 1000}
      </p>
      <div className=" flex gap-5 font-semibold ">
        <button
          className="w-28 rounded bg-black text-white border border-transparent shadow-xl"
          onClick={prevStep}
        >
          Back
        </button>
        <button
          className="w-28 rounded p-2 bg-black text-white border border-transparent shadow-xl"
          onClick={handlePayment}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;
