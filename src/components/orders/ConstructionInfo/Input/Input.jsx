import style from "./Input.module.css";

export default function Input({ text, value }) {
  return (
    <label className={style.label}>
      {text}
      <input
        className={style.input}
        type="text"
        placeholder={text}
        value={value}
      />
    </label>
  );
}
