import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetDate } from "../../util/GetDate";
import MyHeader from "../MyHeader";
import TopButton from "../TopButton";
import { EditorContainer } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { createDiary, editDiary } from "../../reducers/diaryReducer";

const DiaryEditor = ({ isEdit, curDiary, today }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { date: nowDate } = useSelector((state) => state.date);

  const $title = useRef();
  const $text = useRef();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState(
    GetDate(today ? new Date().getTime() : new Date(nowDate).getTime())
  );

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

    dispatch(createDiary({ title, text, date }));
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

    dispatch(
      editDiary({
        id: curDiary.id,
        title,
        text,
        date: new Date(date).getTime(),
      })
    );
    navigate(-1, { replace: true });
  };

  const onDateChange = (e) => {
    const changedDate = new Date(e.target.value).getTime();
    setDate(GetDate(changedDate));
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
          <input type={"date"} value={date} onChange={onDateChange} />
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
