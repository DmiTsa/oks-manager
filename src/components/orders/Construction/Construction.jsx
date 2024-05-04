import Order from "../Order/Order";
import style from "./Construction.module.css";

export default function Construction({ construction, click }) {
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
            click(id);
          }}
        >
          {name}
        </div>
        <div className={style.orderTableCell}>{beginDate}</div>
        <div className={style.orderTableCell}>{endDate}</div>

        <div className={style.orderTableCell}>
          {commissonOrders.map((order, i) => {
            return <Order key={i} order={order} />;
          })}
        </div>
        <div className={style.orderTableCell}>
          {docOrders.map((docOrder, i) => {
            return <Order key={i} order={docOrder} />;
          })}
        </div>
        <div className={style.orderTableCell}>
          {sertificateOrders.map((order, i) => {
            return <Order key={i} order={order} />;
          })}
        </div>
      </div>
    </>
  );
}
