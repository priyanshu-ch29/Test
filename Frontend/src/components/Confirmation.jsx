import React from "react";

const Confirmation = ({ paymentDetails, sessionDetails }) => {
  return (
    <div>
      <h2>Confirmation</h2>
      <p>Mentor: {sessionDetails.mentor.name}</p>
      <p>Time Slot: {sessionDetails.selectedTimeSlot.time}</p>
      <p>Duration: {sessionDetails.duration} mins</p>
      <p>Payment Status: {paymentDetails.status}</p>
    </div>
  );
};

export default Confirmation;
