import { useState, useEffect, createContext, useRef, useCallback } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Calendar from "./pages/Calendar";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import MonthlyList from "./pages/MonthlyList";
import NewDiary from "./pages/NewDiary";
import NotFound from "./pages/NotFound";

const Wrapper = styled.div`
    @font-face {
        font-family: "HallymGothic-Regular";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2204@1.0/HallymGothic-Regular.woff2")
            format("woff2");
        font-weight: 400;
        font-style: normal;
    }

    width: 80vw;
    max-width: 740px;
    max-height: 90vh;
    font-family: "HallymGothic-Regular";

    @media screen and (max-width: 768px) {
        width: 90vw;
    }
`;

export const stateContext = createContext();
export const fnContext = createContext();

const { PUBLIC_URL } = process.env;

const sampleDiary = [
    {
        id: 0,
        title: "sample diary",
        text: "일기데이터 샘플입니다.",
        date: new Date().getTime(),
    },
];

function App() {
    const [date, setDate] = useState(new Date());
    const [daily, setDaily] = useState([]);
    const [diary, setDiary] = useState(sampleDiary);

    const id = useRef(1);

    useEffect(() => {
        const savedDiary = JSON.parse(localStorage.getItem("diary"));
        if (savedDiary) {
            if (savedDiary.length >= 1) {
                savedDiary.sort((a, b) => b.id - a.id);
                id.current = parseInt(savedDiary[0].id) + 1;
                setDiary(savedDiary);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("diary", JSON.stringify(diary));
    }, [diary]);

    useEffect(() => {
        const tmp = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0,
            23,
            59,
            59
        ).getTime();
        const lastDay = new Date(tmp).getDate();
        let days = [];
        for (let i = 1; i <= lastDay; i++) {
            days.push(new Date(date.getFullYear(), date.getMonth(), i));
        }
        setDaily(days);
    }, [date]);

    const increaseDate = useCallback(() => {
        setDate((date) => new Date(date.getFullYear(), date.getMonth() + 1));
    }, []);

    const decreaseDate = useCallback(() => {
        setDate((date) => new Date(date.getFullYear(), date.getMonth() - 1));
    }, []);

    const createDiary = ({ title, text, date }) => {
        const newDiary = {
            id: id.current,
            title,
            text,
            date: new Date(date).getTime(),
        };

        setDiary((prev) => [...prev, newDiary]);
        id.current += 1;
    };

    const removeDiary = (curId) => {
        const filteredDiary = diary.filter((it) => it.id != curId);
        setDiary(filteredDiary);
    };

    const editDiary = (curId, title, text, date) => {
        const newDiary = diary.map((it) =>
            parseInt(it.id) === parseInt(curId)
                ? {
                      id: curId,
                      title,
                      text,
                      date,
                  }
                : it
        );

        setDiary(newDiary);
    };

    return (
        <Wrapper>
            <BrowserRouter basename={PUBLIC_URL}>
                <stateContext.Provider value={{ diary, daily, date, setDate }}>
                    <fnContext.Provider
                        value={{
                            increaseDate,
                            decreaseDate,
                            createDiary,
                            removeDiary,
                            editDiary,
                        }}
                    >
                        <Routes>
                            <Route index element={<Calendar />} />
                            <Route path="/list" element={<MonthlyList />} />
                            <Route path="/diary/:id" element={<Diary />} />
                            <Route path="/new" element={<NewDiary />} />
                            <Route path="/edit/:id" element={<Edit />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </fnContext.Provider>
                </stateContext.Provider>
            </BrowserRouter>
        </Wrapper>
    );
}

export default App;
