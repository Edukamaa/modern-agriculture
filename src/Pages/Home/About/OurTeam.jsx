import React, { useState } from "react";
import "./OurTeam.css";

const teamMembers = [
  {
    name: "Edward Kamau Kariuki",
    role: "Managing Director",
    bio: "Edward has over 10 years of experience in ICT, networking, and agribusiness solutions. He founded Modern Agriculture with a mission to transform agribusiness through technology and smart farming solutions.",
    isDirector: true,
  },
  {
    name: "Shiruu Mwangi",
    role: "Non-executive Director",
    bio: "Shiruu specializes in corporate governance and strategic partnerships. She ensures compliance, transparency, and drives growth through effective board management.",
  },
  {
    name: "Janet Wanjiru",
    role: "Senior Operations Manager",
    bio: "Janet leads operational efficiency within Modern Agriculture. She focuses on process improvement, team leadership, and ensuring timely project delivery.",
  },
  {
    name: "George Kanyeki",
    role: "Consulting Manager",
    bio: "George has extensive experience in consulting for agribusinesses across East Africa, guiding businesses to investment readiness.",
  },
  {
    name: "Mercy Ndunge",
    role: "Senior Agribusiness Consultant",
    bio: "Mercy provides expert advice in crop and livestock value chains, helping farmers scale profitably.",
  },
  {
    name: "Brian Ndegwa",
    role: "Senior Agri Business Financial Consultant",
    bio: "Brian assists SMEs with financial structuring, risk analysis, and investment readiness programs.",
  },
];

const OurTeam = () => {
  const [openBio, setOpenBio] = useState(null);

  const toggleBio = (index) => {
    setOpenBio(openBio === index ? null : index);
  };

  return (
    <div className="team-container">
      <h2 className="team-title">Management Team</h2>
      <p className="team-intro">
        Our staff and expert consultants have extensive experience in
        agribusiness investment and financial advisory. Feel free to contact us
        today to discuss how we can help you scale your agribusiness.
      </p>

      {/* Director Section */}
      <div className="director-card">
        {teamMembers
          .filter((member) => member.isDirector)
          .map((member, index) => (
            <div key={index} className="team-card director">
              <h3>{member.name}</h3>
              <h4>{member.role}</h4>
              <button onClick={() => toggleBio(index)}>
                {openBio === index ? "Hide Bio" : "Read Bio"}
              </button>
              {openBio === index && <p className="bio">{member.bio}</p>}
            </div>
          ))}
      </div>

      {/* Other Team Members */}
      <div className="team-grid">
        {teamMembers
          .filter((member) => !member.isDirector)
          .map((member, index) => (
            <div key={index} className="team-card">
              <h3>{member.name}</h3>
              <h4>{member.role}</h4>
              <button onClick={() => toggleBio(index + 1)}>
                {openBio === index + 1 ? "Hide Bio" : "Read Bio"}
              </button>
              {openBio === index + 1 && <p className="bio">{member.bio}</p>}
            </div>
          ))}
      </div>
    </div>
  );
};

export default OurTeam;
