import styled from "styled-components";

export const ListContainer = styled.div`
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
