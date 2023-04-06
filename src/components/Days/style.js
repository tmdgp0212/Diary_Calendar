import styled from "styled-components";

export const DayContainer = styled.ul`
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
