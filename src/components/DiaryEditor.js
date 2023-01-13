import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { fnContext, stateContext } from "../App";
import { GetDate } from "../util/GetDate";
import MyHeader from "./MyHeader";
import TopButton from "./TopButton";

const EditorContainer = styled.div`
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

const DiaryEditor = ({ isEdit, curDiary, today }) => {
  const navigate = useNavigate();
  const { createDiary, editDiary } = useContext(fnContext);

  const nowDate = useContext(stateContext).date;

  const $title = useRef();
  const $text = useRef();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState(GetDate(today ? new Date().getTime() : new Date(nowDate).getTime()));

  const handleCreateBtn = () => {
    if (title.length < 1) {
      alert("일기의 제목을 작성해주세요");
      $title.current.focus();
      return;
    }

    if (text.length < 1) {
      alert("일기 내용이 없습니다.");
      $text.current.focus();
      return;
    }

    createDiary({ title, text, date });
    navigate(-1, { replace: true });
  };

  const handleEditDiary = () => {
    if (title.length < 1) {
      alert("일기의 제목을 작성해주세요");
      $title.current.focus();
      return;
    }

    if (text.length < 1) {
      alert("일기 내용이 없습니다.");
      $text.current.focus();
      return;
    }

    editDiary(curDiary.id, title, text, new Date(date).getTime());
    navigate(-1, { replace: true });
  };

  useEffect(() => {
    if (isEdit) {
      setTitle(curDiary.title);
      setDate(GetDate(curDiary.date));
      setText(curDiary.text);
    }
  }, [isEdit, curDiary]);

  return (
    <EditorContainer>
      <MyHeader
        headText={isEdit ? "일기 수정하기" : "새 일기 쓰기"}
        leftBtn={
          <TopButton
            text={"< 뒤로가기"}
            onClick={useCallback(() => navigate(-1), [])}
          />
        }
      />
      <div className="editor">
        <div className="input_box">
          <h3>Title</h3>
          <input
            type={"text"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoComplete="off"
            placeholder="일기 제목을 작성해주세요"
            ref={$title}
          />
        </div>
        <div className="input_box">
          <h3>Date</h3>
          <input
            type={"date"}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="input_box">
          <h3>Today Is..</h3>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="오늘 하루는 어땠나요?"
            ref={$text}
          />
        </div>
        <div className="btn_box">
          <button onClick={() => navigate(-1)}>취소</button>
          <button
            className="done"
            onClick={isEdit ? handleEditDiary : handleCreateBtn}
          >
            작성완료
          </button>
        </div>
      </div>
    </EditorContainer>
  );
};

export default DiaryEditor;
