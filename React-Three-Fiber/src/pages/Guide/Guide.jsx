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
         
       <iframe title="demo3Drocks" src='https://my.spline.design/3drockscopy-88a53e3aa63d28c6741fc5f7e255e60f/' frameborder='10' width='100%' height='100%'></iframe>         </Suspense>
         </Blob>
         <iframe title="demo3Dlathegradients"  src='https://my.spline.design/lathegradientscopy-032a113e7522a6478c049009573fd962/' frameborder='10' width='100%' height='100%'></iframe>

              </CanvasContainer>
  );
}

export default Guide;
