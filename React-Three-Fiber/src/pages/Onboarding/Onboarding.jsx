// import React from "react";

// function Onboarding() {
//   return (
//     <div className="onboarding">
//       <div class="container">
//         <div class="row align-items-center my-5">
//           <div class="col-lg-7">
//             <img
//               class="img-fluid rounded mb-4 mb-lg-0"
//               src="http://placehold.it/900x400"
//               alt=""
//             />
//           </div>
//           <div class="col-lg-5">
//             <h1 class="font-weight-light">Onboarding</h1>
//             <p>
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's standard dummy text
//               ever since the 1500s, when an unknown printer took a galley of
//               type and scrambled it to make a type specimen book.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import { React } from "react";
import styled from "styled-components";
// import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
// import { Earth } from "../../components/earth";
// import { TopSection } from "../../components/topSection";
import { LogoText } from "../../components/logo/logotext/LogoText";


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
  right: 0;
  background-color: 0xffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4%;
  z-index: 9999;
`

function Onboarding() {
  return (
    <CanvasContainer>
       
      {/* <Canvas> */}
     
      <blob>
       <Suspense fallback={null}>
       <LogoText />
         
       <iframe src='https://my.spline.design/clickonrefreshlogo-17d27ba558ec93e0e1d90ab794ce3d6b/' frameborder='0' width='100%' height='100%'></iframe>

          

         </Suspense>
         </blob>
      {/* </Canvas> */}
     </CanvasContainer>
  );
}

export default Onboarding;
