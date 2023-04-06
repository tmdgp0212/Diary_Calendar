import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyHeader from "../../components/MyHeader";
import TopButton from "../../components/TopButton";
import UnderBtn from "../../components/UnderBtn";
import FloatingBtn from "../../components/FloatingBtn";
import DiaryList from "../../components/DiaryList";

import { BsFillReplyFill, BsCalendar4Week, BsPlusLg } from "react-icons/bs";
import { ListContainer } from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  backToCurMonth,
  decreaseDate,
  increaseDate,
} from "../../reducers/dateReducer";

const MonthlyList = () => {
  const dispatch = useDispatch();
  const { diary } = useSelector((state) => state.diary);
  const { date } = useSelector((state) => state.date);

  const navigate = useNavigate();

  const [curMonth, setCurMonth] = useState(true);
  const [curDiary, setCurDiary] = useState([]);

  useEffect(() => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getTime();
    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0,
      23,
      59,
      59
    ).getTime();

    const curDiaryList = diary.filter(
      (it) => firstDay <= it.date && it.date <= lastDay
    );
    setCurDiary(
      curDiaryList.sort((a, b) => parseInt(a.date) - parseInt(b.date))
    );
  }, [date, diary]);

  useEffect(() => {
    const nowMon = new Date().getMonth() === date.getMonth();
    setCurMonth(nowMon);
  }, [date]);

  return (
    <ListContainer>
      <MyHeader
        headText={`${date.getFullYear()}년 ${date.getMonth() + 1}월`}
        leftBtn={
          <TopButton text={"<"} onClick={() => dispatch(decreaseDate())} />
        }
        rightBtn={
          <TopButton text={">"} onClick={() => dispatch(increaseDate())} />
        }
      />
      <div className="monthly_diary">
        {curDiary.length >= 1 ? (
          curDiary.map((it) => <DiaryList key={it.id} curDiary={it} />)
        ) : (
          <div className="null">일기가 없습니다.</div>
        )}
      </div>
      <FloatingBtn>
        {!curMonth ? (
          <UnderBtn
            text={<BsFillReplyFill />}
            onClick={() => {
              dispatch(backToCurMonth());
            }}
          />
        ) : null}

        <UnderBtn
          text={<BsCalendar4Week />}
          onClick={useCallback(() => {
            navigate("/");
          }, [])}
        />
        <UnderBtn
          text={<BsPlusLg />}
          onClick={useCallback(() => navigate("/new/today"), [])}
        />
      </FloatingBtn>
    </ListContainer>
  );
};

export default MonthlyList;
