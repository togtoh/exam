import React, { useState } from "react";
import { Card, Radio } from "antd";
import css from "./style.module.css";

function Questions(props) {
  const [value, setValue] = useState("A");

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <Card className={css.Card} title={props.qData}>
      <Radio.Group className={css.Custom} onChange={onChange} value={value}>
        <Radio value={1}>{1}</Radio>
        <Radio value={2}>{2}</Radio>
        <Radio value={3}>{3}</Radio>
        <Radio value={4}>{4}</Radio>
      </Radio.Group>
    </Card>
  );
}

export default Questions;
