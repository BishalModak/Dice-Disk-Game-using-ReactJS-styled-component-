import React from "react";
import styled from "styled-components";
import { Button } from "../Styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <ImageWrapper>
        <Image src="/images/dise.webp" alt="" />
      </ImageWrapper>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100%;
  height: 650px;
  object-fit: contain;
`;
