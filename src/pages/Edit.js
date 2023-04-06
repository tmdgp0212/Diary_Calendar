import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DiaryEditor from "../components/DiaryEditor";
import { useSelector } from "react-redux";

const Edit = () => {
  const { diary } = useSelector((state) => state.diary);
  const { id } = useParams();

  const [curDiary, setCurDiary] = useState([]);

  useEffect(() => {
    setCurDiary(diary.find((it) => parseInt(it.id) === parseInt(id)));
  }, []);

  return (
    <div>
      <DiaryEditor isEdit={true} curDiary={curDiary} />
    </div>
  );
};

export default Edit;
