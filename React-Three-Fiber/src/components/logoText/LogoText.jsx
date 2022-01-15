import React from "react";
import styled from "styled-components";


const Container = styled.div`
  text-align: center;
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: 0xffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4%;

`
const Logo = styled.h1`
  text-align: center;
  margin-top: 1em;
  color: #fff;
  font-weight: 800;
  font-size: 30px;
`;

const Slogan = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 600;
  font-size: 25px;
  margin-top: 10px;
`;

const Paragraph = styled.p`
  margin: 0;
  margin-top: 3em;
  margin-bottom: 2em;
  color: #fff;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 500;
  max-width: 30%;
  text-align: center;
`;

const Button = styled.button`
  background: rgb(37,130,128);
  background: linear-gradient(90deg, rgba(37,130,128,1) 0%, rgba(76,175,80,1) 100%); 
  border: none;
  color: white;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 12px;
  border: 2px solid #00FF00;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  
`




export function LogoText() {
  return (
    <Container>
      <Logo>Templates for Spline.Design</Logo>
      <Slogan>React Three Fiber</Slogan>

      <Paragraph>
        Easily add your <br />
        Spline Design creations<br />
        to this template<br />
        &amp; create your own website!
      </Paragraph>
      <Button as="a" href="/guide">Guide</Button>


    </Container>
  );
}
export default LogoText;
