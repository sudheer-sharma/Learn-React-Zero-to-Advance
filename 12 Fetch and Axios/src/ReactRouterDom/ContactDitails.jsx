import React from "react";
import { useParams } from "react-router-dom";

const ContactDitails = () => {
  const params = useParams();

  return (
    <div>
      <h1>Contact Details : {params.id}</h1>
    </div>
  );
};

export default ContactDitails;
