import React from "react";
import { Button } from "./style";

const UnderBtn = ({ text, onClick }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default React.memo(UnderBtn);
