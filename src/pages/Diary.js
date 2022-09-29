import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fnContext, stateContext } from "../App";
import { GetDate } from "../util/GetDate";
import styled from "styled-components";
import MyHeader from "../components/MyHeader";
import TopButton from "../components/TopButton";

const DiaryContainer = styled.div`
    display: flex;
    flex-direction: column;

    > .diary {
        min-height: 50vh;
        margin-top: 20px;
        padding: 20px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 3px 15px 0 rgba(100, 100, 111, 0.3);

        > .title {
            padding: 20px;
            text-align: center;

            > h2 {
                font-size: 22px;
                word-wrap: break-word;
                word-break: keep-all;
            }

            > p {
                margin-top: 20px;
            }
        }

        > .text {
            @font-face {
                font-family: "LeeSeoyun";
                src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/LeeSeoyun.woff")
                    format("woff");
                font-weight: normal;
                font-style: normal;
            }

            min-height: 200px;
            padding: 20px;
            background-color: #ececec;
            border-radius: 5px;

            > p {
                font-family: "LeeSeoyun";
                font-size: 20px;

                word-break: keep-all;
                word-wrap: normal;
            }
        }
        > .btn_box {
            display: flex;
            justify-content: flex-end;
            margin: 30px 10px 10px;

            > button {
                @font-face {
                    font-family: "HallymGothic-Regular";
                    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2204@1.0/HallymGothic-Regular.woff2")
                        format("woff2");
                    font-weight: 400;
                    font-style: normal;
                }

                border: none;
                background: none;

                margin-left: 15px;
                padding: 10px 20px;
                font-size: 16px;
                font-family: "HallymGothic-Regular";
                background-color: #ececec;
                border-radius: 5px;

                &.del {
                    color: #fff;
                    background-color: tomato;
                }
            }
        }
    }
`;

const Diary = () => {
    const { id } = useParams();
    const [curDiary, setCurDiary] = useState("");
    const [date, setDate] = useState("");

    const navigate = useNavigate();

    const { diary } = useContext(stateContext);
    const { removeDiary } = useContext(fnContext);

    useEffect(() => {
        setCurDiary(diary.find((it) => parseInt(it.id) === parseInt(id)));

        if (curDiary) {
            setDate(GetDate(curDiary.date));
        }
    }, [curDiary, diary]);

    const handleRemoveBtn = () => {
        if (window.confirm("일기를 삭제하시겠습니까?")) {
            removeDiary(parseInt(id));
            navigate("/", { replace: true });
        }
    };

    return (
        <DiaryContainer>
            <MyHeader
                headText={"일기장"}
                leftBtn={
                    <TopButton
                        text={"< 뒤로가기"}
                        onClick={() => navigate(-1)}
                    />
                }
            />
            <div className="diary">
                <div className="title">
                    <h2>{curDiary.title}</h2>
                    <p>{date}</p>
                </div>
                <div className="text">
                    <p>{curDiary.text}</p>
                </div>
                <div className="btn_box">
                    <button
                        onClick={useCallback(() => navigate(`/edit/${id}`), [])}
                    >
                        수정
                    </button>
                    <button className="del" onClick={handleRemoveBtn}>
                        삭제
                    </button>
                </div>
            </div>
        </DiaryContainer>
    );
};

export default Diary;
