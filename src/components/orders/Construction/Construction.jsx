import Order from "../Order/Order";
import style from "./Construction.module.css";

export default function Construction({
  construction,
  clickConstruction,
  clickOrder,
}) {
  const {
    id,
    code,
    name,
    beginDate,
    endDate,
    docOrders,
    commissonOrders,
    sertificateOrders,
  } = construction;

  return (
    <>
      <div className={style.orderTableRow}>
        <div className={style.orderTableCell}>{code}</div>
        <div
          className={style.orderTableCell + " " + style.cellHover}
          onClick={() => {
            clickConstruction(id);
          }}
        >
          {name}
        </div>
        <div className={style.orderTableCell}>{beginDate}</div>
        <div className={style.orderTableCell}>{endDate}</div>

        <div className={style.orderTableCell}>
          {commissonOrders.map((order, i) => {
            return <Order key={i} order={order} clickOrder={clickOrder} />;
          })}
        </div>
        <div className={style.orderTableCell}>
          {docOrders.map((docOrder, i) => {
            return <Order key={i} order={docOrder} clickOrder={clickOrder} />;
          })}
        </div>
        <div className={style.orderTableCell}>
          {sertificateOrders.map((order, i) => {
            return <Order key={i} order={order} clickOrder={clickOrder} />;
          })}
        </div>
      </div>
    </>
  );
}
