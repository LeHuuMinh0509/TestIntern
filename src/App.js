import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faListCheck } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  
  
  
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };




  return (
    <div className="App">
      <div className='Menu'>
        <div className='LogoHachi'>
        <img className="LogoImg" src="../assets/HachiLogo.png" alt="Hachi Logo" />
        <FontAwesomeIcon className="iconCheDown" icon={faChevronDown} style={{height: "25%"}}/>
        </div>
        <div className='TagMenu'>
          <div className={`PersonelEvaluation ${isOpen ? 'green' : ''}`} onClick={toggleOpen}>
            <div className='ChildPersonelEvaluation'>
            <FontAwesomeIcon className="iconCheckList" icon={faListCheck} style={{height: "35%"}}/>
            <h3 className="h3PersonelEvaluation"> ĐÁNH GIÁ NHÂN SỰ</h3>
            <FontAwesomeIcon className="iconCheDownPer" icon={faChevronDown} style={{height: "25%"}}/>
            </div>
            <div className='ChildMenu'>
            {isOpen && (
            <>
            <div className="PersonelEvaluation">
              <div className="ChildPersonelEvaluation">
                <FontAwesomeIcon className="iconCheckList" icon={faListCheck} style={{height: "35%"}}/>
                <h3 className="h3PersonelEvaluation">ĐÁNH GIÁ NHÂN SỰ</h3>
                <FontAwesomeIcon className="iconCheDownPer" icon={faChevronDown} style={{height: "25%"}}/>
              </div>
            </div>

            <div className="QuestionBanking2">
              <div className="ChildPersonelEvaluation">
                <FontAwesomeIcon className="iconCheckList" icon={faListCheck} style={{height: "35%"}}/>
                <h3 className="h3PersonelEvaluation">ĐÁNH GIÁ NHÂN SỰ</h3>
                <FontAwesomeIcon className="iconCheDownPer" icon={faChevronDown} style={{height: "25%"}}/>
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
