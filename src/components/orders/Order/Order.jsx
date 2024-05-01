import { GrDocumentPdf } from "react-icons/gr";
import { HiDocumentDuplicate } from "react-icons/hi2";
import style from "./Order.module.css";

export default function Order({ order }) {
  const { number, date, re } = order;

  return (
    <div className={style.order}>
      <span>
        №{number} от {date}
      </span>
      {/* <GrDocumentPdf />
      {re ? <HiDocumentDuplicate /> : null} */}
    </div>
  );
}
