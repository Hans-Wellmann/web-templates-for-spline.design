import "./App.css";
import styled from "styled-components";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer"

import { Landing } from "./pages/Landing";
import { Welcome } from "./pages/Welcome";
import { Users } from "./pages/Users";
import { Developers } from "./pages/Developers";
import { ProjectManagement } from "./pages/ProjectManagement";
import { Onboarding } from "./pages/Onboarding";


const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <CanvasContainer>

      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/welcome" exact component={Welcome} />
          <Route path="/users" exact component={Users} />
          <Route path="/developers" exact component={Developers} />
          <Route path="/projectmanagement" exact component={ProjectManagement} />
          <Route path="/onboarding" exact component={Onboarding} />
        </Switch>
        
      </Router>
      <Footer />
    </CanvasContainer>
  );
}

export default App;
