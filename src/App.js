import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown,faChevronUp, faListCheck, faQuestion, faMagnifyingGlass, faFilter, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons"
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
  // const [isClickQ, setIsClickQ] = useState(false);
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [valueSearch, setValueSearch] = useState('');
  const [isClickDot, setIsClickDot] = useState('');






  
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
  // const toggleClickCheckQ = () =>{
  //   setIsClickQ(!isClickQ);
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
  const toggleClickThreeDot = (event, id) => {
    // alert(id)
    event.stopPropagation();
    if(isClickDot === ''){
      setIsClickDot(id);
    } else if(isClickDot === id){
      setIsClickDot('');
    } else if(isClickDot !== '' && id !== isClickDot){
      setIsClickDot(id);
    }
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
              <div className='SearchHeader'>
                <svg width="20" height="20" viewBox="0 0 18 20" fill="none" className='ImgSearch' xmlns="http://www.w3.org/2000/svg">
                <path d="M17.3059 19.1909C17.1304 19.1908 16.9616 19.1234 16.8344 19.0025L12.4802 14.5944C11.1534 15.5465 9.56119 16.0581 7.92811 16.057C6.71062 16.0566 5.50981 15.7739 4.41998 15.2312C3.33015 14.6885 2.38099 13.9004 1.64705 12.9291C0.401157 11.2859 -0.171766 9.2297 0.0448941 7.17901C0.261554 5.12832 1.25151 3.23725 2.81328 1.89071C4.36714 0.558424 6.37991 -0.114301 8.42259 0.0159157C10.4653 0.146133 12.3763 1.06899 13.7484 2.58781C15.1329 4.11753 15.8822 6.11741 15.8439 8.18024C15.8055 10.2431 14.9824 12.2137 13.5421 13.6909L17.8134 17.9911V18.0139C17.9363 18.1476 18.003 18.3234 17.9999 18.505C17.9968 18.6865 17.924 18.8599 17.7966 18.9893C17.7324 19.0539 17.6559 19.105 17.5716 19.1397C17.4873 19.1743 17.397 19.1917 17.3059 19.1909ZM7.9737 1.51757C6.23595 1.51757 4.56936 2.20789 3.34059 3.43667C2.11181 4.66545 1.42149 6.33203 1.42149 8.06979C1.42149 9.80754 2.11181 11.4741 3.34059 12.7029C4.56936 13.9317 6.23595 14.622 7.9737 14.622C9.71146 14.622 11.378 13.9317 12.6068 12.7029C13.8356 11.4741 14.5259 9.80754 14.5259 8.06979C14.5259 6.33203 13.8356 4.66545 12.6068 3.43667C11.378 2.20789 9.71146 1.51757 7.9737 1.51757V1.51757Z" fill="#5A6276"/></svg>
              </div>
              <div className='RengNoti'>
                <svg width="20" height="20" viewBox="0 0 15 18" fill="none" className='ImgReng' xmlns="http://www.w3.org/2000/svg">
                <path d="M7.46713 18C7.01464 17.9974 6.56747 17.9022 6.15317 17.7202C5.73887 17.5383 5.3662 17.2734 5.05813 16.942C4.9535 16.8269 4.89552 16.677 4.89552 16.5215C4.89552 16.366 4.9535 16.2161 5.05813 16.101H1.19713C0.93532 16.0988 0.681424 16.011 0.474158 15.851C0.266891 15.6911 0.117627 15.4677 0.0491275 15.215C-0.0242954 14.9678 -0.0152139 14.7034 0.0749983 14.4618C0.16521 14.2202 0.331646 14.0146 0.549127 13.876C0.699127 13.731 2.01213 12.334 2.01213 7.947C2.03871 6.45556 2.56755 5.01668 3.51313 3.863C4.0133 3.23651 4.64037 2.72293 5.35313 2.356C5.34997 2.3194 5.34997 2.2826 5.35313 2.246C5.3424 1.66243 5.56338 1.0984 5.96767 0.677429C6.37196 0.256459 6.9266 0.0128659 7.51013 0C8.09383 0.0126051 8.64872 0.256084 9.05323 0.677083C9.45773 1.09808 9.67885 1.66226 9.66813 2.246C9.67127 2.2826 9.67127 2.3194 9.66813 2.356C10.3809 2.72291 11.008 3.23649 11.5081 3.863C12.4557 5.01561 12.9866 6.45418 13.0151 7.946C13.0151 12.346 14.3321 13.746 14.4821 13.887C14.6906 14.0389 14.8464 14.252 14.9278 14.4967C15.0093 14.7414 15.0123 15.0054 14.9364 15.2519C14.8605 15.4984 14.7095 15.715 14.5046 15.8715C14.2996 16.0281 14.0509 16.1167 13.7931 16.125H9.87613C9.97416 16.2385 10.0281 16.3835 10.0281 16.5335C10.0281 16.6835 9.97416 16.8285 9.87613 16.942C9.56805 17.2734 9.19539 17.5383 8.78109 17.7202C8.36679 17.9022 7.91962 17.9974 7.46713 18V18ZM5.92513 16.109C6.12373 16.3202 6.36317 16.4889 6.62893 16.6047C6.89469 16.7206 7.18122 16.7812 7.47113 16.783H7.49713C7.78434 16.7791 8.06784 16.7175 8.33071 16.6017C8.59357 16.4859 8.83042 16.3183 9.02713 16.109H5.92513ZM2.33513 13.255C2.11341 13.8816 1.73874 14.4429 1.24513 14.888H13.8031C13.3092 14.443 12.9342 13.8817 12.7121 13.255H2.33513ZM7.52213 3.046C5.05213 3.046 3.20713 5.633 3.20713 7.946C3.22944 9.32103 3.07518 10.6932 2.74813 12.029H12.2971C11.97 10.6932 11.8158 9.32103 11.8381 7.946C11.8371 5.633 9.99213 3.046 7.52213 3.046ZM7.52213 1.82C7.83082 1.82049 8.13857 1.85402 8.44013 1.92C8.36993 1.72695 8.24641 1.55777 8.08392 1.43209C7.92143 1.30642 7.72663 1.22941 7.52213 1.21C7.31766 1.22953 7.12292 1.30658 6.96045 1.43224C6.79798 1.5579 6.67443 1.72701 6.60413 1.92C6.90577 1.85466 7.21349 1.82147 7.52213 1.821V1.82Z" fill="#5A6276"/></svg>
                <div className='Noti'>15</div>
              </div>
              <div className='AvtFull'>
                <div class="circleAvt">
                  <img className="avt" src="../assets/avt2.jpg" alt="" />
                </div>
                <div className='Online'></div>
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
                <div className='Upload'><svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.8 6.521H10.973V8.20799H13.8C14.636 8.20799 15.3 8.62999 15.3 9.01699V16.504C15.3 16.891 14.638 17.313 13.8 17.313H3.17C2.334 17.313 1.67 16.891 1.67 16.504V9.021C1.67 8.634 2.332 8.212 3.17 8.212H5.992V6.521H3.17C1.393 6.521 0 7.611 0 9.021V16.508C0 17.914 1.393 19.008 3.17 19.008H13.83C15.607 19.008 17 17.918 17 16.508V9.021C16.965 7.615 15.572 6.521 13.8 6.521Z" fill="#959DB3"/>
                  <path d="M6.00412 4.2181C6.11558 4.21987 6.22624 4.19898 6.32937 4.15669C6.43251 4.1144 6.52599 4.0516 6.60412 3.9721L7.65912 2.9171V11.4941C7.65523 11.6073 7.67416 11.7202 7.71479 11.8259C7.75543 11.9316 7.81693 12.0281 7.89564 12.1096C7.97435 12.1911 8.06866 12.2558 8.17294 12.3001C8.27722 12.3443 8.38934 12.3672 8.50262 12.3672C8.6159 12.3672 8.72803 12.3443 8.83231 12.3001C8.93659 12.2558 9.03089 12.1911 9.1096 12.1096C9.18832 12.0281 9.24982 11.9316 9.29045 11.8259C9.33109 11.7202 9.35002 11.6073 9.34612 11.4941V2.8471L10.4711 3.9721C10.6303 4.13112 10.8461 4.22044 11.0711 4.22044C11.2961 4.22044 11.5119 4.13112 11.6711 3.9721C11.825 3.81022 11.9107 3.59543 11.9107 3.3721C11.9107 3.14878 11.825 2.93399 11.6711 2.7721L9.13212 0.246103C9.05399 0.166603 8.96051 0.103805 8.85737 0.0615177C8.75424 0.0192308 8.64358 -0.00166316 8.53212 0.000103359V0.000103359C8.42067 -0.00166316 8.31001 0.0192308 8.20687 0.0615177C8.10373 0.103805 8.01026 0.166603 7.93212 0.246103L5.40612 2.7771C5.25228 2.93899 5.1665 3.15378 5.1665 3.3771C5.1665 3.60043 5.25228 3.81522 5.40612 3.9771C5.56563 4.13536 5.78143 4.22383 6.00612 4.2231L6.00412 4.2181Z" fill="#959DB3"/></svg>
                </div>
                <div className='DownandAdd'><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.8003 3.5498H10.9732V5.2368H13.8003C14.6363 5.2368 15.3003 5.6588 15.3003 6.0458V13.5328C15.3003 13.9198 14.6383 14.3418 13.8003 14.3418H3.17007C2.33405 14.3418 1.67004 13.9198 1.67004 13.5328V6.0498C1.67004 5.6628 2.33205 5.2408 3.17007 5.2408H5.99213V3.5498H3.17007C1.39303 3.5498 0 4.6398 0 6.0498V13.5368C0 14.9428 1.39303 16.0368 3.17007 16.0368H13.8303C15.6073 16.0368 17.0004 14.9468 17.0004 13.5368V6.0498C16.9654 4.6438 15.5723 3.5498 13.8003 3.5498Z" fill="#959DB3"/>
                  <path d="M11.0667 8.14908C10.9552 8.14732 10.8445 8.16821 10.7414 8.2105C10.6383 8.25279 10.5448 8.31558 10.4666 8.39508L9.41162 9.45008L9.41162 0.873085C9.41552 0.759871 9.39659 0.647032 9.35595 0.54129C9.31532 0.435548 9.25381 0.339068 9.1751 0.2576C9.09639 0.176131 9.00208 0.111341 8.8978 0.0670917C8.79351 0.022842 8.68139 3.79304e-05 8.56811 3.79304e-05C8.45482 3.79304e-05 8.3427 0.022842 8.23842 0.0670917C8.13413 0.111341 8.03983 0.176131 7.96111 0.2576C7.8824 0.339068 7.82089 0.435548 7.78026 0.54129C7.73962 0.647032 7.72069 0.759871 7.72459 0.873085L7.72459 9.52008L6.59956 8.39508C6.44037 8.23607 6.22456 8.14675 5.99955 8.14675C5.77454 8.14675 5.55873 8.23607 5.39954 8.39508C5.2457 8.55697 5.15991 8.77176 5.15991 8.99508C5.15991 9.21841 5.2457 9.4332 5.39954 9.59508L7.93859 12.1211C8.01673 12.2006 8.11021 12.2634 8.21335 12.3057C8.31649 12.348 8.42715 12.3689 8.5386 12.3671V12.3671C8.65006 12.3689 8.76072 12.348 8.86386 12.3057C8.967 12.2634 9.06048 12.2006 9.13862 12.1211L11.6647 9.59008C11.8185 9.4282 11.9043 9.21341 11.9043 8.99008C11.9043 8.76676 11.8185 8.55197 11.6647 8.39008C11.5052 8.23183 11.2894 8.14336 11.0647 8.14408L11.0667 8.14908Z" fill="#959DB3"/></svg>
                  <div>Template</div>
                </div>
                <div className='DownandAdd' style={{background:"#1A6634", color:"white", fontSize: "13px"}}><svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.17578 1V11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 6H7.35135" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                THÊM MỚI</div>

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
                <input type="input" className="InputSearch" placeholder='Tìm theo mã và câu hỏi' title={valueSearch} onChange={handleChangeInputSearch}></input>
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
                  {/* <div className={`ShowQuestionClick ${activeQuestions.includes(question.id) ? 'active' : ''}`} onClick={() => toggleActiveQuestion(question.id)}> */}
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
                          question.status === "Ngưng áp dụng" ? '#FB311C' :
                          question.status === "Trả về" ? '#B7B92F' : 'defaultColor' 
                      }}>
                      {question.status}
                    </div>
                  {/* </div> */}
                  <div className='Extension'>
                    <div className={`ThreeDot ${isClickDot === (question.id) ? 'active' : ''}`} onClick={(event) => toggleClickThreeDot(event, question.id)}>
                      <svg width="16" height="3" className='ImgThreeDot' viewBox="0 0 16 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 3C2.82843 3 3.5 2.32843 3.5 1.5C3.5 0.671573 2.82843 0 2 0C1.17157 0 0.5 0.671573 0.5 1.5C0.5 2.32843 1.17157 3 2 3Z" fill="#959DB3"/>
                        <path d="M8 3C8.82843 3 9.5 2.32843 9.5 1.5C9.5 0.671573 8.82843 0 8 0C7.17157 0 6.5 0.671573 6.5 1.5C6.5 2.32843 7.17157 3 8 3Z" fill="#959DB3"/>
                        <path d="M14 3C14.8284 3 15.5 2.32843 15.5 1.5C15.5 0.671573 14.8284 0 14 0C13.1716 0 12.5 0.671573 12.5 1.5C12.5 2.32843 13.1716 3 14 3Z" fill="#959DB3"/>
                      </svg>
                    </div>
                  </div>
                  {
                    isClickDot === question.id && (
                      <>
                        <div className='BoxExtentsion'>
                          
                          {question.status === "Gửi duyệt" ? (
                            <>
                              <div className='ExtOpsion'>
                                <FontAwesomeIcon icon={faPencil} className='iconExtension' />
                                <div className='TextExt'>Chỉnh sửa</div>
                              </div>
                              <div className='ExtOpsion'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.85714 7.71429H14.1429V10.2857H3.85714V7.71429ZM9 0C4.02991 0 0 4.02991 0 9C0 13.9701 4.02991 18 9 18C13.9701 18 18 13.9701 18 9C18 4.02991 13.9701 0 9 0ZM9 16.7143C4.74107 16.7143 1.28571 13.2589 1.28571 9C1.28571 4.74107 4.74107 1.28571 9 1.28571C13.2589 1.28571 16.7143 4.74107 16.7143 9C16.7143 13.2589 13.2589 16.7143 9 16.7143Z" fill="white"/></svg>
                                <div className='TextExt'>Phê duyệt</div>
                              </div>
                              <div className='ExtOpsion'>
                                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.75 5V0L2.38419e-07 7.5L8.75 15V10C12.1563 10 15.2422 11.5391 17.4961 13.75C17.4023 9 13.5195 5 8.75 5Z" fill="white"/></svg>
                                <div className='TextExt'>Trả về</div>
                              </div>
                            </>
                          ) : question.status === "Đang soạn thảo" ? (
                            <>
                              <div className='ExtOpsion'>
                                <FontAwesomeIcon icon={faPencil} className='iconExtension' />
                                <div className='TextExt'>Chỉnh sửa</div>
                              </div>
                              <div className='ExtOpsion'>
                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 5.5V0.5L17.75 8L9 15.5V10.5C5.59375 10.5 2.50781 12.0391 0.253906 14.25C0.347656 9.5 4.23047 5.5 9 5.5Z" fill="white"/></svg>
                                <div className='TextExt'>Gửi duyệt</div>
                              </div>
                              <div className='ExtOpsion'>
                              <FontAwesomeIcon icon={faTrash} className='iconExtension' />
                                <div className='TextExt'>Xóa câu hỏi</div>
                              </div>
                            </>
                          ) : question.status === "Ngưng áp dụng" ? (
                            <>                     
                            <div className='ExtOpsion'>
                              <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11 0C6.34464 0 2.17054 2.41406 0 6C2.17545 9.58594 6.34955 12 11 12C15.6504 12 19.8295 9.58594 22 6C19.8295 2.41406 15.6554 0 11 0ZM9.42857 3C10.2978 3 11 3.67031 11 4.5C11 5.32969 10.2978 6 9.42857 6C8.55937 6 7.85714 5.32969 7.85714 4.5C7.85714 3.67031 8.55937 3 9.42857 3ZM1.85625 6C2.75982 4.7625 4.05625 3.71719 5.42143 2.94844C6.02054 2.61094 6.65402 2.32969 7.30714 2.10937C6.19732 3.07031 5.5 4.45781 5.5 6C5.5 7.54219 6.19732 8.92969 7.30714 9.89062C6.65402 9.67031 6.02054 9.38906 5.42143 9.05156C4.05625 8.28281 2.75982 7.2375 1.85625 6ZM16.5786 9.05156C15.9795 9.38906 15.346 9.67031 14.6929 9.89062C15.8027 8.92969 16.5 7.54219 16.5 6C16.5 4.45781 15.8027 3.07031 14.6929 2.10937C15.346 2.32969 15.9795 2.61094 16.5786 2.94844C17.9437 3.71719 19.2402 4.7625 20.1438 6C19.2353 7.2375 17.9437 8.28281 16.5786 9.05156Z" fill="white"/></svg>
                              <div className='TextExt'>Xem chi tiết</div>
                            </div>
                            <div className='ExtOpsion'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.85714 7.71429H14.1429V10.2857H3.85714V7.71429ZM9 0C4.02991 0 0 4.02991 0 9C0 13.9701 4.02991 18 9 18C13.9701 18 18 13.9701 18 9C18 4.02991 13.9701 0 9 0ZM9 16.7143C4.74107 16.7143 1.28571 13.2589 1.28571 9C1.28571 4.74107 4.74107 1.28571 9 1.28571C13.2589 1.28571 16.7143 4.74107 16.7143 9C16.7143 13.2589 13.2589 16.7143 9 16.7143Z" fill="white"/></svg>
                                <div className='TextExt'>Phê duyệt</div>
                            </div>
                            <div className='ExtOpsion'>
                                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.75 5V0L2.38419e-07 7.5L8.75 15V10C12.1563 10 15.2422 11.5391 17.4961 13.75C17.4023 9 13.5195 5 8.75 5Z" fill="white"/></svg>
                                <div className='TextExt'>Trả về</div>
                              </div>
                            </>
                          ) : question.status === "Trả về" ? (
                            <>
                              <div className='ExtOpsion'>
                                <FontAwesomeIcon icon={faPencil} className='iconExtension' />
                                <div className='TextExt'>Chỉnh sửa</div>
                              </div>
                              <div className='ExtOpsion'>
                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 5.5V0.5L17.75 8L9 15.5V10.5C5.59375 10.5 2.50781 12.0391 0.253906 14.25C0.347656 9.5 4.23047 5.5 9 5.5Z" fill="white"/></svg>
                                <div className='TextExt'>Gửi duyệt</div>
                              </div>
                            </>
                          ) : question.status === "Duyệt áp dụng" ? (
                            <>                     
                            <div className='ExtOpsion'>
                              <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11 0C6.34464 0 2.17054 2.41406 0 6C2.17545 9.58594 6.34955 12 11 12C15.6504 12 19.8295 9.58594 22 6C19.8295 2.41406 15.6554 0 11 0ZM9.42857 3C10.2978 3 11 3.67031 11 4.5C11 5.32969 10.2978 6 9.42857 6C8.55937 6 7.85714 5.32969 7.85714 4.5C7.85714 3.67031 8.55937 3 9.42857 3ZM1.85625 6C2.75982 4.7625 4.05625 3.71719 5.42143 2.94844C6.02054 2.61094 6.65402 2.32969 7.30714 2.10937C6.19732 3.07031 5.5 4.45781 5.5 6C5.5 7.54219 6.19732 8.92969 7.30714 9.89062C6.65402 9.67031 6.02054 9.38906 5.42143 9.05156C4.05625 8.28281 2.75982 7.2375 1.85625 6ZM16.5786 9.05156C15.9795 9.38906 15.346 9.67031 14.6929 9.89062C15.8027 8.92969 16.5 7.54219 16.5 6C16.5 4.45781 15.8027 3.07031 14.6929 2.10937C15.346 2.32969 15.9795 2.61094 16.5786 2.94844C17.9437 3.71719 19.2402 4.7625 20.1438 6C19.2353 7.2375 17.9437 8.28281 16.5786 9.05156Z" fill="white"/></svg>
                              <div className='TextExt'>Xem chi tiết</div>
                            </div>
                            <div className='ExtOpsion'>
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.85714 7.71429H14.1429V10.2857H3.85714V7.71429ZM9 0C4.02991 0 0 4.02991 0 9C0 13.9701 4.02991 18 9 18C13.9701 18 18 13.9701 18 9C18 4.02991 13.9701 0 9 0ZM9 16.7143C4.74107 16.7143 1.28571 13.2589 1.28571 9C1.28571 4.74107 4.74107 1.28571 9 1.28571C13.2589 1.28571 16.7143 4.74107 16.7143 9C16.7143 13.2589 13.2589 16.7143 9 16.7143Z" fill="white"/></svg>
                              <div className='TextExt'>Ngưng hiển thị</div>
                            </div>
                            </>
                          ) :null}
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
