import "./ThirdBlock.css";

function ThirdBlock(props) {
  return (
    <div className="thirdblock">
      <h1>hello from app.js</h1>
      <a href="https://youtube.com/" target="_blank">
        Link to youtube with new webpage practice
      </a>
      <h2>{props.chat}</h2>
    </div>
  );
}
export default ThirdBlock;
