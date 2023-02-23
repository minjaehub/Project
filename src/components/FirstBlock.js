import "./FirstBlock.css";

function FirstBlock(props) {
  return (
    // why is firstblock not inblock? I did it on FirstBlock.css
    <div className="firstblock">
      <div className="profile">
        <h1>{props.profile}</h1>
      </div>

      <div className="pomodoro">
        <h1> {props.pomodoro}</h1>
      </div>

      <div className="todolist">
        <h1> {props.todolist}</h1>
      </div>
      <div className="schedule">
        <button className="scheduleButton" onClick={props.scheduleButton}>
          {props.schedule}
        </button>
      </div>

      <button onClick={props.clickHandler}>Click here</button>

      <div className="practice">
        <h1>{props.practice}</h1>
      </div>
    </div>
  );
}
export default FirstBlock;
