import style from "./Input.module.css";

export default function Input({ text, value, onChange }) {
  return (
    <label className={style.label}>
      {text}
      <input
        className={style.input}
        type="text"
        placeholder={text}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
