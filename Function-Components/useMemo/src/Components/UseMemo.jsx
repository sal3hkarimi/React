import React, { useMemo, useRef, useState } from "react";

function wordCount(word) {
  let i = 0;
  do {
    i++;
  } while (i <= 9999999999);
  return word.length;
}

export default function UseMemo() {
  const [firstCounter, setFirstCounter1] = useState(0);
  const [secondCounter, setSecondCounter2] = useState(0);

//   const count = useMemo(() => wordCount("js"), []);
  const count = wordCount("azim");

  //   const randomNumber = useMemo(
  //     () => (Math.random() * firstCounter).toString().slice(10),
  //     [firstCounter]
  //   );

  //   const randomNumber = (Math.random() * firstCounter).toString().slice(10);

  return (
    <div style={{ fontSize: "3rem", textAlign: "center" }}>
      <p>Word count: {count}</p>
      {/* <p>Random number is: {randomNumber}</p> */}
      <p>Click first count: {firstCounter}</p>
      <p>Click second count: {secondCounter}</p>
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => setFirstCounter1((c) => c - 1)}>
          F-Decease
        </button>
        <button onClick={() => setFirstCounter1((c) => c + 1)}>
          F-Increment
        </button>
      </div>
      <div>
        <button onClick={() => setSecondCounter2((c) => c - 1)}>
          S-Decease
        </button>
        <button onClick={() => setSecondCounter2((c) => c + 1)}>
          S-Increment
        </button>
      </div>
    </div>
  );
}
