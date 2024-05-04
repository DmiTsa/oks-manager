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
      <label>{name}</label>
      <label>
        <input type="text" placeholder="Ед. изм." value={capacityEm} />
        <input
          type="text"
          placeholder="Проектная мощность"
          value={capacityProj}
        />
        <input
          type="text"
          placeholder="Фактическая мощность"
          value={capacityReal}
        />
        Мощность объекта
      </label>
      <label>
        <input type="text" placeholder="Сметная стоимость" value={cost} />
        <input type="text" placeholder="в т.ч. СМР" value={jobCostPart} />
        <input
          type="text"
          placeholder="в т.ч. оборудование"
          value={equipCostPart}
        />
        Сметная стоимость
      </label>
      <label>
        <input type="text" placeholder="ПОС" value={period} />
        ПОС (мес.)
      </label>
      <label>
        <input type="text" placeholder="Договор" value={contract} />
        Договор
      </label>
      <button type="button" disabled>
        Сохранить
      </button>
    </form>
  );
}

// мощность объекта ед изм..
// мощность объекта значение проект..
// мощность объекта значение факт..
// сметная стоимость всего
// в тч. смр
// в тч. оборуд
// пос
// договор
