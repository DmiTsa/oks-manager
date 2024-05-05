import Input from "../Input/Input";

import style from "./ConstructionInfo.module.css";

export default function ConstructionInfo({ construction }) {
  const {
    name,
    capacityEm,
    capacityProj,
    capacityReal,
    cost,
    jobCostPart,
    equipCostPart,
    period,
    contract,
  } = construction;

  return (
    <form>
      <div className={style.header}>{name}</div>
      <div className={style.body}>
        <div className={style.bodySection}>
          <div className={style.bodySectionHead}>Мощность объекта</div>
          <Input text={"Ед. изм."} value={capacityEm} />
          <Input text={"Проект. мощность"} value={capacityProj} />
          <Input text={"Факт. мощность"} value={capacityReal} />
        </div>
        <div className={style.bodySection}>
          <div className={style.bodySectionHead}>Стоимость объекта</div>
          <Input text={"Сметная стоимость"} value={cost} />
          <Input text={"в т.ч. СМР"} value={jobCostPart} />
          <Input text={"в т.ч. оборуд."} value={equipCostPart} />
        </div>
        <div className={style.bodySection}>
          <div className={style.bodySectionHead}>ПОС (мес.)</div>
          <Input text={"ПОС"} value={period} />
        </div>
        <div className={style.bodySection}>
          <div className={style.bodySectionHead}>Договор</div>
          <Input text={"№"} value={contract?.number} />
          <Input text={"Дата"} value={contract?.date} />
        </div>
      </div>
      <div className={style.footer}>
        <button type="button" disabled>
          Сохранить
        </button>
      </div>
    </form>
  );
}
