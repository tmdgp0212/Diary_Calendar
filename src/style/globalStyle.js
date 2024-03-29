import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
   margin: 0;
   padding: 0;
   border: 0;
   box-sizing: border-box;
   vertical-align: baseline;
   -webkit-text-size-adjust: none; /*세로모드에서 가로모드로 전환할때 텍스트가 약간 커지는 현상 방지*/
}
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
   display: block;
}
ul,ol,li {
   list-style: none;
}
a,a:link,a:hover,a:active,a:visited {
   color: #000;
   text-decoration: none;
}
i {
   font-style: normal;
   font-weight: normal;
}
img {
   display: block;
   border: 0;
}
button {
   display: block;
   cursor: pointer;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
   overflow-y: scroll;
   height: 100vh;
   color: #222;
   font-size: 0.8em;
   font-family: 'Nanum Gothic', 돋움, dotum, 굴림, gulim, sans-serif, Helvetica, AppleGothic;
   line-height: 1.25em;
   background-color: #ecedf1;
}

`;
