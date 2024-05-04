import style from "./Modal.module.css";

export default function Modal({ active, toggleActive, children }) {
  const hideBackground = style.modalBackground + " " + style.hide;
  const hideContent = style.content + " " + style.hide;

  return (
    <div
      className={active ? style.modalBackground : hideBackground}
      onClick={toggleActive}
    >
      <div
        className={active ? style.content : hideContent}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
}
