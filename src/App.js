import { FaRegUserCircle } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { AiFillSnippets } from "react-icons/ai";
import { AiFillLayout } from "react-icons/ai";
import { HiDocumentDuplicate } from "react-icons/hi2";
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
      <div className="contentContainer">
        <div className="leftSide">
          <div className="filter">
            <input type="text" placeholder="введите слова для поиска" />
            {/* <input type="checkbox" />
          <span>Любое из слов</span> */}
          </div>
          <div className="constructions">
            <div className="construction">
              <AiFillLayout className="constructionIcon" />
              <div className="constructionName">Реконструкция сети доступа.Расширение абонентской сети по технологии ХРЕН в городском поселке Нижние Пиздюки Охрененского района. Nский этап.</div>
            </div>
            <div className="construction">
              <AiFillLayout className="constructionIcon" />
              <div className="constructionName">Реконструкция здания роял Белтелеком палас. Установка композиции статуй и фонтанов</div>
            </div>
            <div className="construction">
              <AiFillLayout className="constructionIcon" />
              <div className="constructionName">Строительство сетей видеоконтроля. Создание сети РСМОБ на каждом перекрестке</div>
            </div>
            <div className="construction">
              <AiFillLayout className="constructionIcon" />
              <div className="constructionName">тской сети по технологии ХРЕН в городском поселке Нижние Пиздюки Охрененского района. Nский этап.</div>
            </div>
          </div>
        </div>
        <div className="rightSide">
          <div className="orders">
            <div className="orderSection">
              <h4>Утверждение ПСД</h4>
              <div className="order">
                №523 от 24.12.2024
                <GrDocumentPdf className="pdfIcon" />
              </div>
            </div>
            <div className="orderSection">
              <h4>Приемочная комиссия</h4>
              <div className="order">
                №601 от 13.02.2024
                <GrDocumentPdf className="pdfIcon" />
              </div>
              <div className="order reapproval">
                <HiDocumentDuplicate style={{ margin: "0 5px" }} />
                №630 от 19.05.2024
                <GrDocumentPdf className="pdfIcon" />
              </div>
            </div>
            <div className="orderSection">
              <h4>Утверждение акта приемки</h4>
              <div className="order">
                №700 от 02.11.2024
                <GrDocumentPdf className="pdfIcon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
