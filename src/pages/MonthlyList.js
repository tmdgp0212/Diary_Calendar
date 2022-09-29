import { useCallback, useContext, useEffect, useState } from "react";
import { fnContext, stateContext } from "../App";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MyHeader from "../components/MyHeader";
import TopButton from "../components/TopButton";
import UnderBtn from "../components/UnderBtn";
import FloatingBtn from "../components/FloatingBtn";
import DiaryList from "../components/DiaryList";

import { BsFillReplyFill, BsCalendar4Week, BsPlusLg } from "react-icons/bs";

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;

    > .monthly_diary {
        min-height: 50vh;
        margin-top: 20px;
        padding: 20px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 3px 15px 0 rgba(100, 100, 111, 0.3);

        > .null {
            text-align: center;
        }
    }
`;

const MonthlyList = () => {
    const { diary, date, setDate } = useContext(stateContext);
    const { increaseDate, decreaseDate } = useContext(fnContext);

    const navigate = useNavigate();

    const [curMonth, setCurMonth] = useState(true);
    const [curDiary, setCurDiary] = useState([]);

    useEffect(() => {
        const firstDay = new Date(
            date.getFullYear(),
            date.getMonth(),
            1
        ).getTime();
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
                leftBtn={<TopButton text={"<"} onClick={decreaseDate} />}
                rightBtn={<TopButton text={">"} onClick={increaseDate} />}
            />
            <div className="monthly_diary">
                {curDiary.length >= 1 ? (
                    curDiary.map((it) => (
                        <DiaryList key={it.id} curDiary={it} />
                    ))
                ) : (
                    <div className="null">일기가 없습니다.</div>
                )}
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
                    text={<BsCalendar4Week />}
                    onClick={useCallback(() => {
                        navigate("/");
                    }, [])}
                />
                <UnderBtn
                    text={<BsPlusLg />}
                    onClick={useCallback(() => navigate("/new"), [])}
                />
            </FloatingBtn>
        </ListContainer>
    );
};

export default MonthlyList;
