import React, { useEffect, useRef, useState } from "react";
import "./auth.css";

const AuthCode = () => {
  const [code, setCode] = useState(Array(6).fill(""));

  const codeRef = useRef([]);

  useEffect(() => {
    if (codeRef.current[0]) {
      codeRef.current[0].focus();
    }
  }, []);

  const handleChange = (e, id) => {
    const value = e.target.value;

    if (isNaN(value)) return;

    const updatedCode = [...code];

    updatedCode[id] = value.substring(value.length - 1);
    setCode(updatedCode);

    if (codeRef.current[id + 1] && value) {
      codeRef.current[id + 1].focus();
    }
  };

  const handleClick = (e, id) => {
    e.target.setSelectionRange(1, 1);
  };

  const handleKey = (e, id) => {
    if (
      e.key == "Backspace" &&
      !code[id] &&
      id > 0 &&
      codeRef.current[id - 1]
    ) {
      codeRef.current[id - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const data = e.clipboardData.getData("text").slice(0, 6);

    const updatedOtp = [...code];

    data.split("").forEach((char, ind) => (updatedOtp[ind] = char));

    setCode(updatedOtp);
    codeRef.current[code.length - 1].focus();
  };

  567890

  return (
    <div className="main-div">
      <div onPaste={handlePaste} className="auth">
        {code?.map((val, id) => (
          <input
            ref={(input) => (codeRef.current[id] = input)}
            className="input"
            value={val}
            onChange={(e) => handleChange(e, id)}
            onClick={(e) => handleClick(e, id)}
            onKeyDown={(e) => handleKey(e, id)}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};

export default AuthCode;
