import React, { useEffect, useState } from "react";

const HeadingOne = ({ text, center = true }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  //   let loaded = false;
  //   if (typeof window !== "undefined") {
  //     loaded = true;
  //   }

  return (
    <>
      {text && (
        <div className="heading-one ">
          <h1 className={` ${center ? "text-center" : " "}`}>{text}</h1>
          <div
            className={`m-1 mb-10 transition-all delay-700  h-[2px] ${
              center ? " mx-auto " : " mx-0"
            } bg-[#212121] ${loaded ? " w-10" : "w-0"}`}
          ></div>
        </div>
      )}
    </>
  );
};

export default HeadingOne;
