import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetDate } from "../../util/GetDate";
import MyHeader from "../../components/MyHeader";
import TopButton from "../../components/TopButton";
import { DiaryContainer } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { removeDiary } from "../../reducers/diaryReducer";

const Diary = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [curDiary, setCurDiary] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  const { diary } = useSelector((state) => state.diary);

  useEffect(() => {
    setCurDiary(diary.find((it) => parseInt(it.id) === parseInt(id)));

    if (curDiary) {
      setDate(GetDate(curDiary.date));
    }
  }, [curDiary, diary]);

  const handleRemoveBtn = () => {
    if (window.confirm("일기를 삭제하시겠습니까?")) {
      dispatch(removeDiary({ id: parseInt(id) }));
      navigate("/", { replace: true });
    }
  };

  return (
    <DiaryContainer>
      <MyHeader
        headText={"일기장"}
        leftBtn={<TopButton text={"< 뒤로가기"} onClick={() => navigate(-1)} />}
      />
      <div className="diary">
        <div className="title">
          <h2>{curDiary.title}</h2>
          <p>{date}</p>
        </div>
        <div className="text">
          <p>{curDiary.text}</p>
        </div>
        <div className="btn_box">
          <button onClick={() => navigate(`/edit/${id}`)}>수정</button>
          <button className="del" onClick={handleRemoveBtn}>
            삭제
          </button>
        </div>
      </div>
    </DiaryContainer>
  );
};

export default Diary;
