import { useState } from "react";
import Input from "../Input/Input";

export default function OrderInfo({ order }) {
  const { re } = order;
  // const { number, date, re, pdfPath } = order;
  const [number, setNumber] = useState(order.number);
  const [date, setDate] = useState(order.date);
  const [pdfPath, setPdfPath] = useState(order.pdfPath);
//нужен useEffect на все три стейта
  //нужна отправка состояния в глобальный стейт (или локальный ?)
  const numberChangeHandler = (e) => {
    setNumber(e.target.value);
  };

  const dateChangeHanler = (e) => {
    setDate(e.target.value);
  };

  const pdfPathChangeHandler = (e) => {
    setPdfPath(e.target.value);
  };

  return (
    <>
      <Input text={"№"} value={number} onChange={numberChangeHandler} />
      <Input text={"от"} value={date} onChange={dateChangeHanler} />
      <Input text={"Файл"} value={pdfPath} onChange={pdfPathChangeHandler} />

      <label style={{ fontSize: "small" }}>
        <input type="checkbox" checked={re ? true : false} />
        Перерегистрация
      </label>
    </>
  );
}
