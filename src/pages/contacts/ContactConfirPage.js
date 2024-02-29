import React from "react";
import appStyles from "../../App.module.css";


const ContactConfirPage = () => {

  return (
    <div
      className={`${appStyles.Content} p-4 mt-2 text-center d-flex flex-column align-items-center`}
    >
      <h1>Thank you for getting in Contact with us!</h1>
      <h3>We have received your message.</h3>
      <h5>A member of staff will be in Contact soon.</h5>
    </div>
  );
};

export default ContactConfirPage;