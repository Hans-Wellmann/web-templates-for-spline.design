import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import styled from "styled-components";



const Model = () => {
  const gltf = useLoader(GLTFLoader, "triceratops/scene.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={0.6}  />
    </>
  );
};

const Container = styled.div`
 
  position: right;
  width: 100%;
  height: 100%;

`



export default function WelcomeDino() {
  
  return (
    <Container>
      <Canvas>
        <Suspense fallback={null}>
          <Model 
          scenePath="triceratops/scene.gltf"
          position={[35, 17, 17]}
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
          <Environment 
          preset="forest" 
          background
          />
        </Suspense>
      </Canvas>
      </Container>
  );
}



