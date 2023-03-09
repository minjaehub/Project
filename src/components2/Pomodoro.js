import React, { useState, useEffect } from "react";

// you need to do this --> npm install react-icons --save
import { AiOutlineUnorderedList } from "react-icons/ai";
import { CiCalendar, CiClock1 } from "react-icons/ci";
import { TbMessageCircle } from "react-icons/tb";
import { RxExit } from "react-icons/rx";

import "./Pomodoro.css";

function Pomodoro() {
  const [time, setTime] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setTime(1500);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      <h2 className="McAddy-pomodoro">McAddy</h2>
      <div className="parent">
        <div className="left-block">
          <div className="icons">
            <button>
              <CiClock1 size={35} strokeWidth={0.5} />
            </button>
            <button>
              <CiCalendar size={35} strokeWidth={0.5} />
            </button>
            <button>
              <TbMessageCircle size={37} strokeWidth={1.5} />
            </button>
            <button>
              <AiOutlineUnorderedList size={32} />
            </button>
            <button className="exitButton">
              <RxExit size={35} />
            </button>
          </div>
        </div>
        <div className="middle-block">
          <div className="container">
            <div className="header">
              <button className="button-mode">Single mode</button>

              <button className="button-mode">Group mode</button>
            </div>
            <div className="outer-time-container">
              <div className="timer-container">
                <div className="timer">{formatTime(time)}</div>
                <div className="timer-buttons">
                  {isRunning ? (
                    <button
                      className="button-function"
                      onClick={handleStartStop}
                    >
                      Stop
                    </button>
                  ) : (
                    <button
                      className="button-function"
                      onClick={handleStartStop}
                    >
                      Start
                    </button>
                  )}
                  <button
                    className="button-function"
                    onClick={() => setTime(1500)}
                  >
                    Ready
                  </button>
                  <button className="button-function" onClick={handleReset}>
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-block">
          <p>chat</p>
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
