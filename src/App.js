import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown,faChevronUp, faListCheck, faQuestion, faMagnifyingGlass, faBell, faPlus, faFilter, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react';
import questions from './question.json'; 


function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenQB, setIsOpenQB] = useState(true);
  const [isOpenTP, setIsOpenTP] = useState(true);
  const [isClickWT, setIsClickWT] = useState(true);
  const [isClickSD, setIsClickSD] = useState(false);
  const [isClickAR, setIsClickAR] = useState(false);
  const [isClickSA, setIsClickSA] = useState(false);
  const [isClickAll, setIsClickAll] = useState(false);
  const [isClickQ, setIsClickQ] = useState(false);
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [valueSearch, setValueSearch] = useState('');
  const [isClickDot, setIsClickDot] = useState(false);






  
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

    //Check ChooseAll
  const toggleClickChooseAll = () =>{
    setIsClickAll(!isClickAll);
  }  

    //Check CheckQ
  const toggleClickCheckQ = () =>{
    setIsClickQ(!isClickQ);
  }

  //   //Click each id
  // const toggleCheckEachId = (id) =>{
  //   alert(id);
  // }

  //   //Both toggleClickCheckQ and tooggleCheckEachId
  // const handleClickCheckAndEachId = (id) =>{
  //   toggleClickCheckQ();
  //   toggleCheckEachId(id);
  // }


    //ChooseQuestionnById
  const toggleActiveQuestion = (id) => {
    // alert(id)
    // alert(activeQuestions);
    if (activeQuestions.includes(id)) {
      setActiveQuestions(activeQuestions.filter(q => q !== id));
    } else {
      setActiveQuestions([...activeQuestions, id]);
    }
  };

  //ChangeInputSearch
  const handleChangeInputSearch = (event) => {
    setValueSearch(event.target.value);
  };

  //Click ThreeDot
  const toggleClickThreeDot = () =>{
    setIsClickDot(!isClickDot);
  }; 


  return (
    <div className="App">
      <div className='Menu'>
        <div className='LogoHachi'>
        <img className="LogoImg" src="../assets/HachiLogo.png" alt="Hachi Logo" />
        <FontAwesomeIcon className="iconCheDown" icon={faChevronDown} style={{height: "25%"}}/>
        </div>
        <div className='TagMenu'>
          <div className={`PersonelEvaluation ${isOpen ? 'active' : ''}`}>
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
            <div className={`QuestionBank ${isOpenQB ? 'active' : ''}`}>
              <div className={`childQuestionBank ${isOpenQB ? 'active' : ''}`} onClick={toggleOpenQuestionBank}>
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
              <div className='LineTab'></div>
              <div class="tab"><span class="tab-content">----------</span></div>
              <div className='LineTab'></div>
              <div class="tab"><span class="tab-content">----------</span></div>
              <div className='LineTab'></div>
              <div class="tab"><span class="tab-content">----------</span></div>
              <div className='LineTab'></div>
              <div class="tab"><span class="tab-content">----------</span></div>
              <div className='LineTab'></div>
              <div class="tab"><span class="tab-content">----------</span></div>
              <div className='LineTab'></div>
              <div class="tab"><span class="tab-content">----------</span></div>
              <div className='LineTab'></div>
              <div class="tab" onClick={toggleOpenTabPersonnel}><span className={`tab-content ${isOpenTP ? 'active' : ''}`}>NHÂN SỰ</span></div>
              
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
                <div className={`Writing ${isClickWT ? 'active' : ''}`} onClick={toggleClickWriting}>
                  <span className='SpanWriting' title='Đang soạn thảo'>Đang soạn thảo</span>
                  <input type="checkbox" className="CheckWriting" value="Writing" checked={isClickWT}></input>
                </div>

                <div className={`Writing ${isClickSD ? 'active' : ''}`} onClick={toggleClickSending}>
                  <span className='SpanWriting' title='Gửi duyệt'>Gửi duyệt</span>
                  <input type="checkbox" className="CheckWriting" value="Sending" checked={isClickSD}></input>
                </div>

                <div className={`Writing ${isClickAR ? 'active' : ''}`} onClick={toggleClickApproved}>
                  <span className='SpanWriting' title='Đã duyệt'>Đã duyệt</span>
                  <input type="checkbox" className="CheckWriting" value="Approved" checked={isClickAR}></input>
                </div>

                <div className={`Writing ${isClickSA ? 'active' : ''}`} onClick={toggleClickStopApply}>
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
                <input type="input" className="InputSearch" checked={isClickSA} placeholder='Tìm theo mã và câu hỏi' title={valueSearch} onChange={handleChangeInputSearch}></input>
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
              <div className="ChooseAll">
                <div className={`BoxChooseAll ${isClickAll ? 'active' : ''}`} onClick={toggleClickChooseAll}>
                  <input input type="checkbox" className="CheckAll" value="" checked={isClickAll}></input>
                  <div className='CH'>Câu hỏi</div>
                </div>
              </div>
              <div className='PN'>Phân nhóm</div>
              <div className='TGL'>Thời gian làm</div>
              <div className='TT'>Tình trạng</div>
              <div className="null"></div>
            </div>

            <div className='List'> 
              {questions.map(question => (
                <div className={`ShowQuestion ${activeQuestions.includes(question.id) ? 'active' : ''}`} onClick={() => toggleActiveQuestion(question.id)}>
                  <div className='InfoQuestion'>
                    <input type="checkbox" className="CheckQuestion" value="" checked={activeQuestions.includes(question.id)} onChange={() => {}} />
                    <div className='ThreeInfo'>
                      <div className='Content' title={question.content}>{question.content}</div>
                      <div className='TwoInfo'>
                        <div className='Id' title={question.id}>{question.id}</div>
                        <div className='Line'></div>
                        <div className='Type' title={question.type}>Loại câu hỏi: {question.type}</div>
                      </div>
                    </div>
                  </div>
                  <div className='Group' title={question.groups}>{question.groups}</div>
                  <div className='Time' title={question.time}>{question.time}</div>
                  <div className='Status' title={question.status}
                    style={{ 
                      color: 
                        question.status === "Gửi duyệt" ? '#31ADFF' : 
                        question.status === "Đang soạn thảo" ? '#26282E' :
                        question.status === "Duyệt áp dụng" ? '#209020' :
                        question.status === "Ngưng áp dụng" ? '#FB311C' : 'defaultColor' 
                    }}>
                    {question.status}
                  </div>
                  <div className='Extension'>
                    <div className='ThreeDot' onClick={toggleClickThreeDot}>
                      <svg width="16" height="3" className='ImgThreeDot' viewBox="0 0 16 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 3C2.82843 3 3.5 2.32843 3.5 1.5C3.5 0.671573 2.82843 0 2 0C1.17157 0 0.5 0.671573 0.5 1.5C0.5 2.32843 1.17157 3 2 3Z" fill="#959DB3"/>
                        <path d="M8 3C8.82843 3 9.5 2.32843 9.5 1.5C9.5 0.671573 8.82843 0 8 0C7.17157 0 6.5 0.671573 6.5 1.5C6.5 2.32843 7.17157 3 8 3Z" fill="#959DB3"/>
                        <path d="M14 3C14.8284 3 15.5 2.32843 15.5 1.5C15.5 0.671573 14.8284 0 14 0C13.1716 0 12.5 0.671573 12.5 1.5C12.5 2.32843 13.1716 3 14 3Z" fill="#959DB3"/>
                      </svg>
                    </div>
                  </div>
                    {
                      isClickDot && (
                        <>
                        <div className='BoxExtentsion'>
                            <div className='ExtEdit'>
                              <FontAwesomeIcon icon={faPencil} className='iconPencil' />
                              <div className='CS'>Chỉnh sửa</div>
                            </div>
                          <div className='ExtDelete'>
                            <FontAwesomeIcon icon={faTrash} className='iconTrash' />
                            <div className='XCS'>Xóa câu hỏi</div>
                          </div>
                        </div>
                        </>
                      )
                    }
                </div>         
              ))}
            </div>
          </div>

          
          <div className='ShowPage'>

          </div>
      </div>
    </div>
  );
}

export default App;
