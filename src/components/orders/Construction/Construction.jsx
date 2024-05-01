import Order from "../Order/Order";
import style from "./Construction.module.css";

export default function Construction({ construction }) {
  const {
    code,
    name,
    beginDate,
    endDate,
    docOrders,
    commissonOrders,
    sertificateOrders,
  } = construction;

  return (
    <div className={style.orderTableRow}>
      <div className={style.orderTableCell}>{code}</div>
      <div className={style.orderTableCell}>{name}</div>
      <div className={style.orderTableCell}>{beginDate}</div>
      <div className={style.orderTableCell}>{endDate}</div>
      <div className={style.orderTableCell}>
        {docOrders.map((docOrder, i) => {
          return <Order key={i} order={docOrder} />;
        })}
      </div>
      <div className={style.orderTableCell}>
        {commissonOrders.map((commissonOrder, i) => {
          return <Order key={i} order={commissonOrder} />;
        })}
      </div>
      <div className={style.orderTableCell}>
        {sertificateOrders.map((sertificateOrder, i) => {
          return <Order key={i} order={sertificateOrder} />;
        })}
      </div>
    </div>
  );
}
// [{ id: '6', number: '1022', date: '02.04.2024', re: false }, { id: '8', number: '1022', date: '02.04.2024', re: true }]
