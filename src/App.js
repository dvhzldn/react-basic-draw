import logo from "./logo.svg";
import "./App.css";
import Canvas from "./Components/Canvas";

function App() {
  return (
    <div className="App">
      <h1 className="Heading">DRAW</h1>
      <div className="Canvas">
        <Canvas width={400} height={400} />
      </div>
    </div>
  );
}
export default App;
