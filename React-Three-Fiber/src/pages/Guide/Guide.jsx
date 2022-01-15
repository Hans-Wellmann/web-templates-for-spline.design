import { React } from "react";
import styled from "styled-components";
import { Suspense } from "react";
import { GuideText } from "../../components/guideText/GuideText";


const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Blob = styled.div`
  text-align: right;
  position: right;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background-color: 0xffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4%;
  z-index: 9999;
`

function Guide() {
  return (
    <CanvasContainer>
       

     
      <Blob>
       <Suspense fallback={null}>
       <GuideText />
         
       <iframe title="d" src='https://my.spline.design/clickonrefreshlogo-17d27ba558ec93e0e1d90ab794ce3d6b/' frameborder='0' width='100%' height='100%'></iframe>

          

         </Suspense>
         </Blob>

     </CanvasContainer>
  );
}

export default Guide;
