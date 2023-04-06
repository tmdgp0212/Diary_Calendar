import styled from "styled-components";

export const CalContainer = styled.div`
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
