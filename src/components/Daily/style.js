import styled from "styled-components";

export const DailyContainer = styled.div`
  width: calc(100% / 7);
  height: 75px;
  padding: 0 5px;

  &:first-child {
    margin-left: ${(props) => `calc((100% / 7) * ${props.firstDay})`};
  }

  > .date {
    display: flex;
    justify-content: space-between;
    padding: 0 3px;
    font-weight: 600;
    line-height: 1.5;
    border-radius: 2px;

    cursor: pointer;

    &.sun {
      color: #f00;
    }
    &.sat {
      color: #00f;
    }

    &:hover {
      background-color: #76a6f0a1;

      > span {
        display: inline-block;
        color: #fff;
        font-weight: 300;
      }
    }

    > span {
      display: none;
    }
  }

  > ul {
    > li {
      overflow: hidden;
      margin: 3px 0;
      text-indent: 5px;
      line-height: 1.5;
      text-overflow: ellipsis;
      white-space: nowrap;
      background-color: #fce18687;
      border-radius: 2px;
      cursor: pointer;
    }
  }
`;
