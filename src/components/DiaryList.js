import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GetDate } from "../util/GetDate";

const List = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  background-color: #ececec;
  cursor: pointer;

  > .title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  > .diary_preview {
    @font-face {
      font-family: "LeeSeoyun";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/LeeSeoyun.woff")
        format("woff");
      font-weight: normal;
      font-style: normal;
    }

    overflow: hidden;
    font-size: 18px;
    font-family: "LeeSeoyun";
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

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
