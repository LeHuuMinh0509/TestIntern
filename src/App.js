import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown,faChevronUp, faListCheck, faQuestion, faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenQB, setIsOpenQB] = useState(false);
  const [isOpenTP, setIsOpenTP] = useState(false);
  const [isClickWT, setIsClickWT] = useState(false);

  
  //Open child of PersonnelEvoluation
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  //Open child of QuestionBank
  const toggleOpenQuestionBank = () => {
    setIsOpenQB(!isOpenQB);
  };

  //Open tab Personnel
  const toggleOpenTabPersonnel = () => {
    setIsOpenTP(!isOpenTP);
  };

  const toggleClickWriting = () =>{
    setIsClickWT(!isClickWT);
  }


  return (
    <div className="App">
      <div className='Menu'>
        <div className='LogoHachi'>
        <img className="LogoImg" src="../assets/HachiLogo.png" alt="Hachi Logo" />
        <FontAwesomeIcon className="iconCheDown" icon={faChevronDown} style={{height: "25%"}}/>
        </div>
        <div className='TagMenu'>
          <div className={`PersonelEvaluation ${isOpen ? 'green' : ''}`}>
            <div className='ChildPersonelEvaluation'  onClick={toggleOpen}>
            <FontAwesomeIcon className="iconCheckList" icon={faListCheck} style={{height: "35%"}}/>
            <h3 className="h3PersonelEvaluation"> ĐÁNH GIÁ NHÂN SỰ</h3>
            {isOpen ? (
              <FontAwesomeIcon className="iconChePer" icon={faChevronUp} style={{ height: '25%' }} />
            ) : (
              <FontAwesomeIcon className="iconChePer" icon={faChevronDown} style={{ height: '25%' }} />
            )}
            </div>
            <div className='ChildMenu'>
            {isOpen && (
            <>
            <div className={`QuestionBank ${isOpenQB ? 'green' : ''}`}>
              <div className="childQuestionBank" onClick={toggleOpenQuestionBank}>
                <FontAwesomeIcon className="iconQuestion" icon={faQuestion} style={{height: "35%"}}/>
                <h3 className="h3QuestionBank">Ngân hàng câu hỏi</h3>
              </div>
            </div>
            </>
           )}
            </div>
          </div>
        </div>

      </div>


      <div className='PagePersonnel'>
          <div className='Header'>
            <div class="tabs">
              <div class="tab"><span class="tab-content">-------------</span></div>
              <div class="tab"><span class="tab-content">-------------</span></div>
              <div class="tab"><span class="tab-content">-------------</span></div>
              <div class="tab"><span class="tab-content">-------------</span></div>
              <div class="tab"><span class="tab-content">-------------</span></div>
              <div class="tab"><span class="tab-content">-------------</span></div>
              <div class="tab"><span class="tab-content">-------------</span></div>
              <div class="tab" onClick={toggleOpenTabPersonnel}><span className={`tab-content ${isOpenTP ? 'green' : ''}`}>NHÂN SỰ</span></div>
              
            </div>

            <div className='ElseOfHeader'>
              <FontAwesomeIcon className="iconSearch" icon={faMagnifyingGlass}/>
              <FontAwesomeIcon className="iconBell" icon={faBell}/>
              <div class="circleAvt">
                <img className="avt" src="../assets/avt2.jpg" alt="" />
              </div>
            </div>

          </div>

          <div className='Filter'>
            <div className='FilterGroup'>
              <div className='Groups'>
                <div className={`Writing ${isClickWT ? 'green' : ''}`} onClick={toggleClickWriting}>
                  <span className='SpanWriting'>Đang soạn thảo</span>
                  <input type="checkbox" className="CheckWriting" value="Writing" checked={isClickWT}></input>
                </div>
              </div>


              <div className='ElseOfFilter'>

              </div>
            </div>

            <div className='FilterSearch'>
              
            </div>
          </div>

          <div className='ShowList'>

          </div>

          
          <div className='ShowPage'>

          </div>
      </div>
    </div>
  );
}

export default App;
