import styled from "styled-components";
import Daily from "../components/Daily";
import Days from "../components/Days";
import FloatingBtn from "../components/FloatingBtn";
import TopButton from "../components/TopButton";
import MyHeader from "../components/MyHeader";
import UnderBtn from "../components/UnderBtn";
import { useCallback, useContext, useEffect, useState } from "react";
import { fnContext, stateContext } from "../App";
import { useNavigate } from "react-router-dom";

import { BsFillReplyFill, BsListUl, BsPlusLg } from "react-icons/bs";

const CalContainer = styled.div`
  display: flex;
  flex-direction: column;

  > .calender {
    margin-top: 20px;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 3px 15px 0 rgba(100, 100, 111, 0.3);

    > .daily_box {
      display: flex;
      flex-wrap: wrap;
      margin-top: 12px;
    }
  }
`;

const Calendar = () => {
  const { date, daily, setDate } = useContext(stateContext);
  const { increaseDate, decreaseDate } = useContext(fnContext);

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
        leftBtn={<TopButton text={"<"} onClick={decreaseDate} />}
        rightBtn={<TopButton text={">"} onClick={increaseDate} />}
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
              setDate(new Date());
            }}
          />
        ) : null}

        <UnderBtn
          text={<BsListUl />}
          onClick={useCallback(() => navigate("/list"), [])}
        />
        <UnderBtn
          text={<BsPlusLg />}
          onClick={useCallback(() => navigate("/new"), [])}
        />
      </FloatingBtn>
    </CalContainer>
  );
};

export default Calendar;
