import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { stateContext } from "../App";
import DiaryEditor from "../components/DiaryEditor";

const Edit = () => {
  const { diary } = useContext(stateContext);
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
