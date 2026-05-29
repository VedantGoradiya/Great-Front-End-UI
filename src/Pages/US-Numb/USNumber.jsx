import React, { useState } from "react";

const USNumber = () => {
  const [numb, setNumb] = useState("");

  const formatNumb = (value) => {
    const filtered = value
      .split("")
      .filter((curr) => curr != " " && !isNaN(curr))
      .slice(0, 16)
      .join("");

    return addBrach(filtered);
  };

  const addBrach = (value) => {
    let res = value;

    if (res.length > 0) res = "(" + res;

    if (res.length > 4) res = res.slice(0, 4) + ") " + res.slice(4);
    if (res.length > 9) res = res.slice(0, 9) + " - " + res.slice(9);

    return res;
  };

  return (
    <div className="main-div">
      <div>
        <input
          value={numb}
          onChange={(e) => setNumb(formatNumb(e.target.value))}
          maxLength={16}
          type="text"
        />
      </div>
    </div>
  );
};

export default USNumber;
