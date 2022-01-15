import React from 'react';

import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import styled from "styled-components";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "trex/scene.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={0.8} />
    </>
  );
};

const Container = styled.div`
  text-align: right;
  position: right;
  width: 50%;
  height: 50%;
 
`

export default function SmallCreature() {
  return (
    <Container>
      
      <Canvas>
        <Suspense fallback={null}>
          <Model 
          scenePath="trex/scene.gltf"
          position={[5, 5, 1]}
          rotation={[0.025, 0.025, 0]}
          />
          <OrbitControls 
           enableZoom={true}
           enablePan={true}
           enableRotate={true}
           zoomSpeed={0.6}
           panSpeed={0.5}
           rotateSpeed={0.4}
           />
          <Environment  />
        </Suspense>
      </Canvas>
      </Container>
  );
}

/**
 * A smallcreature model
 */
// const SmallCreature = () => {
//   return (
//     <CanvasContainer
//       ml={5}
//       height={100}
//       width={100}
//       position={[0, 20, 20]}
//       fov={50}
//     >
//       <Model
//         scenePath="trex/scene.gltf"
//         position={[0, 17, 17]}
//         rotation={[0.025, 0.025, 0]}
//       />
//     </CanvasContainer>
//   );
// };

// export default SmallCreature;
