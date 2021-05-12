import "./App.css";
import Questions from "./Components/questions";
import { qData, aData } from "./utility/Data";
import _ from "lodash";

function App() {
  return (
    <div className="App">
      {qData.map((item, index) => {
        const answerData = _.filter(aData, { qID: item.id });
        console.log(index);
        return (
          <div className="Card" key={index}>
            <Questions question={item.value} answers={_.shuffle(answerData)} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
