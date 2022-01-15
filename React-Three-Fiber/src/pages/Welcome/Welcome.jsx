import { React } from "react";
import styled from "styled-components";
import { Suspense } from "react";
import { LogoText } from "../../components/logoText/LogoText";


const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;


function Welcome() {
  return (
    <CanvasContainer>

      <Suspense fallback={null}>
 
        <iframe title="clickonrefresh-logo" src='https://my.spline.design/clickonrefreshlogocopy-2ca4b4cce56ee0deb0383da25aa6a883/' frameborder='0' width='100%' height='100%'></iframe>
        <LogoText />
      </Suspense>

    </CanvasContainer>
  );
}

export default Welcome;
