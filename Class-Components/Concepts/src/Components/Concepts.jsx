import React from "react";
import PureCmp from "./PureComponents";

const style = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function Concepts() {
  return (
    <div style={style}>
      <PureCmp />
    </div>
  );
}
