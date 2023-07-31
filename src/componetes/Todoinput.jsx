import React, { useState } from "react";

function Todoinput(props) {
  const [inputTexts, setInputTexts] = useState("");
  const hanleEnterPrees = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputTexts);
      setInputTexts("");
    }
  };
  const change = (e) => {
    setInputTexts(e.target.value);
  };
  return (
    <div className="input-container">
      <input
        type="text"
        className=" input-box-todo"
        onChange={change}
        value={inputTexts}
        onKeyDown={hanleEnterPrees}
      />
      
      <button
        onClick={() => {
          props.addList(inputTexts);

          setInputTexts("");
        }}
        className="add-btn"
      >
        +
      </button>
    </div>
  );
}

export default Todoinput;
