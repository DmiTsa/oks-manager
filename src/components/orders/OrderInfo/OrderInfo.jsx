import Input from "../Input/Input";

export default function OrderInfo({ order }) {
  const { number, date, re, pdfPath } = order;

  return (
    <>
      <Input text={"№"} value={number} />
      <Input text={"от"} value={date} />
      <Input text={"Файл"} value={pdfPath} />
      <label style={{ fontSize: "small" }}>
        <input type="checkbox" checked={re ? true : false} />
        Перерегистрация
      </label>
    </>
  );
}
