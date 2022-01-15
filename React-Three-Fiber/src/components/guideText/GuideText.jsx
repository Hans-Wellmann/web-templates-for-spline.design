import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: left;
  position: absolute;
  width: 50%;
  height: 100%;
  color: black;
  top: 0;
  left: 0;
  background-color: 0xffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4%;
  z-index: 99;
`
const Title = styled.h1`
  text-align: center;
  margin-top: 1em;
  margin-bottom: 2em;
  color: #fff;
  font-weight: 800;
  font-size: 20px;
`;

// const Slogan = styled.h4`
//   margin: 0;
//   color: #fff;
//   font-weight: 600;
//   font-size: 18px;
//   margin-top: 10px;
// `;

const Paragraph = styled.p`
  margin: 0;
  margin-top: 1em;
  margin-bottom: 1em;
  color: #fff;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  max-width: 40%;
  text-align: center;
`;



export function GuideText() {
    return (
      <Container>
        <Title>How to use this template</Title>
        {/* <Slogan>React Three Fiber </Slogan> */}
  
        <Paragraph>
          Export your final Spline.Design creation to a public URL.
        </Paragraph>
  
        <Paragraph>
        Copy the embed link.
        </Paragraph>
  
        <Paragraph as="a" href="https://github.com/clickonrefresh/web-templates-for-spline.design">
        Clone this project and run.
        </Paragraph>
        <Paragraph>
        Navigate to /src/pages/Welcome and replace the iframe line with your embed link.
        </Paragraph>
  
  
      </Container>
    );
  }
  export default GuideText;