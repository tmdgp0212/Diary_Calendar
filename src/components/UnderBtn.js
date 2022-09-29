import styled from "styled-components";
import React from "react";

const Button = styled.button`
    @font-face {
        font-family: "HallymGothic-Regular";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2204@1.0/HallymGothic-Regular.woff2")
            format("woff2");
        font-weight: 400;
        font-style: normal;
    }

    background: none;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    margin: 0 10px;
    color: #333;
    font-size: 18px;
    font-family: "HallymGothic-Regular";
    font-weight: 600;
    background-color: #fdecb4;
    border-radius: 50%;
    box-shadow: 0 3px 15px 0 rgba(100, 100, 111, 0.3);
`;

const UnderBtn = ({ text, onClick }) => {
    return <Button onClick={onClick}>{text}</Button>;
};

export default React.memo(UnderBtn);
