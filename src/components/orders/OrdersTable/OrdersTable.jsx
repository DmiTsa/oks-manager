import { useSelector } from "react-redux";
import { constructionsData } from "../../../data/constructionsData.js";
import stringMatcher from "../../../utils/stringMatcher.js";
import Construction from "../Construction/Construction.jsx";
import { selectFilterConstructions } from "../../../redux/orders/filterOrderSlice.js";

import style from "./OrdersTable.module.css";

export default function OrdersTable() {
  const matchConstruction = useSelector(selectFilterConstructions);

  const filtredData = constructionsData.filter((construction) =>
    stringMatcher(matchConstruction, construction.name)
  );

  const nStyle = style.orderTableCell + " " + style.cellBold;

  return (
    <>
      <div className={style.orderTableRow}>
        <div className={nStyle}>Код</div>
        <div className={nStyle}>Объект строительства</div>
        <div className={nStyle}>Начало строительства</div>
        <div className={nStyle}>Окончание строительства</div>
        <div className={nStyle}>Утв. ПСД</div>
        <div className={nStyle}>Приемочная комиссия</div>
        <div className={nStyle}>Утв. акта приемки</div>
      </div>

      {filtredData.map((construction) => {
        return (
          <Construction key={construction.id} construction={construction} />
        );
      })}
    </>
  );
}
