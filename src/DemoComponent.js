import React from "react";

const sleep = time => {
  const done = Date.now() + time;
  while (done > Date.now()) {
    // sleep...
  }
};

export const DemoComponent = ({ time, onChange }) => {
  sleep(time);
  return (
    <div>
      Late by{" "}
      <input
        value={time}
        type="number"
        onChange={e => onChange(Number(e.target.value))}
      />
      ms slow
    </div>
  );
};
