import { useState, useRef } from "react";
import Modal from "./Modal";
let modalData = { score: 0, restTime: 0, lose: false };
let score = 0;
let restTime = 0;
let lose = false;

function Challenge({ title, time }) {
  const [endTime, setEndTime] = useState(0);
  const [TimerState, setTimerState] = useState(false);
  const clearTime = useRef();
  const ModalRef = useRef();

  if (time - endTime < 0) {
    endChallange();
  }

  function calcScore() {
    if (time - endTime < 0) {
      modalData = { ...modalData, lose: true };
      return;
    }

    modalData = {
      ...modalData,
      score: (100 - ((time - endTime) / time) * 100).toFixed(2),
      restTime: (time - endTime).toFixed(2),
      lose: false
    };
  }

  function endChallange() {
    clearInterval(clearTime.current);
    calcScore();
    setEndTime(0);
    setTimerState((prev) => !prev);
    ModalRef.current.open();
  }
  function startChallange() {
    clearTime.current = setInterval(() => {
      setEndTime((prev) => prev + 10 / 1000);
    }, 10);
    setTimerState((prev) => !prev);
  }

  return (
    <>
      <div className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">{time} secound</p>
        <button onClick={!TimerState ? startChallange : endChallange}>
          {!TimerState ? "Start" : "Stop"} Challenge
        </button>
        <p className={TimerState ? "active" : undefined}> Time inactive </p>
      </div>
      <Modal
        score={modalData.score}
        time={time}
        restTime={modalData.restTime}
        lose={modalData.lose}
        ref={ModalRef}
      />
    </>
  );
}

export default Challenge;
