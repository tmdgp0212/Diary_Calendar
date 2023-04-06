import styled from "styled-components";
export const Wrapper = styled.div`
  @font-face {
    font-family: "HallymGothic-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2204@1.0/HallymGothic-Regular.woff2")
      format("woff2");
    font-weight: 400;
    font-style: normal;
  }

  width: 80vw;
  max-width: 740px;
  max-height: 90vh;
  font-family: "HallymGothic-Regular";

  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;
