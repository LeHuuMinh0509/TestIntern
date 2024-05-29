import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown,faChevronUp, faListCheck, faQuestion, faMagnifyingGlass, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from 'react';
import questions from './question.json'; 
import ReactPaginate from 'react-paginate';



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
  const [filterStatus, setFilterStatus] = useState(["Đang soạn thảo", "Trả về"]);
  const [quatityQuestion, setQuatityQuestion] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const questionsPerPage = 25;

  const filteredQuestions = filterStatus.length > 0
    ? questions.filter(question => filterStatus.includes(question.status))
    : questions;

  const pageCount = Math.ceil(filteredQuestions.length / questionsPerPage);






  
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
  const toggleClickWriting = () => {
    setIsClickWT(!isClickWT);
    setFilterStatus(prevStatus => 
      !isClickWT 
        ? [...prevStatus, "Đang soạn thảo", "Trả về"]
        : prevStatus.filter(status => status !== "Đang soạn thảo" && status !== "Trả về")
    );
  };

   //Check Sending
  const toggleClickSending = () => {
    setIsClickSD(!isClickSD);
    setFilterStatus(prevStatus => 
      !isClickSD 
        ? [...prevStatus, "Gửi duyệt"]
        : prevStatus.filter(status => status !== "Gửi duyệt")
    );
  };

  //Check Approved
  const toggleClickApproved = () => {
    setIsClickAR(!isClickAR);
    setFilterStatus(prevStatus => 
      !isClickAR 
        ? [...prevStatus, "Duyệt áp dụng"]
        : prevStatus.filter(status => status !== "Duyệt áp dụng")
    );
  };

  //Check StopAplly
  const toggleClickStopApply = () => {
    setIsClickSA(!isClickSA);
    setFilterStatus(prevStatus => 
      !isClickSA 
        ? [...prevStatus, "Ngưng áp dụng"]
        : prevStatus.filter(status => status !== "Ngưng áp dụng")
    );
  };

  // const filteredQuestions = filterStatus.length > 0
  //   ? questions.filter(question => filterStatus.includes(question.status))
  //   : questions;


  //Check ChooseAll
  const toggleClickChooseAll = () => {
    setIsClickAll(!isClickAll);
    if (!isClickAll) {
      const filteredQuestions = questions.filter(question => filterStatus.includes(question.status));
      const allQuestionIds = filteredQuestions.map(question => question.id);
      setActiveQuestions(allQuestionIds);
      setQuatityQuestion(allQuestionIds.length)
    } else {
      setActiveQuestions([]);
      setQuatityQuestion(0)
    }
  };

    //Check CheckQ
  // const toggleClickCheckQ = () =>{
  //   setIsClickQ(!isClickQ);
  // }

    //ChooseQuestionnById
  const toggleActiveQuestion = (id) => {
    // alert(id)
    // alert(activeQuestions);
    // alert(quatityQuestion);
    if (activeQuestions.includes(id)) {
      setActiveQuestions(activeQuestions.filter(q => q !== id));
      setQuatityQuestion(quatityQuestion-1);
      setIsClickAll(false)
    } else {
      setActiveQuestions([...activeQuestions, id]);
      setQuatityQuestion(quatityQuestion+1);

    }
  };

  useEffect(() => {
    if (activeQuestions.length === filteredQuestions.length){
      setIsClickAll(true)
    }
  }, [activeQuestions]);

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


  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };
  
  const handleFirstPageClick = () => {
    setCurrentPage(0);
  };
  
  const handleLastPageClick = () => {
    setCurrentPage(pageCount - 1);
  };

  const offset = currentPage * questionsPerPage;
  const currentQuestions = filteredQuestions.slice(offset, offset + questionsPerPage);




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
            {quatityQuestion >0 && (
            <><div className='DivDisabled'></div></>
            )}
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
                <div className='DownandAdd' style={{background:"#1A6634", color:"white", fontSize: "13px", boxShadow:"#A9DCF7 0px 10px 36px 0px, #A9DCF7 0px 0px 0px 1px"}}><svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.17578 1V11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 6H7.35135" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                THÊM MỚI</div>

              </div>
            </div>

            <div className='FilterSearch'>
              <div className='Filter1'><svg width="15" height="16" viewBox="0 0 15 16" fill="none" className="iconFilter" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.22953 16C6.10003 16 5.97172 15.9752 5.85153 15.927C5.65287 15.8457 5.48278 15.7073 5.36281 15.5293C5.24283 15.3513 5.17835 15.1417 5.17753 14.927V10.857L0.343534 6.265C0.185521 6.11369 0.0755585 5.9192 0.0273653 5.7058C-0.0208279 5.4924 -0.00511853 5.26953 0.0725336 5.065C0.14362 4.86299 0.274889 4.6876 0.44867 4.56245C0.622452 4.4373 0.830404 4.36839 1.04453 4.365H2.36053V1.092C2.35571 0.807656 2.46387 0.533009 2.66127 0.328296C2.85867 0.123584 3.1292 0.00551974 3.41353 0L9.37753 0C9.66169 0.00578099 9.93197 0.123959 10.1292 0.328643C10.3263 0.533327 10.4344 0.807826 10.4295 1.092V1.82H11.8295C12.1139 1.82552 12.3844 1.94358 12.5818 2.1483C12.7792 2.35301 12.8874 2.62766 12.8825 2.912V4.369H13.9455C14.1614 4.37159 14.3714 4.43999 14.5474 4.56507C14.7234 4.69015 14.8571 4.86595 14.9305 5.069C15.0062 5.27554 15.0198 5.49973 14.9695 5.71387C14.9192 5.92802 14.8073 6.12275 14.6475 6.274L9.73853 11.031V12.2C9.73506 12.469 9.63416 12.7277 9.45453 12.928L7.00153 15.654C6.90432 15.7626 6.78535 15.8495 6.65234 15.9091C6.51934 15.9687 6.37528 15.9997 6.22953 16V16ZM1.04153 5.461L6.21953 10.376V14.927L8.67553 12.2V10.557L13.9345 5.457L1.04153 5.461ZM3.41353 1.092V4.369H11.8335V2.912H9.37753V1.092H3.41353Z" fill="#959DB3"/></svg>
              </div>

              <div className='Filter2'>
                <div className='LDL'>LỌC DỮ LIỆU</div>
                <div className='RBL'>Reset bộ lọc</div>
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
                  <input type="checkbox" className="CheckAll" value="" checked={isClickAll}></input>
                  <div className='CH'>Câu hỏi</div>
                </div>
              </div>
              <div className='PN'>Phân nhóm</div>
              <div className='TGL'>Thời gian làm</div>
              <div className='TT'>Tình trạng</div>
              <div className="null"></div>
            </div>

            <div className='List'> 
            {currentQuestions.map(question => (
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
            {quatityQuestion >0 && (
                <>
                  <div className='PopUp'>
                    <div className='QuatityChoose'>
                      <div className='NumberQuatity'>{quatityQuestion}</div>
                      <div className='DC'>Đã chọn</div>
                    </div>
                    <div className='OptionPopUp'>
                      <div className='iconOpPU'><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.74609 6H9.24609V5.5V1.58711L16.7278 8L9.24609 14.4129V10.5V10H8.74609C5.6556 10 2.83126 11.2117 0.61562 13.0268C1.27955 9.09943 4.6798 6 8.74609 6Z" stroke="#959DB3"/></svg>
                      </div>
                      <div className='TextOpPU'>Gửi duyệt</div>
                    </div>                    
                    <div className='OptionPopUp'>
                      <div className='iconOpPU'><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6H8.5V5.5V1.58711L1.0183 8L8.5 14.4129V10.5V10H9C12.0905 10 14.9148 11.2117 17.1305 13.0268C16.4665 9.09943 13.0663 6 9 6Z" fill="white" stroke="#959DB3"/></svg>
                      </div>
                      <div className='TextOpPU'>Trả về</div>
                    </div>
                    <div className='OptionPopUp'>
                      <div className='iconOpPU'><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.44944 16.1863C6.20851 16.1863 4.05936 15.3336 2.47478 13.8159C0.890206 12.2981 0 10.2397 0 8.09325C0 5.94685 0.890206 3.88835 2.47478 2.37062C4.05936 0.852881 6.20851 0.000225513 8.44944 0.000225513C10.0297 -0.0111764 11.5804 0.409996 12.9192 1.21418L12.1059 2.46455C11.0105 1.80613 9.74157 1.46112 8.44838 1.47012C7.08082 1.46812 5.74337 1.85469 4.60524 2.58092C3.46711 3.30715 2.57945 4.3404 2.05456 5.54995C1.52967 6.75951 1.39115 8.091 1.65651 9.37598C1.92187 10.661 2.5792 11.8417 3.54532 12.7688C4.51145 13.6958 5.74296 14.3276 7.08404 14.5841C8.42512 14.8406 9.8155 14.7104 11.0793 14.2099C12.3431 13.7093 13.4235 12.861 14.1838 11.7722C14.9441 10.6834 15.3501 9.40312 15.3505 8.09325C15.3529 7.50892 15.282 6.92643 15.1393 6.35831L16.6264 6.00221C16.7996 6.68679 16.8861 7.38886 16.8841 8.09325C16.8841 10.2372 15.9959 12.2935 14.4145 13.8109C12.8332 15.3282 10.6878 16.1825 8.44944 16.1863Z" fill="#959DB3"/>
                        <path d="M8.43357 10.2991C8.22994 10.2991 8.03466 10.2215 7.89069 10.0836L4.27539 6.62082L5.36114 5.58086L8.43357 8.52369L16.883 0.430664L17.9688 1.47062L8.97645 10.0836C8.83248 10.2215 8.6372 10.2991 8.43357 10.2991Z" fill="#959DB3"/></svg>
                      </div>
                      <div className='TextOpPU'>Duyệt áp dụng</div>
                    </div>
                    <div className='OptionPopUp'>
                      <div className='iconOpPU'><svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.25532 17.186C13.8146 17.186 17.5106 13.5627 17.5106 9.09302C17.5106 4.62337 13.8146 1 9.25532 1C4.69603 1 1 4.62337 1 9.09302C1 13.5627 4.69603 17.186 9.25532 17.186Z" stroke="#959DB3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.3508 8.0813H6.15936C5.58945 8.0813 5.12744 8.53422 5.12744 9.09293C5.12744 9.65163 5.58945 10.1046 6.15936 10.1046H12.3508C12.9208 10.1046 13.3828 9.65163 13.3828 9.09293C13.3828 8.53422 12.9208 8.0813 12.3508 8.0813Z" fill="#959DB3"/></svg>
                      </div>
                      <div className='TextOpPU'>Ngừng áp dụng</div>
                    </div>
                    <div className='OptionPopUp'>
                      <div className='iconOpPU'><svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.509 17.1941H2.124C1.81581 17.1911 1.52135 17.0647 1.3052 16.8424C1.08905 16.6201 0.968868 16.3202 0.971 16.0085V3.75562H0.586C0.430583 3.75562 0.281532 3.69316 0.171635 3.58198C0.0617391 3.47081 0 3.32003 0 3.1628C0 3.00558 0.0617391 2.85479 0.171635 2.74362C0.281532 2.63245 0.430583 2.56999 0.586 2.56999H3.886C4.16193 1.81634 4.6583 1.16563 5.309 0.704546C5.95309 0.246061 6.72144 0 7.509 0C8.29656 0 9.06491 0.246061 9.709 0.704546C10.3593 1.16642 10.855 1.81786 11.13 2.57201H14.43C14.5854 2.57201 14.7345 2.63447 14.8444 2.74564C14.9543 2.85682 15.016 3.0076 15.016 3.16483C15.016 3.32205 14.9543 3.47283 14.8444 3.58401C14.7345 3.69518 14.5854 3.75764 14.43 3.75764H13.66V16.0085C13.6621 16.3199 13.5422 16.6195 13.3265 16.8417C13.1108 17.0639 12.8168 17.1906 12.509 17.1941V17.1941ZM10.394 8.69641C10.5482 8.69774 10.6955 8.76092 10.8037 8.87207C10.9119 8.98321 10.9721 9.13324 10.971 9.28922V16.0085H12.509V3.75562H2.124V16.0085H3.663V9.28922C3.663 9.21257 3.67792 9.13666 3.70692 9.06584C3.73592 8.99503 3.77842 8.93068 3.832 8.87647C3.88558 8.82227 3.94919 8.77928 4.01919 8.74994C4.0892 8.72061 4.16423 8.70551 4.24 8.70551C4.31577 8.70551 4.3908 8.72061 4.46081 8.74994C4.53081 8.77928 4.59442 8.82227 4.648 8.87647C4.70158 8.93068 4.74408 8.99503 4.77308 9.06584C4.80207 9.13666 4.817 9.21257 4.817 9.28922V16.0085H6.74V6.91695C6.74 6.76214 6.80079 6.61367 6.909 6.50421C7.01721 6.39474 7.16397 6.33324 7.317 6.33324C7.47003 6.33324 7.61679 6.39474 7.725 6.50421C7.83321 6.61367 7.894 6.76214 7.894 6.91695V16.0074H9.817V9.28922C9.81593 9.13324 9.8761 8.98321 9.98428 8.87207C10.0925 8.76092 10.2398 8.69774 10.394 8.69641V8.69641ZM7.509 1.18608C7.01569 1.14132 6.52061 1.24982 6.08983 1.49708C5.65905 1.74435 5.31305 2.11863 5.098 2.56999H9.92C9.70098 2.12188 9.35418 1.75049 8.9244 1.5038C8.49462 1.25711 8.00159 1.14643 7.509 1.18608V1.18608Z" fill="#959DB3"/></svg>
                      </div>
                      <div className='TextOpPU'>Xóa câu hỏi</div>
                    </div>
                    <div className='OptionCancle'>
                      <div className='LinePU'></div>
                      <svg width="18" height="18" viewBox="0 0 17 17" fill="none" className="iconOpCancle" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.1451 16.7024L8.49922 10.0564L1.85331 16.7024C1.64679 16.8991 1.37069 17.0057 1.08563 16.9989C0.800562 16.9922 0.529805 16.8726 0.332852 16.6664C0.126657 16.4694 0.00707693 16.1987 0.000303945 15.9136C-0.00646904 15.6285 0.100187 15.3524 0.296796 15.1459L6.9427 8.49982L0.296796 1.85375C0.199383 1.75148 0.12301 1.63104 0.0721572 1.49927C0.0213047 1.36751 -0.00301968 1.22698 0.000433644 1.08578C0.00388697 0.944585 0.0351571 0.805561 0.0923902 0.67644C0.149623 0.54732 0.231723 0.430629 0.33402 0.333249C0.431469 0.231022 0.548048 0.149015 0.677203 0.0918728C0.806358 0.0347307 0.945472 0.00365779 1.08666 0.000303064C1.22785 -0.00305166 1.36842 0.0214739 1.50014 0.0724175C1.63187 0.123361 1.75216 0.199708 1.85435 0.297191L8.50026 6.94326L15.1462 0.297191C15.3527 0.100578 15.6288 -0.00608098 15.9139 0.000692171C16.1989 0.00746532 16.4697 0.127048 16.6666 0.333249C16.8728 0.530206 16.9924 0.80097 16.9992 1.08604C17.0059 1.37111 16.8994 1.64722 16.7028 1.85375L10.0569 8.49982L16.7028 15.1459C16.8003 15.2481 16.8766 15.3685 16.9276 15.5002C16.9785 15.632 17.003 15.7724 16.9997 15.9136C16.9963 16.0548 16.9651 16.1939 16.908 16.3231C16.8509 16.4522 16.7689 16.5689 16.6666 16.6664C16.5628 16.7715 16.4393 16.855 16.3031 16.9123C16.1669 16.9696 16.0207 16.9994 15.873 17C15.7381 17.0009 15.6043 16.975 15.4794 16.924C15.3544 16.8729 15.2408 16.7976 15.1451 16.7024Z" fill="#959DB3"/></svg>
                    </div>
                    
                  
                  </div>
                </>
              )}
          </div>


          <div className='ShowPage'>
          <div className='pagination-container'>
            <button className="first-page" onClick={handleFirstPageClick}>Đầu</button>
            <ReactPaginate
              previousLabel={<svg width="8" height="13" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.279047 7.09759C0.24436 7.14758 0.213583 7.20074 0.187047 7.25648C0.143604 7.31729 0.105751 7.38272 0.0740474 7.45179C0.0534004 7.52362 0.0393301 7.59756 0.0320474 7.67248C-0.0104383 7.81399 -0.0104383 7.96684 0.0320474 8.10835C0.0393301 8.18327 0.0534004 8.25721 0.0740474 8.32904C0.105809 8.39773 0.14366 8.46278 0.187047 8.52324C0.213384 8.58051 0.244166 8.63515 0.279047 8.68655V8.68655L5.92005 14.5161C6.12667 14.7149 6.3952 14.8175 6.66903 14.8022C6.94286 14.7869 7.20061 14.6549 7.38796 14.434C7.57531 14.2131 7.67763 13.9206 7.67336 13.6181C7.66908 13.3156 7.55855 13.0267 7.36505 12.8123L2.54905 7.82476L7.36505 2.83717C7.55855 2.62283 7.66908 2.33396 7.67336 2.03146C7.67763 1.72895 7.57531 1.43642 7.38796 1.21553C7.20061 0.99463 6.94286 0.862616 6.66903 0.847305C6.3952 0.831994 6.12667 0.934582 5.92005 1.13345L0.279047 7.09759Z" fill="#959DB3"/>
              </svg>}
              nextLabel={<svg width="8" height="13" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.41095 8.55183C7.44564 8.50183 7.47642 8.44867 7.50295 8.39293C7.5464 8.33212 7.58425 8.2667 7.61595 8.19762C7.6366 8.12579 7.65067 8.05186 7.65795 7.97693C7.70044 7.83543 7.70044 7.68257 7.65795 7.54107C7.65067 7.46614 7.6366 7.39221 7.61595 7.32038C7.58419 7.25168 7.54634 7.18663 7.50295 7.12617C7.47662 7.06891 7.44584 7.01427 7.41095 6.96286V6.96286L1.76995 1.13334C1.56332 0.934477 1.2948 0.831889 1.02097 0.8472C0.747138 0.862511 0.489388 0.994525 0.302036 1.21542C0.114685 1.43632 0.0123648 1.72884 0.016639 2.03135C0.0209132 2.33386 0.131448 2.62272 0.324949 2.83707L5.14095 7.82465L0.324949 12.8122C0.131448 13.0266 0.0209132 13.3154 0.016639 13.618C0.0123648 13.9205 0.114685 14.213 0.302036 14.4339C0.489388 14.6548 0.747138 14.7868 1.02097 14.8021C1.2948 14.8174 1.56332 14.7148 1.76995 14.516L7.41095 8.55183Z" fill="#959DB3"/>
              </svg>}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
              previousClassName={'previous-button'}
              nextClassName={'next-button'}
              previousLinkClassName={'previous-link'}
              nextLinkClassName={'next-link'}
            />
            <button className="last-page" onClick={handleLastPageClick}>Cuối</button>
          </div>



          </div>
      </div>
    </div>
  );
}

export default App;
