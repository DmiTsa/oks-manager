import { useState } from "react";
import { useSelector } from "react-redux";
import Construction from "../Construction/Construction.jsx";
import Modal from "../../../partsComponent/Modal/Modal.jsx";
import ConstructionInfo from "../ConstructionInfo/ConstructionInfo.jsx";
import { selectFilterConstructions } from "../../../redux/orders/filterOrderSlice.js";
import { selectConstructions } from "../../../redux/orders/constructionSlice.js";
import stringMatcher from "../../../utils/stringMatcher.js";
import style from "./OrdersTable.module.css";

export default function OrdersTable() {
  const [modalActive, setModalActive] = useState(false);
  const [constructionModal, setConstructionModal] = useState({});
  const matchConstruction = useSelector(selectFilterConstructions);
  const constructionsData = useSelector(selectConstructions);

  const nStyle = style.orderTableCell + " " + style.cellBold;

  const filtredData = constructionsData.filter((construction) =>
    stringMatcher(matchConstruction, construction.name)
  );

  const constructionNameClickHandler = (id) => {
    const construction = constructionsData.find((el) => el.id === id);
    setConstructionModal(construction);
    setModalActive(true);
  };

  const toggleActive = () => {
    setModalActive(!modalActive);
  };

  return (
    <>
      <Modal active={modalActive} toggleActive={toggleActive}>
        <ConstructionInfo construction={constructionModal} />
      </Modal>
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
          <Construction
            key={construction.id}
            construction={construction}
            click={constructionNameClickHandler}
          />
        );
      })}
    </>
  );
}
