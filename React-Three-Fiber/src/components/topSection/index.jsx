import React from "react";
import styled from "styled-components";

const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: 0xffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 13%;
  z-index: 99;
`;

const Logo = styled.h1`
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

const UserButton = styled.button`
  display: inline-block;
  left: -20px;
  outline: none;
  border: none;
  background-color: silver;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  border-radius: 8px;
  padding: 2px 2em;
  margin-top: 3em;
  cursor: pointer;
  border: 4px solid transparent;
  transition: all 300ms ease-in-out;
  margin: 0.5em 1em;
  padding: 0.25em 1em;




  &:hover {
    background-color: transparent;
    border: 4px solid #27b927;
  }
`;

const DevButton = styled.button`
  display: inline-block;
  outline: none;
  border: none;
  background-color: silver;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  border-radius: 8px;
  padding: 2px 2em;
  margin-top: 3em;
  cursor: pointer;
  border: 4px solid transparent;
  transition: all 300ms ease-in-out;
  margin: 0.5em 1em;
  padding: 0.25em 1em;



  &:hover {
    background-color: transparent;
    border: 4px solid #27b927;
  }
`;

const ProjectManagementButton = styled.button`
  display: inline-block;
  outline: none;
  border: none;
  background-color: silver;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  border-radius: 8px;
  padding: 2px 2em;
  margin-top: 3em;
  cursor: pointer;
  border: 4px solid transparent;
  transition: all 300ms ease-in-out;
  margin: 0.5em 1em;
  padding: 0.25em 1em;




  &:hover {
    background-color: transparent;
    border: 4px solid #27b927;
  }
`;

const OnboardingButton = styled.button`
  display: inline-block;
  outline: none;
  border: none;
  background-color: silver;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  border-radius: 8px;
  padding: 2px 2em;
  margin-top: 3em;
  cursor: pointer;
  border: 4px solid transparent;
  transition: all 300ms ease-in-out;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  &:hover {
    background-color: transparent;
    border: 4px solid #27b927;
  }
`;

const Container = styled.div`
  text-align: center;
`

export function TopSection() {
  return (
    <TopSectionContainer>
      <Logo>Welcome to Phylogeny Explorer Project</Logo>
      <Slogan>Users & Developers Portal</Slogan>

      <Paragraph>
        Welcome to the Phylogeny Explorer Project. 
        Here is a compilation of related User and Developer documentation.
        This resource contains Project Management Overview, Onboarding, Documentation, 
        as well as a friendly interface for understanding the project at a high level.
      </Paragraph>

      {/* <Container>
      <UserButton><a href="/Users">Users</a></UserButton>
      <DevButton><a href="/Developers">Developers</a></DevButton>
      </Container>
      <Container>
        <ProjectManagementButton><a href="/ProjectManagement">Project Management</a></ProjectManagementButton>
        <OnboardingButton><a href="/Onboarding">Onboarding</a></OnboardingButton>
      </Container> */}
    </TopSectionContainer>
  );
}
