import React from 'react';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStarOfDavid,
  faCode,
  faPeopleCarry,
  faSchool,
  faCalendarAlt,
  faCertificate,
  faCheck,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { faCss3, faGithub, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';


function App() {
  return (
    <div className="App">
      <header className="header">
      <h1 className="logo">
      <img src="../CHANLOGO.png" alt="logo"></img>
      </h1>
       <ul className="gnb">
         <li><a href="#main">HOME</a></li>
         <li><a href="#about">ABOUT</a></li>
         <li><a href="#skills">SKILLS</a></li>
         <li><a href="#project">PROJECT</a></li>
       </ul>
      </header>
      <div className="main">
        <div className="main_visual">
            <div className="text_wrap">
               <p>Hello, I'm <span className="pointText">CHANMI</span></p>
               <p>Front-end/UI Developer</p>
            </div>
         </div>
         <div id="about">
            <h3 className="pointText">ABOUT</h3>
            <ul className="topBox">
              <li>
                 <FontAwesomeIcon className="icon" icon={faStarOfDavid}  />
                 <h3>도전</h3>
                 <p>도전하는것이 두렵지 않습니다.</p>
              </li>
              <li>
                 <FontAwesomeIcon className="icon" icon={faCode}  />
                 <h3>끈기</h3>
                 <p>쉽게 포기하지 않습니다.</p>
              </li>
              <li>
                 <FontAwesomeIcon className="icon" icon={faPeopleCarry}  />
                 <h3>소통</h3>
                 <p>서로 도우며 함께 협력하겠습니다.</p>
              </li>
            </ul>
            <div className="bottomBox">
                  <div className="profile">
                     <h3 className="pointText">PROFILE</h3>
                     <ul>
                        <li className="p_img"><img src="../me.jpg"></img></li>
                        <li className="p_name">CHANMI KIM</li>
                        <li>1997.10.03</li>
                        <li>
                           <a href="https://github.com/chanimkim">       
                           <FontAwesomeIcon className="icon_git" icon={faGithub}  />
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div className="education">
                     <h3 className="pointText">EDUCATION</h3>
                     <ul>
                        <li>
                        <FontAwesomeIcon className="icon_edu" icon={faSchool}  />
                        명지전문대학 정보통신공학과 (졸업)
                        </li>
                        <li>
                        <FontAwesomeIcon className="icon_edu" icon={faCalendarAlt}  />
                        2016.03~2019.02
                        </li>
                        <li>
                        <FontAwesomeIcon className="icon_edu" icon={faSchool}  />
                        더조은아카데미 프론트엔드양성과정 (수료)
                        </li>
                        <li>
                        <FontAwesomeIcon className="icon_edu" icon={faCalendarAlt}  />
                        2020.02~2020.07
                        </li>
                     </ul>
                  </div>
                  <div className="license">
                        <h3 className="pointText">LICENSE</h3>
                        <ul>
                           <li>
                           <FontAwesomeIcon className="icon_edu" icon={faCertificate}  />
                           정보처리산업기사
                           </li>
                           <li>
                           <FontAwesomeIcon className="icon_edu" icon={faCalendarAlt}  />
                           2020.08.28
                           </li>
                           <li>
                           <FontAwesomeIcon className="icon_edu" icon={faCertificate}  />
                           컴퓨터활용능력(2급)
                           </li>
                           <li>
                           <FontAwesomeIcon className="icon_edu" icon={faCalendarAlt}  />
                           2019.09.13
                           </li>
                        </ul>
                  </div>
           </div>        
         </div>
         <div id="skills">
           <h3 className="pointText">SKILLS</h3>
           <ul className="skills_box">
              <li>
              <FontAwesomeIcon className="icon_skiils" icon={faHtml5}  />
              <p>HTML5</p>
              </li>
              <li>
              <FontAwesomeIcon className="icon_skiils" icon={faCss3}  />
              <p>CSS3</p>
              </li>
              <li>
              <FontAwesomeIcon className="icon_skiils" icon={faJs}  />
              <p>JavaScript</p>
              </li>
              <li>
               <img src="../Jquery.png"></img>
               <p>Jquery</p>
              </li>
              <li>
              <FontAwesomeIcon className="icon_skiils" icon={faReact}  />
              <p>React</p>
              </li>
           </ul>
         </div>
         <div id="project">
            <h3 className="pointText">PROJECT</h3>
            <div className="box">
               <div className="text_wrap">
                     <h4>경복궁 웹/모바일 사이트</h4>
                     <p>경복궁 데스크탑 사이트를 리디자인, 구현 하였습니다.</p>
                     <p>
                     <FontAwesomeIcon className="icon_code" icon={faCheck}  />
                      <span className="fontBg">기획</span> <span className="fontBg">디자인</span> <span className="fontBg">개발</span>
                     </p>
                     <p>
                     <FontAwesomeIcon className="icon_code" icon={faCode}  />
                        HTML/CSS/JavaScript(JQuery)
                     </p>
                     <a href="http://kcm.dothome.co.kr/gb/">Web</a>
                     <a href="http://kcm.dothome.co.kr/mgb/">Mobile</a>
               </div>
               <div classNames="img_box">
                     <div className="img_wrap img1">
                        <img src="./gb_d_1.jpg" alt="경복궁데스크탑"/>
                     </div>
               </div>
            </div>
            <div className="box box2">
               <div className="text_wrap">
                     <h4>한화 반응형 사이트</h4>
                     <p>기존의 한화시스템 사이트의 디자인은 유지한채,<br/>
                     데스크탑 에서 반응형 버전으로 재구축 하였습니다.</p>
                     <p>
                     <FontAwesomeIcon className="icon_code" icon={faCheck}  />
                      <span className="fontBg">반응형 개발</span>
                     </p>
                     <p>
                     <FontAwesomeIcon className="icon_code" icon={faCode}  />
                        HTML/CSS/JavaScript(JQuery)
                     </p>
                     <a href="http://kcm.dothome.co.kr/rwdHanhwa/">Web</a>
               </div>
               <div classNames="img_box">
                     <div className="img_wrap">
                        <img src="./hw_d.png" alt="한화 반응형"/>
                     </div>
               </div>
            </div>
            <div className="box">
               <div className="text_wrap">
                     <h4>영화 소개 사이트</h4>
                     <p>React API를 사용한 영화(20개) 소개사이트를 제작하였습니다.</p>
                     <p>
                     <FontAwesomeIcon className="icon_code" icon={faCheck}  />
                      <span className="fontBg">기획</span> <span className="fontBg">디자인</span> <span className="fontBg">개발</span>
                     </p>
                     <p>
                     <FontAwesomeIcon className="icon_code" icon={faCode}  />
                        HTML/CSS/React/JavaScript
                     </p>
                     <a href="https://chanimkim.github.io/movie_app_2020">Web</a>
                     <a href="https://github.com/chanimkim/movie_app_2020">       
                           <FontAwesomeIcon className="icon_git" icon={faGithub}  />
                     </a>
               </div>
               <div classNames="img_box">
                     <div className="img_wrap">
                        <img src="./chanflix.png" alt="찬플릭스"/>
                     </div>
               </div>
            </div>
            <div className="box box2">
               <div className="text_wrap">
                     <h4>React-Native 날씨 앱</h4>
                     <p>React,Expo 를 활용한 간단한 날씨 앱을 구축하였습니다.</p>
                     <p>
                     <FontAwesomeIcon className="icon_code" icon={faCheck}  />
                      <span className="fontBg">개발</span>
                     </p>
                     <p>
                     <FontAwesomeIcon className="icon_code" icon={faCode}  />
                        HTML/CSS/React/JavaScript
                     </p>
                     <a href="https://expo.io/@coldme/projects/chan-weather">Web</a>
                     <a href="https://github.com/chanimkim/chan-wether">       
                           <FontAwesomeIcon className="icon_git" icon={faGithub}  />
                     </a>
               </div>
               <div classNames="img_box">
                     <div className="img_wrap">
                        <img src="./chan_weather.png" alt="찬웨더"/>
                     </div>
               </div>
            </div>
         </div>
        
         <div className="connect">
            <h3 className="pointText">CONNECT</h3>
            <p><FontAwesomeIcon className="icon_connect" icon={faEnvelope}  /></p>
            <p> mea337@naver.com </p> 
         </div> 
      
       </div>   
      </div>
  );
}
export default App;

 