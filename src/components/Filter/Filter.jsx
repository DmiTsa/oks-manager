import { useDispatch, useSelector } from "react-redux";
import { setFilterConstructions } from "../../redux/orders/filterOrderSlice";
import style from "./Filter.module.css";
import { selectFilterConstructions } from "../../redux/orders/filterOrderSlice";

export default function Filter() {
  const dispatch = useDispatch();
  const filterConstructions = useSelector(selectFilterConstructions);

  const changeFilterHandler = (e) => {
    dispatch(setFilterConstructions(e.target.value));
  };
  return (
    <div className={style.filter}>
      <input
        type="text"
        placeholder="введите слова для поиска"
        value={filterConstructions}
        onChange={changeFilterHandler}
      />
    </div>
  );
}
