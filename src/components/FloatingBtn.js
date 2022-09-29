import styled from "styled-components";
import React from "react";

const FloatingBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

const FloatingBtn = ({ children }) => {
    return <FloatingBox>{children}</FloatingBox>;
};

export default React.memo(FloatingBtn);
