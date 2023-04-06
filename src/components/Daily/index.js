import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DailyContainer } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { setDatePoint } from "../../reducers/dateReducer";

const Daily = ({ daily, firstDay }) => {
  const dispatch = useDispatch();

  const { diary } = useSelector((state) => state.diary);
  const { date } = useSelector((state) => state.date);
  const [curDiary, setCurDiary] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const targetDiary = diary.filter((it) => {
      if (new Date(it.date).getFullYear() === new Date(date).getFullYear()) {
        if (new Date(it.date).getMonth() === new Date(date).getMonth()) {
          return new Date(it.date).getDate() === daily.getDate();
        }
      }
    });

    setCurDiary(targetDiary);
  }, [date]);

  const toNewDiary = () => {
    dispatch(setDatePoint({ date: daily }));
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
