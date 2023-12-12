import React from "react";
const InfoCard = ({ sectionTitle, sectionDetails }) => {
  return (
    <div className="info-card">
      <h2 className="section-title">{sectionTitle}</h2>
      <h2 className="section-details">{sectionDetails}</h2>
    </div>
  );
};

export default InfoCard;
