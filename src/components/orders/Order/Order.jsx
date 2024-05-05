// import { GrDocumentPdf } from "react-icons/gr";
import { HiDocumentDuplicate } from "react-icons/hi2";
import style from "./Order.module.css";

export default function Order({ order, clickOrder }) {
  const { id, number, date, re } = order;

  return (
    <>
      <div className={style.order}>
        <span
          onClick={() => {
            clickOrder(id);
          }}
        >
          №{number} от {date}
        </span>
        <span>{re ? <HiDocumentDuplicate /> : ""}</span>
      </div>
    </>
  );
}
