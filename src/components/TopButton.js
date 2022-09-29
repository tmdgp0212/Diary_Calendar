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

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    color: #fff;
    font-size: 16px;
    font-family: "HallymGothic-Regular";
    font-weight: 400;
    background: none;
    border: none;
`;

const TopButton = ({ text, onClick }) => {
    return <Button onClick={onClick}>{text}</Button>;
};

export default React.memo(TopButton);
