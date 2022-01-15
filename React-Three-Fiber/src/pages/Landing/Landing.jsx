import { React } from "react"

import styled from "styled-components";

import { Earth } from "../../components/earth";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";


const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;

`;

function Landing() {
  return (
    <CanvasContainer>

      <Canvas>
        <Suspense fallback={null}>
          <Earth />

        </Suspense>
      </Canvas>
    </CanvasContainer>
    
  );
}

export default Landing;
