import styled from "styled-components";

export const DiaryContainer = styled.div`
  display: flex;
  flex-direction: column;

  > .diary {
    min-height: 50vh;
    margin-top: 20px;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 3px 15px 0 rgba(100, 100, 111, 0.3);

    > .title {
      padding: 20px;
      text-align: center;

      > h2 {
        font-size: 22px;
        word-wrap: break-word;
        word-break: keep-all;
      }

      > p {
        margin-top: 20px;
      }
    }

    > .text {
      @font-face {
        font-family: "LeeSeoyun";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/LeeSeoyun.woff")
          format("woff");
        font-weight: normal;
        font-style: normal;
      }

      min-height: 200px;
      padding: 20px;
      background-color: #ececec;
      border-radius: 5px;

      > p {
        font-family: "LeeSeoyun";
        font-size: 20px;
        line-height: 1.2;

        word-break: keep-all;
        word-wrap: normal;

        white-space: pre-wrap;
      }
    }
    > .btn_box {
      display: flex;
      justify-content: flex-end;
      margin: 30px 10px 10px;

      > button {
        @font-face {
          font-family: "HallymGothic-Regular";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2204@1.0/HallymGothic-Regular.woff2")
            format("woff2");
          font-weight: 400;
          font-style: normal;
        }

        border: none;
        background: none;

        margin-left: 15px;
        padding: 10px 20px;
        font-size: 16px;
        font-family: "HallymGothic-Regular";
        background-color: #ececec;
        border-radius: 5px;

        &.del {
          color: #fff;
          background-color: tomato;
        }
      }
    }
  }
`;
