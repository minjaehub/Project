import React, { useState, useEffect } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { CiCalendar, CiClock1 } from "react-icons/ci";
import { TbMessageCircle } from "react-icons/tb";
import { RxExit } from "react-icons/rx";
import { TbSquare } from "react-icons/tb";

import "./Todolist.css";

function Todolist() {
  const [task, setTask] = useState("");
  const handleTaskChange = (event) => {
    setTask(event.target.value);
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
        <div className="middle-block-todolist">
          <div className="bigcontainer">
            <div className="smallcontainer">
              <div className="container-todolist">completed</div>
              <div className="taskname">
                Task Name
                <button className="checkbox">
                  <TbSquare />
                </button>
              </div>
            </div>
            <div className="smallcontainer">
              <div className="container-todolist">In Progress</div>
              <div className="taskname">
                Task Name
                <button className="checkbox">
                  <TbSquare />
                </button>
              </div>
            </div>
            <div className="smallcontainer">
              <div className="container-todolist">To do</div>
              <div className="taskname">
                Task Name
                <button className="checkbox">
                  <TbSquare />
                </button>
                {/* 이 위에 form, onsubmit={handleSubmit}같은건 안함 */}
                <div className="taskContainer">
                  <input
                    type="text"
                    className="taskBox"
                    value={task}
                    onChange={handleTaskChange}
                    placeholder="Add a new Task..."
                  />
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
export default Todolist;
