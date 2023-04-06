import Daily from "../../components/Daily";
import Days from "../../components/Days";
import FloatingBtn from "../../components/FloatingBtn";
import TopButton from "../../components/TopButton";
import MyHeader from "../../components/MyHeader";
import UnderBtn from "../../components/UnderBtn";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { BsFillReplyFill, BsListUl, BsPlusLg } from "react-icons/bs";
import { CalContainer } from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  backToCurMonth,
  decreaseDate,
  increaseDate,
} from "../../reducers/dateReducer";

const Calendar = () => {
  const { date, daily } = useSelector((state) => state.date);
  const dispatch = useDispatch();

  const [curMonth, setCurMonth] = useState(true);
  const navigate = useNavigate();

  const firstDay = new Date(daily[0]).getDay();

  useEffect(() => {
    const nowMon =
      new Date().getFullYear() === date.getFullYear() &&
      new Date().getMonth() === date.getMonth();
    setCurMonth(nowMon);
  }, [date]);

  return (
    <CalContainer>
      <MyHeader
        headText={`${date.getFullYear()}년 ${date.getMonth() + 1}월`}
        leftBtn={
          <TopButton text={"<"} onClick={() => dispatch(decreaseDate())} />
        }
        rightBtn={
          <TopButton text={">"} onClick={() => dispatch(increaseDate())} />
        }
      />
      <div className="calender">
        <Days />
        <div className="daily_box">
          {daily.map((it) => (
            <Daily key={it.getDate()} daily={it} firstDay={firstDay} />
          ))}
        </div>
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
          text={<BsListUl />}
          onClick={useCallback(() => navigate("/list"), [])}
        />
        <UnderBtn
          text={<BsPlusLg />}
          onClick={useCallback(() => navigate("/new/today"), [])}
        />
      </FloatingBtn>
    </CalContainer>
  );
};

export default Calendar;
