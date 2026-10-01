import { useRef, useState } from "react";
import ModalDialog from "./ModalDialog";

const Timer = ({ title, time }) => {

  const initialTime = time * 1000;
  const [timerRemaining, setTimeRemaining] = useState(initialTime);

  const timer = useRef();
  const dialogModal = useRef();

  const timeIsRuning = timerRemaining >= 0 && timerRemaining < initialTime;


  if (timerRemaining <= 0) {
    clearInterval(timer.current);
    setTimeRemaining(initialTime);
    dialogModal.current.open();
  }

  const handleStartTime = () => {
    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 100);
    }, 100);
  };

  const handleStopTime = () => {
    clearInterval(timer.current);
    dialogModal.current.open();
  };

  return (
    <>
      {<ModalDialog ref={dialogModal} resultGame="perdido" timeTarget={time} />}
      <section className="w-88 flex flex-col items-center justify-center p-8 m-8 bg-[#691a1a] text-[#221c18] shadow-lg rounded-md">
        <h2 className="text-lg tracking-wide text-center uppercase text-[#edfcfa] font-bold mb-2">
          {title}
        </h2>
        <p className="border border-solid text-[#edfcfa] border-[#46cebe] rounded px-2 py-1 m-1">
          {time} segundo{time > 1 ? "s" : ""}
        </p>
        <p className="mt-4 px-4 py-2 border-none rounded-md bg-[#12352f] text-[#edfcfa] text-lg cursor-pointer transition-all duration-100 hover:bg-[#051715]">
          <button onClick={timeIsRuning ? handleStopTime : handleStartTime}>
            {timeIsRuning ? "Parar" : "Empezar"}
          </button>
        </p>
        <p></p>
      </section>
    </>
  );
};

export default Timer;
