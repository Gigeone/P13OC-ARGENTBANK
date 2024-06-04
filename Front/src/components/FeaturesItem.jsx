import React from "react";

const FeaturesItem = ({ icon, title, description }) => {
  return (
    <div className="feature-item">
      <img src={icon} alt="Feature Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeaturesItem;
