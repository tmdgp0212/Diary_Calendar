import styled from "styled-components";

export const EditorContainer = styled.div`
  @font-face {
    font-family: "HallymGothic-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2204@1.0/HallymGothic-Regular.woff2")
      format("woff2");
    font-weight: 400;
    font-style: normal;
  }

  > .editor {
    margin-top: 20px;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 3px 15px 0 rgba(100, 100, 111, 0.3);

    > .input_box {
      margin: 20px 10px 35px;

      > h3 {
        font-size: 22px;
        text-indent: 5px;
        margin-bottom: 10px;
      }

      > input {
        border: none;
        outline: none;

        width: 100%;
        padding: 15px 20px;
        font-family: "HallymGothic-Regular";
        background-color: #ececec;
        border-radius: 5px;
        box-sizing: border-box;
      }

      > textarea {
        @font-face {
          font-family: "LeeSeoyun";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/LeeSeoyun.woff")
            format("woff");
          font-weight: normal;
          font-style: normal;
        }

        border: none;
        outline: none;

        width: 100%;
        min-height: 150px;
        padding: 15px 20px;
        font-size: 18px;
        font-family: "LeeSeoyun";
        line-height: 1.2;
        background-color: #ececec;
        border-radius: 5px;
        box-sizing: border-box;

        resize: vertical;
      }
    } //input_box

    > .btn_box {
      display: flex;
      justify-content: flex-end;
      margin: 40px 10px 10px;

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

        &.done {
          background-color: #bdf076;
        }
      }
    }
  } //editor
`;
