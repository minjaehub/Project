import "./MainPage.css";
// import React, { useState } from "react";
import FirstBlock from "./FirstBlock";
import SecondBlock from "./SecondBlock";
import ThirdBlock from "./ThirdBlock";

function MainPage() {
  const profile = " Profile";
  const pomodoro = "Pomo  Doro";
  const todolist = "todolist";
  const schedule = "schedule";
  const practice = "practice";

  const login = "LOG IN";
  const signup = "SIGN UP";

  const chat = "chat";

  // const [result, setResult] = useState("default");

  // const clickHandler = () => {
  //   setResult("clicked");
  //   console.log(result);
  //   // console.log(result);
  // };

  // const scheduleButton = () => {
  //   setResult("changed");
  //   // console.log(result);
  // };

  return (
    <div>
      <div className="allblocks">
        <FirstBlock
          profile={profile}
          pomodoro={pomodoro}
          todolist={todolist}
          schedule={schedule}
          practice={practice}
          // result={result}
          // clickHere="clickHere"
          // clickHandler={clickHandler}
          // scheduleButton={scheduleButton}
        />
      </div>

      <div className="allblocks">
        <SecondBlock login={login} signup={signup} />
      </div>

      <div className="allblocks">
        <ThirdBlock chat={chat} />
      </div>
    </div>
  );
}
export default MainPage;
