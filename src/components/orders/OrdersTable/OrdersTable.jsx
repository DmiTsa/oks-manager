import { useState } from "react";
import { useSelector } from "react-redux";
import Construction from "../Construction/Construction.jsx";
import ConstructionInfo from "../ConstructionInfo/ConstructionInfo.jsx";
import OrderInfo from "../OrderInfo/OrderInfo.jsx";
import Modal from "../../../partsComponent/Modal/Modal.jsx";
import { selectFilterConstructions } from "../../../redux/orders/filterOrderSlice.js";
import { selectConstructions } from "../../../redux/orders/constructionSlice.js";
import stringMatcher from "../../../utils/stringMatcher.js";
import style from "./OrdersTable.module.css";

export default function OrdersTable() {
  const [modalActive, setModalActive] = useState(false);
  const [modalType, setModalType] = useState("");
  const [constructionModal, setConstructionModal] = useState({});
  const [orderModal, setOrderModal] = useState({});

  const matchConstruction = useSelector(selectFilterConstructions);
  const constructionsData = useSelector(selectConstructions);

  const nStyle = style.orderTableCell + " " + style.cellBold;

  const filtredData = constructionsData.filter((construction) =>
    stringMatcher(matchConstruction, construction.name)
  );

  const constructionNameClickHandler = (id) => {
    const construction = filtredData.find((el) => el.id === id);
    setConstructionModal(construction);
    setModalType("info");
    setModalActive(true);
  };

  const orderClickHandler = (id) => {
    const allOrders = filtredData.reduce((acc, con) => {
      return acc.concat(
        con.docOrders.concat(con.commissonOrders.concat(con.sertificateOrders))
      );
    }, []);

    const order = allOrders.find((el) => el.id === id);
    setOrderModal(order);
    setModalType("order");
    setModalActive(true);
  };

  const toggleActive = () => {
    setModalActive(!modalActive);
  };
  //create modal type function
  return (
    <>
      {modalType === "info" ? (
        <Modal active={modalActive} toggleActive={toggleActive}>
          <ConstructionInfo construction={constructionModal} />
        </Modal>
      ) : (
        <Modal active={modalActive} toggleActive={toggleActive}>
          <OrderInfo order={orderModal} />
        </Modal>
      )}
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
            clickConstruction={constructionNameClickHandler}
            clickOrder={orderClickHandler}
          />
        );
      })}
    </>
  );
}
