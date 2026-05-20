import React, { useState } from "react";
import './file.css'

const FileSystem = ({ data }) => {
  const [isOpen, setIsOpen] = useState([]);

  const toggleOpen = (id) => {
    setIsOpen((prev) => {
      if (prev.includes(id)) {
        return prev.filter((val) => val != id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <div className="cont">
      {data.map((val) => {
        const opened = isOpen.includes(val.id);
        return (
          <div key={val.id}>
            <div>
              <span onClick={() => toggleOpen(val.id)}>{val.name}</span>
            </div>
            {opened && val?.children && (
              <div className="internal">
                <FileSystem data={val.children} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FileSystem;
