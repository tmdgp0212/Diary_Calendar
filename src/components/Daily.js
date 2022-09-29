import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { stateContext } from "../App";

const DailyContainer = styled.div`
  width: calc(100% / 7);
  height: 75px;
  padding: 0 5px;

  &:first-child {
    margin-left: ${(props) => `calc((100% / 7) * ${props.firstDay})`};
  }

  > .date {
    display: flex;
    justify-content: space-between;
    padding: 0 3px;
    font-weight: 600;
    line-height: 1.5;
    border-radius: 2px;

    cursor: pointer;

    &.sun {
      color: #f00;
    }
    &.sat {
      color: #00f;
    }

    &:hover {
      background-color: #76a6f0a1;

      > span {
        display: inline-block;
        color: #fff;
        font-weight: 300;
      }
    }

    > span {
      display: none;
    }
  }

  > ul {
    > li {
      overflow: hidden;
      margin: 3px 0;
      text-indent: 5px;
      line-height: 1.5;
      text-overflow: ellipsis;
      white-space: nowrap;
      background-color: #fce18687;
      border-radius: 2px;
      cursor: pointer;
    }
  }
`;

const Daily = ({ daily, firstDay }) => {
  const { diary, date, setDate } = useContext(stateContext);
  const [curDiary, setCurDiary] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const targetDiary = diary.filter((it) => {
      if (new Date(it.date).getFullYear() === new Date(date).getFullYear()) {
        if (new Date(it.date).getMonth() === new Date(date).getMonth()) {
          return new Date(it.date).getDate() === daily.getDate();
        }
      } else {
        return;
      }
    });

    setCurDiary(targetDiary);
  }, [date]);

  const toNewDiary = () => {
    setDate(daily);
    navigate("/new");
  };

  return (
    <DailyContainer firstDay={firstDay}>
      <div
        className={[
          "date",
          daily.getDay() === 0 || daily.getDay() === 6
            ? daily.getDay() === 0
              ? "sun"
              : "sat"
            : null,
        ].join(" ")}
        onClick={toNewDiary}
      >
        {daily.getDate()}

        <span>+add</span>
      </div>
      <ul className="diaryPre">
        {curDiary &&
          curDiary.map((it) => (
            <li key={it.id} onClick={() => navigate(`/diary/${it.id}`)}>
              {it.title}
            </li>
          ))}
      </ul>
    </DailyContainer>
  );
};

export default React.memo(Daily);
