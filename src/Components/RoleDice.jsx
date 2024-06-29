import React, { useState } from "react";
import styled from "styled-components";

const RoleDice = ({ roleDise, currentDise }) => {
  return (
    <DiseContainer>
      <div className="dise" onClick={roleDise}>
        <img src={`/images/dise/dice_${currentDise}.png`} alt="" />
      </div>
      <p>Click on Dice to roll</p>
    </DiseContainer>
  );
};

export default RoleDice;
const DiseContainer = styled.div`
  display: flex;
  margin-top: 48px;
  flex-direction: column;
  align-items: center;

  .dise {
    cursor: pointer;
  }
`;
