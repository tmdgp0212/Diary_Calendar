import React from "react";
import { DayContainer } from "./style";

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
