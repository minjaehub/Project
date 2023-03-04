import "./FirstBlock.css";
import React, { useState } from "react";
const FirstBlock = (props) => {
  const [pomodoro, setPomodoro] = useState(props.pomodoro);

  const clickHandler = () => {
    setPomodoro("clicked");
  };

  const scheduleButton = () => {
    setPomodoro("changed");
  };
  return (
    // why is firstblock not inblock? I did it on FirstBlock.css
    <div className="firstblock">
      <div className="profile">
        <h1>{props.profile}</h1>
      </div>

      <div className="pomodoro">
        {/* It's not props.pomodoro here but idk why */}
        <h1> {pomodoro}</h1>
      </div>

      <div className="todolist">
        <h1> {props.todolist}</h1>
      </div>
      <div className="schedule">
        <button className="scheduleButton" onClick={scheduleButton}>
          {props.schedule}
        </button>
      </div>
      <div>
        <button onClick={clickHandler}>Click here</button>
      </div>

      <div className="practice">
        <h1>{props.practice}</h1>
      </div>
    </div>
  );
};
export default FirstBlock;
