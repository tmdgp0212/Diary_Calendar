import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetDate } from "../../util/GetDate";
import { List } from "./style";

const DiaryList = ({ curDiary }) => {
  const [viewDate, setViewDate] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setViewDate(GetDate(curDiary.date));
  }, []);

  return (
    <List
      onClick={() => {
        navigate(`/diary/${curDiary.id}`);
      }}
    >
      <div className="title">
        <h2>{curDiary.title}</h2>
        <p>{viewDate}</p>
      </div>
      <div className="diary_preview">{curDiary.text}</div>
    </List>
  );
};

export default DiaryList;
