import React, { useState } from "react";
import MentorSelection from "../components/MentorSelection";
import ScheduleSession from "../components/ScheduleSession";
import Payment from "../components/Payment";
import Confirmation from "../components/Confirmation";

const StudentDashboard = () => {
  const [step, setStep] = useState(1);
  const [mentor, setMentor] = useState(null);
  const [sessionDetails, setSessionDetails] = useState({});
  const [paymentDetails, setPaymentDetails] = useState({});

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  switch (step) {
    case 1:
      return <MentorSelection nextStep={nextStep} setMentor={setMentor} />;
    case 2:
      return (
        <ScheduleSession
          nextStep={nextStep}
          prevStep={prevStep}
          mentor={mentor}
          setSessionDetails={setSessionDetails}
        />
      );
    case 3:
      return (
        <Payment
          nextStep={nextStep}
          prevStep={prevStep}
          sessionDetails={sessionDetails}
          setPaymentDetails={setPaymentDetails}
        />
      );
    case 4:
      return (
        <Confirmation
          paymentDetails={paymentDetails}
          sessionDetails={sessionDetails}
        />
      );
    default:
      return <h1>Unknown Step</h1>;
  }
};

export default StudentDashboard;
