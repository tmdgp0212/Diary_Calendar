import React from "react";
import { FloatingBox } from "./style";

const FloatingBtn = ({ children }) => {
  return <FloatingBox>{children}</FloatingBox>;
};

export default React.memo(FloatingBtn);
