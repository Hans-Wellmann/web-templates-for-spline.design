import { React } from "react";
import styled from "styled-components";
// import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
// import { Earth } from "../../components/earth";
// import { TopSection } from "../../components/topSection";
import { WelcomeText } from "../../components/WelcomeSection/WelcomeText/WelcomeText";
import {  WelcomeDino, } from "../../components/WelcomeSection/WelcomeDino";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const blob = styled.div`
  text-align: right;
  position: right;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: 0xffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4%;
  z-index: 9999;
`

function Welcome() {
  return (
    <CanvasContainer>
       
      {/* <Canvas> */}
      <WelcomeText />
      <blob>
       <Suspense fallback={null}>

         <WelcomeDino />
         
         
          

         </Suspense>
         </blob>
      {/* </Canvas> */}
     </CanvasContainer>
  );
}

export default Welcome;
