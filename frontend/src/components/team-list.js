import React from "react";
import Shortid from "shortid";
import styled from "styled-components";

export const TeamList = props => {
  const getSpriteSrc = member =>
    `https://img.pokemondb.net/sprites/black-white/anim/normal/${member}.gif`;
  return (
    <div>
      <h3>My Team:</h3>
      {props.team.length < 1 ? <p>You haven't added any Pokemon yet!</p> : ""}
      <div>
        {props.team.map(member => (
          <li key={Shortid.generate()}>
            <div>
              <div src={getSpriteSrc(member)} alt={member} />
              {member}
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};



export default TeamList;
