import { useState } from "react";

const Timer = ({ title, time }) => {
  const [hasLooser, setHasLooser] = useState(false);
  const [hasStart, setHasStart] = useState(false);

  const handleStartTime = () => {
    setHasStart(true);
    setTimeout(() => {
      setHasStart(false);
      setHasLooser(true);
    }, time * 1000);
  };

  return (
    <section className="w-88 flex flex-col items-center justify-center p-8 m-8 bg-[#691a1a] text-[#221c18] shadow-lg rounded-md">
      <h2 className="text-lg tracking-wide text-center uppercase text-[#edfcfa] font-bold mb-2">
        {title}
      </h2>
      {hasLooser && <p className="my-1 mb-3">Has perdido</p>}
      <p className="border border-solid text-[#edfcfa] border-[#46cebe] rounded px-2 py-1 m-1">
        {time} segundo{time > 1 ? "s" : ""}
      </p>
      <p className="mt-4 px-4 py-2 border-none rounded-md bg-[#12352f] text-[#edfcfa] text-lg cursor-pointer transition-all duration-100 hover:bg-[#051715]">
        <button onClick={() => handleStartTime()}>
          {hasStart ? "Parar" : "Empezar"}
        </button>
      </p>
      <p></p>
    </section>
  );
};

export default Timer;
