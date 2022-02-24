import React from "react";

export const Example = ({ sleep, time, value, onChange }) => {
  return (
    <div>
      <label htmlFor="example">Demo Data</label>
      <br />
      <input
        id="example"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <p>
        {value ? `${value} change is slow by ${time} time.` : "Enter a value"}
      </p>
    </div>
  );
};
