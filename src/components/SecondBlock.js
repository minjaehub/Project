import "./SecondBlock.css";

function SecondBlock(props) {
  return (
    <div className="secondblock">
      <div>
        <h1>{props.login}</h1>
      </div>
      <div>
        <h1> {props.signup}</h1>
      </div>

      <div>
        <label>name</label>
        <input type="text" name="email" placeholder="Email" />
      </div>
      <button>Add</button>
    </div>
  );
}
export default SecondBlock;
