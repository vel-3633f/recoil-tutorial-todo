import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { addTitleState } from "../status/addTitleState";
import { inputTitleState } from "../status/inputTitleState";
import "./InputTask.css";
const InputTask = () => {
  const getKey = () => Math.random().toString(32).substring(2);
  // 別々に使う時は以下のように書く
  // const inputTitle = useRecoilValue(inputTitleState);
  // const setInputTitle = useSetRecoilState(inputTitleState);
  // useStateのように書くこともできる。断然こっちで書いた方がいい。
  const [inputTitle, setInputTitle] = useRecoilState(inputTitleState);
  const [addTitle, setAddTitle] = useRecoilState(addTitleState);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputTitle(e.target.value);
    },
    [inputTitle]
  );
  const handleClick = () => {
    setAddTitle([...addTitle, { id: getKey(), title: inputTitle }]);
    setInputTitle("");
  };
  return (
    <div className="inputField">
      <input
        type="text"
        className="inputTitle"
        value={inputTitle}
        onChange={onChange}
      />
      <button type="button" className="addButton" onClick={handleClick}>
        追加
      </button>
    </div>
  );
};

export default InputTask;
