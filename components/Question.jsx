import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header
        className="flex items-center justify-between hover:bg-gray-300 p-2"
        onClick={() => setShowInfo(!showInfo)}
      >
        <h4 className="grow">{title}</h4>
        <button className="" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p dangerouslySetInnerHTML={{ __html: info }}></p>}
    </article>
  );
};

export default Question;
