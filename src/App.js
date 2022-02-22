import { useState } from "react";
import "./styles.css";

//セレクトボックスにセットしたい項目の配列
const values = [
  { id: 1, item: "HTML" },
  { id: 2, item: "CSS" },
  { id: 3, item: "JavaScript" }
];

//map()で配列valuesから要素を1つずつ取り出しvalueを受け取る
const SelectItems = values.map((value) => {
  return (
    <option value={value.item} key={value.id}>
      {value.item}
    </option>
  );
});

const InputSelectBox = () => {
  const [selectedValue, setSelectedValue] = useState(values[0]["item"]);

  //selectedValueを更新するhandleChange関数を宣言
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="App">
      <p>
        {/* onChangeでselectedValueの状態が更新され画面上の表示が変化 */}
        現在選択されている値 :<b>{selectedValue}</b>
      </p>

      {/* onChangeでselectedValueの状態がvalueの値に更新される */}
      <select value={selectedValue} onChange={handleChange}>
        {SelectItems}
      </select>
    </div>
  );
};

export default function App() {
  return <InputSelectBox />;
}
