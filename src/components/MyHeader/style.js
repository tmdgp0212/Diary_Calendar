import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  color: #fff;
  background-color: #76a6f0;
  border-radius: 5px;
  box-shadow: 0 3px 15px 0 rgba(100, 100, 111, 0.3);

  > .left {
    flex: 1;
  }

  > .right {
    display: flex;
    justify-content: flex-end;
    flex: 1;
  }

  > .center {
    flex: 3;
    text-align: center;
    cursor: default;
  }
`;
