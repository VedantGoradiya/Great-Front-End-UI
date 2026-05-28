import React, { useState } from "react";

const Payment = () => {
  const [card, setCard] = useState("");

  const handleChange = (value) => {
    const filteredVal = value
      .split("")
      .filter(c => !isNaN(c) && c !== " ")
      .slice(0, 16)
      .join("");

    return [0, 4, 8, 12]
      .map((val) => filteredVal.slice(val, val + 4))
      .filter((val) => val.length > 0)
      .join(" ");
  };

  return (
    <div className="main-div">
      <div>
        <input
          value={card}
          maxLength={19}
          onChange={(e) => setCard(handleChange(e.target.value))}
          placeholder="1111 1111 1111 1111"
          type="text"
        />
      </div>
    </div>
  );
};

export default Payment;
