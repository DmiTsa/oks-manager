import Filter from "./components/Filter/Filter";
import OrdersTable from "./components/orders/OrdersTable/OrdersTable";
import { FaRegUserCircle } from "react-icons/fa";
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <div className='logo'>
          OKS-Manager
        </div>
        <div className='user'>
          <span>User A.A. </span>
          <FaRegUserCircle className='avatar' />
        </div>
      </header>
      <nav className="subMenu">
        <div className="subMenuText">OKS-Manager / Приказы</div>
      </nav>
      <div className="contentContainer">
        <Filter />
        <OrdersTable />
      </div>
    </div>

  );
}

export default App;
