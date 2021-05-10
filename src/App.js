import "./App.css";
import Questions from "./Components/questions";
import { qData, aData } from "./utility/Data";

function App() {
  return (
    <div className="App">
      <Questions question={qData} answers={aData} />
    </div>
  );
}

export default App;
