import React from "react";

const Screen = ({ value }) => {
  return (
    <div>
      <input
        className="result text-success"
        id="display"
        value={value}
        disabled
      />
    </div>
  );
};
export default Screen;
