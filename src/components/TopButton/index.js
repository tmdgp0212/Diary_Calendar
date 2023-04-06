import React from "react";
import { Button } from "./style";

const TopButton = ({ text, onClick }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default React.memo(TopButton);
