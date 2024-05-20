import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown,faChevronUp, faListCheck, faQuestion, faMagnifyingGlass, faBell, faPlus, faFilter } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react';
import questions from './question.json'; 


function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenQB, setIsOpenQB] = useState(false);
  const [isOpenTP, setIsOpenTP] = useState(true);
  const [isClickWT, setIsClickWT] = useState(true);
  const [isClickSD, setIsClickSD] = useState(false);
  const [isClickAR, setIsClickAR] = useState(false);
  const [isClickSA, setIsClickSA] = useState(false);




  
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

    //Check Writing
  const toggleClickWriting = () =>{
    setIsClickWT(!isClickWT);
  }

    //Check Sending
  const toggleClickSending = () =>{
    setIsClickSD(!isClickSD);
  }  

    //Check Approved
  const toggleClickApproved = () =>{
    setIsClickAR(!isClickAR);
  }
    
    //Check StopAplly
  const toggleClickStopApply = () =>{
    setIsClickSA(!isClickSA);
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
              <div class="tab"><span class="tab-content">----------</span></div>
              <div class="tab"><span class="tab-content">----------</span></div>
              <div class="tab"><span class="tab-content">----------</span></div>
              <div class="tab"><span class="tab-content">----------</span></div>
              <div class="tab"><span class="tab-content">----------</span></div>
              <div class="tab"><span class="tab-content">----------</span></div>
              <div class="tab"><span class="tab-content">----------</span></div>
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
                  <span className='SpanWriting' title='Đang soạn thảo'>Đang soạn thảo</span>
                  <input type="checkbox" className="CheckWriting" value="Writing" checked={isClickWT}></input>
                </div>

                <div className={`Writing ${isClickSD ? 'green' : ''}`} onClick={toggleClickSending}>
                  <span className='SpanWriting' title='Gửi duyệt'>Gửi duyệt</span>
                  <input type="checkbox" className="CheckWriting" value="Sending" checked={isClickSD}></input>
                </div>

                <div className={`Writing ${isClickAR ? 'green' : ''}`} onClick={toggleClickApproved}>
                  <span className='SpanWriting' title='Đã duyệt'>Đã duyệt</span>
                  <input type="checkbox" className="CheckWriting" value="Approved" checked={isClickAR}></input>
                </div>

                <div className={`Writing ${isClickSA ? 'green' : ''}`} onClick={toggleClickStopApply}>
                  <span className='SpanWriting' title='Ngưng áp dụng'>Ngưng áp dụng</span>
                  <input type="checkbox" className="CheckWriting" value="Sending" checked={isClickSA}></input>
                </div>
              </div>


              <div className='ElseOfFilter'>
                <div className='Upload'><img className="iconUp" src="https://img.icons8.com/fluency-systems-filled/48/upload.png" alt="upload"/></div>
                <div className='DownandAdd'><img className="iconDown" src="https://img.icons8.com/forma-regular/24/000000/download.png" alt="download"/><div>Template</div></div>
                <div className='DownandAdd' style={{background:"#1A6634", color:"white", fontSize: "90%"}}><FontAwesomeIcon icon={faPlus}  /><div>THÊM MỚI</div></div>

              </div>
            </div>

            <div className='FilterSearch'>
              <div className='Filter1'><FontAwesomeIcon icon={faFilter} className='iconFilter' /></div>

              <div className='Filter2'>
                <h2 className='LDL'>LỌC DỮ LIỆU</h2>
                <h2 className='RBL'>Reset bộ lọc</h2>
              </div>

              <div className='Filter3'>
                <h2 className='Search'>Tìm kiếm</h2>
                <div className='BoxSearch'>
                <FontAwesomeIcon className="iconSearch" icon={faMagnifyingGlass}/>
                <input type="input" className="InputSearch" checked={isClickSA} placeholder='Tìm theo mã và câu hỏi'></input>
                </div>
              </div>

              <div className='Filter4'>
                <div className='ButtonSearch'>
                <FontAwesomeIcon className="iconSearch" icon={faMagnifyingGlass}/>
                <div className='Tim'>Tìm</div>
                </div>
              </div>

            </div>
          </div>

          <div className='ShowList'>
            <div className='Info1'>
              <div className='ChooseAll'>
                <input input type="checkbox" className="CheckWriting" value="Sending" checked={isClickSA}></input>
                <div className='CH'>Câu hỏi</div>
              </div>
              <div className='PN'>Phân nhóm</div>
              <div className='TGL'>Thời gian làm</div>
              <div className='TT'>Tình trạng</div>
              <div className="null"></div>
            </div>

            {/* {
              questions.map( question => {
                return(
                  <div className='box'>{question.id}         {question.content}</div>
                )
              })
            } */}
          </div>

          
          <div className='ShowPage'>

          </div>
      </div>
    </div>
  );
}

export default App;
