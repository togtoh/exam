import React from "react";
import { Card, Radio } from "antd";
import css from "./style.module.css";

function Questions(props) {
  // const [value, setValue] = useState(1);
  const answers = props.answers;
  const onChange = (e) => {
    console.log("radio checked", e.target);
    // setValue(e.target.value);
  };

  return (
    <Card style={{ borderRadius: "10px" }} title={props.question}>
      <Radio.Group className={css.RadioGroup} onChange={onChange}>
        {answers.map((item, index) => {
          return (
            <div key={index}>
              <Radio value={item}>{item.answer}</Radio>
            </div>
          );
        })}
      </Radio.Group>
    </Card>
  );
}

export default Questions;
