import React from "react";
import { Header } from "./style";

const MyHeader = ({ headText, leftBtn, rightBtn }) => {
  return (
    <Header>
      <div className="left">{leftBtn}</div>
      <div className="center">
        <h1>{headText}</h1>
      </div>
      <div className="right">{rightBtn}</div>
    </Header>
  );
};

export default React.memo(MyHeader);
