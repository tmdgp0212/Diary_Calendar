import styled from "styled-components";
import React from "react";

const DayContainer = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > li {
        flex: 1;
        margin: 0 5px;
        padding: 5px 0;
        font-weight: 600;
        text-align: center;
        background-color: #ecececa3;
        border-radius: 2px;
        cursor: default;

        &.sun {
            color: #f00;
        }
        &.sat {
            color: #00f;
        }
    }
`;

const Days = () => {
    return (
        <DayContainer>
            <li className="sun">SUN</li>
            <li>MON</li>
            <li>TUE</li>
            <li>WED</li>
            <li>THU</li>
            <li>FRI</li>
            <li className="sat">SAT</li>
        </DayContainer>
    );
};

export default React.memo(Days);
