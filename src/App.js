import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown,faChevronUp, faListCheck, faQuestion } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenQB, setIsOpenQB] = useState(false);

  
  //Open child of PersonnelEvoluation
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  //Open child of QuestionBank
  const toggleOpenQuestionBank = () => {
    setIsOpenQB(!isOpenQB);
  };




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

      </div>
    </div>
  );
}

export default App;
