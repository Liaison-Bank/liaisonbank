import React from "react";
import Image from "next/image";

const TeamCard = ({ member }) => {
  return (
    <div className="team-card">
      <div className="team-card__image">
        <Image
          src={member.image}
          alt={member.name}
          width={220}
          height={260}
          className="img"
        />
      </div>

      <div className="team-card__info">
        <h4>{member.name}</h4>
        <p>{member.country}</p>
      </div>
    </div>
  );
};

export default function TeamGrid({ teamData = [] }) {
  return (
    <section className="team">
      <div className="team__wrapper">
        
        {/* Left Text Block */}
        <div className="team__text">
          <h2>
            CHOOSE <br />
            YOUR ARTISTS <br />
            LOCALLY <br />
            OR <br />
            GLOBALLY
          </h2>
        </div>

        {/* Team Grid */}
        <div className="team__grid">
          {teamData.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}