
import React from "react";
// import ReactDOM from 'react-dom';
import styled from "styled-components";



const Container = styled.div`
  text-align: left;
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
  z-index: 99;
`
const Logo = styled.h1`
  text-align: center;
  margin: 0;
  color: #fff;
  font-weight: 800;
  font-size: 80px;
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
  font-size: 26px;
  line-height: 1.5;
  font-weight: 500;
  max-width: 30%;
  text-align: center;
`;



export function LogoText() {
    return (
      <Container>
        <Logo>Welcome to Phylogeny Explorer Project</Logo>
        <Slogan>Knowing our future by exploring the past</Slogan>
  
        <Paragraph>
          3D Logo<br />
          Prototype<br />
          Thoughts &amp; Rumenations<br /> 
          Ideas!
        </Paragraph>
  
  
      </Container>
    );
  }
  export default LogoText;


        /* <Container>
        <UserButton><a href="/Users">Users</a></UserButton>
        <DevButton><a href="/Developers">Developers</a></DevButton>
        </Container>
        <Container>
          <ProjectManagementButton><a href="/ProjectManagement">Project Management</a></ProjectManagementButton>
          <OnboardingButton><a href="/Onboarding">Onboarding</a></OnboardingButton>
        </Container> */