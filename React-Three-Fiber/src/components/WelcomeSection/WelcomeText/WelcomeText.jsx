
import React from "react";
// import ReactDOM from 'react-dom';
import styled from "styled-components";

// import { Loader } from '@react-three/drei';


// import { DinoRoutes } from '../WelcomeDino/mdx-routes.js';


// Inspiration => https://dribbble.com/shots/4541416-Nike-Vapormax-Product-Page-Motion/attachments/4541416-Nike-Vapormax-Product-Page-Motion?mode=media

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
  font-weight: 700;
  font-size: 30px;
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


export function WelcomeText() {
    return (
      <Container>
        <Logo>Welcome to Phylogeny Explorer Project</Logo>
        <Slogan>Knowing our future by exploring the past</Slogan>
  
        <Paragraph>
          User, Developer.<br />
          Project Management<br />
          Onboarding &amp; Documentation<br /> 
          How to use this project.
        </Paragraph>
  
  
      </Container>
    );
  }
  export default WelcomeText;


        /* <Container>
        <UserButton><a href="/Users">Users</a></UserButton>
        <DevButton><a href="/Developers">Developers</a></DevButton>
        </Container>
        <Container>
          <ProjectManagementButton><a href="/ProjectManagement">Project Management</a></ProjectManagementButton>
          <OnboardingButton><a href="/Onboarding">Onboarding</a></OnboardingButton>
        </Container> */