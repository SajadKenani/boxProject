import "./middleContent.css"
import HomeImage from "./images/HomeImage.png"
import shareLinkIcon from "./images/shareLinkIcon.png"
import copyLinkIcon from "./images/copyLinkIcon.png"

import myVector from "./images/Vector-2.webp"
import myVector2 from "./images/Vector-4.webp"
import myVector3 from "./images/Vector-3.webp"
import myVector4 from "./images/repititive-questions-vector.png"
import myVector5 from "./images/Vector 5.png"

import myPenIcom from "./images/penIcon.png"
import moneySignIcon from "./images/moneySignIcon.png"
import speedIcon from "./images/speedIcon.webp"
import bagIcon from "./images/bagIcon.png"
import starsIcon from "./images/starsIcon.webp"
import clientAssistanceIcon from "./images/clientAssistanceIcon.png"
import boxImage from "./images/boxImage.png"

import sara_pfp from "./images/sara_PFP.webp"
import ahmed_pfp from "./images/ahmed_PFP.webp"
import abdullah_pfp from "./images/abdullah-PFP.webp"

import blurAppplication from "./images/blurAppplication.png"
import blurCApplication from "./images/blurCApplication.png"
import blurWeb from "./images/blurWeb.png"
import blurCWeb from "./images/blurCWeb.png"
import blurGraphic from "./images/blurGraphic.png"
import blurMVP from "./images/blurMVP.png"
import blurProject from "./images/blurProject.png"


// import appImage from "./images/appImage.png"
// import CApplication from "./images/CApplication.png"
// import Web from "./images/Web.png"
// import CWeb from "./images/CWeb.png"
// import Graphic from "./images/Graphic.png"
// import mvp from "./images/mvp.png"
// import project from "./images/project.png"

import whatsapp_Icon from "./images/whatsapp-icon.png";
import facebook_Icon from "./images/facebook-icon.png";
import phonecall_Icon from "./images/phonecall-icon.png";
import email_Icon from "./images/email-icon.png"
import instagram_Icon from "./images/instagram-icon.png";
import telegram_Icon from "./images/telegram-icon.png";
import facebookIcon from "./images/facebookIcon.png"

import instagram_blur from "./images/instagram-blur.webp";
import whatsapp_blur from "./images/whatsapp-blur.webp";
import telegram_blur from "./images/telegram-blur.webp";

import copy_link_bold from "./images/copy_link_bold.png"

import smallGrayLink from "./images/small-gray-link.png"

import React, { useState, useEffect } from "react";

import Project_card_One from "./images/Project_card_One.png"

import {paddingLR} from "./App"

import starIcon from "./images/star-icon.png"

import { ScrollProvider, useScrollContext } from './ScrollContext';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const MiddleContent = () => {

  const [myProjectone, usemyprojectone] = useState(false);
  const [myProjecttwo, usemyprojecttwo] = useState(false);
  const [myProjectthree, usemyprojectthree] = useState(false);
  const [myProjectfour, usemyprojectfour] = useState(false);
  const [myProjectfive, usemyprojectfive] = useState(false);

  const [checkCopiedInstagram, usecheckCopiedInstagram] = useState(false);
  const [checkCopiedFacebook, usecheckCopiedFacebook] = useState(false);
  const [checkCopiedWhatsapp, usecheckCopiedWhatsapp] = useState(false);

  const [checkCopiedSharing, usecheckCopiedSharing] = useState(false);

  const { scrollToSection } = useScrollContext();

  const handleCheckInstagram = async () => {
    navigator.clipboard.writeText("inBoxCom@");
    usecheckCopiedInstagram(true);
    await new Promise(resolve => setTimeout(resolve, 3000));

    usecheckCopiedInstagram(false);

  }

  const handleCheckFacebook = async () => {
    navigator.clipboard.writeText("IN BOX team");
    usecheckCopiedFacebook(true);
    await new Promise(resolve => setTimeout(resolve, 3000));

    usecheckCopiedFacebook(false);
  }

  const handleCheckWhatsapp = async () => {
    navigator.clipboard.writeText("+9647858002915");
    usecheckCopiedWhatsapp(true);
    await new Promise(resolve => setTimeout(resolve, 3000));

    usecheckCopiedWhatsapp(false);
  }

  const handleChecSharing = async () => {
    navigator.clipboard.writeText("www.inboxcompany.com");
    usecheckCopiedSharing(true);
    await new Promise(resolve => setTimeout(resolve, 3000));

    usecheckCopiedSharing(false);
  }


  const ProjectHover = (projectId) => {


      if (eval("myProject" + projectId) === false){
      

        usemyprojectone(false)
        usemyprojecttwo(false)
        usemyprojectthree(false)
        usemyprojectfour(false)
        usemyprojectfive(false)
  
        eval("usemyproject" + projectId)(true);
      }
  
      else {eval("usemyproject" + projectId)(false);}

    


  }
  const [myPadding, setmypadding] = useState(window.innerWidth > 640 ? 10 : 2);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to handle window resize
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    // Additional logic based on the width change
    if (window.innerWidth > 640) {
      setmypadding(10)
    } else {
      setmypadding(2)
    }
  };

  // Add resize event listener when component mounts
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  const [messagesent, usemessagesent] = useState(false)
  const form = useRef();

  const sendEmail  = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_go5peen', 'template_4jm1jq9', form.current, 'O8A6Qpd4686S4osOT')
      .then( async (result) => {
          console.log(result.text);
          usemessagesent(true);

          const myButton = document.getElementById('myButtonId');
          if (myButton) {
              myButton.disabled = true;
              myButton.classList.replace("submitButton", "disabledSubmitButton");
            }

            
              

      }, (error) => {
          console.log(error.text);
      });
  };

  const handleClick = (myNum) => {
    scrollToSection(myNum);

 
  }



    return (
      <ScrollProvider>
        <div >
          <div id="mainSection" style={{height: "60px"}}></div>
            {/* Home Section */}
            <img className=" homeImage " src={HomeImage} />
            <div className=" homeImageContent  justify-end  p-70 " style={{paddingLeft: myPadding+"%", paddingRight:  myPadding+"%"}} >

                <div className="flex justify-end item-end">
                  <h1 id="myMainText" className=" lg:text-7xl md:text-4xl sm:text-4xl text-4xl text-bold text-center sm:text-right" style={{fontWeight:"600"}}>إبداع رقمي يتجسّد في تصميم مواقع مبــتــكرة</h1>
                </div>

                <div className="flex justify-end item-end mt-5" >
                  <p className="lg:text-2xl text-medium text-center sm:text-right" style={{width: "720px", fontWeight:"400"}}>استراتيجيات تصميم مواقع تسهم في تحقيق أهدافك مهما كان حجم مشروعك او شركتك ستجد الحلول المناسبة لدينا!</p>
                </div>

                <div className="sm:flex justify-end item-end pt-10 pb-28 button grid sm:justify-end justify-center">
                  <button id="myButton" className="text-sm text-blue-400 w-40 h-10 rounded-full bg-white-400 order-2 lg:order-1" onClick={() => handleClick(1)}>تصـفـح أعمالنا</button>
                  <button id="myButton" className="text-sm text-white w-40 h-10 rounded-full order-1 lg:order-2 " style={{backgroundColor: "#61B7EA"}} onClick={() => handleClick(2)} >أعرف المزيد</button>
                </div>

            </div>

            {/* Share Link Section */}

            <div className="shareLink-div h-30 grid sm:flex justify-between" style={{paddingLeft: paddingLR+"%", paddingRight: paddingLR+"%"}} >
    
                <div className="sm:justify-start justify-center flex" >
                <img className="h-16 mt-9 " src={shareLinkIcon} />
                </div>
                <div className="grid" >
                  <p className="text-3xl mb-3 mt-5 font-medium text-center sm:text-right" style={{color:"#253B80"}}>ساعدنا في التقدم اكثر! شارك الموقع</p>
                  
                  <div className="flex justify-end mb-10 sm:justify-end justify-center">
                     {checkCopiedSharing && <div className="copyDiv w-20 h-7 bg-white  -mt-6 -mr-2 rounded-md absolute">Copied!</div>}
                     <a style={{color:"#2997D8"}} className="text-lg mr-2">www.inboxcompany.com</a>
                     <img style={{cursor: "pointer"}} className="h-6" src={copyLinkIcon} onClick={handleChecSharing}/>
                     
                  </div>

                </div>
            </div>

            {/* Our Projects Section */}
            <div id="ourProjects" style={{paddingBottom:"50px", backgroundColor:"#F5FCFF"}} className="pt-10">

              <div className="flex justify-center">

            <div className="mainOurProject-Section" style={{paddingLeft: myPadding+"%", paddingRight:  5+myPadding+"%"}}>

                <h1 className="text-4xl p-10 " style={{fontWeight:"600", paddingTop:"60px"}} >مشــــاريــــعنا</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 " style={{position:"relative", zIndex:"4327"}}>

            {myProjecttwo ? 
              <div  className="m-3 object-cover rounded-lg overflow-hidden shadow-md bg-white myObject" style={{width: "100%"}} onMouseLeave={() => ProjectHover("two")}>
                <p className="p-5 pb-3" style={{fontSize: "13px"}}> نبذة عن المشروع </p>
                <h3 className="p-5 pt-0 pb-3" style={{fontSize: "20px", fontWeight: "600"}}> مشروع الموقع لشركة احمد للصياغة </h3>
                <p className="p-5 pt-0" style={{color: "#242424"}}> يستعرض هذا الموقع جميع اعمال شركة احمد من المصوغات الذهبية و الفضية, و يحتوي ايضا على الخدمات المتوفرة و اقسام للأسئلة و الاجوبة و ايضابطاقات و ازرار تساعد على التواصل </p>
                <div className="flex " style={{right: "0", justifyContent: "end"}}>
                  <img src={smallGrayLink} className="w-3 h-3 mt-1"/>
                  <p style={{color: "#242424", fontSize:"13px"}} className=" p-5 pt-0 sm:pb-0 pb-14"> أنقر لمعـــاينــة حية   </p>

                </div>
              </div> : 
              <img className="m-3 object-cover rounded-lg overflow-hidden shadow-md myObject" style={{width: "550px"}} src={Project_card_One} alt="Card Image" onMouseEnter={() => ProjectHover("two")} />
              }


            {myProjectone ? 
              <div  className="m-3 object-cover rounded-lg overflow-hidden shadow-md bg-white myObject" style={{width: "100%"}} onMouseLeave={() => ProjectHover("one")}>
                <p className="p-5 pb-3" style={{fontSize: "13px"}}> نبذة عن المشروع </p>
                <h3 className="p-5 pt-0 pb-3" style={{fontSize: "20px", fontWeight: "600"}}> مشروع الموقع لشركة احمد للصياغة </h3>
                <p className="p-5 pt-0" style={{color: "#242424"}}> يستعرض هذا الموقع جميع اعمال شركة احمد من المصوغات الذهبية و الفضية, و يحتوي ايضا على الخدمات المتوفرة و اقسام للأسئلة و الاجوبة و ايضابطاقات و ازرار تساعد على التواصل </p>
                <div className="flex " style={{right: "0", justifyContent: "end"}}>
                  <img src={smallGrayLink} className="w-3 h-3 mt-1"/>
                  <p style={{color: "#242424", fontSize:"13px"}} className=" p-5 pt-0 sm:pb-0 pb-14"> أنقر لمعـــاينــة حية   </p>

                </div>
              </div> : 
              <img className="m-3 object-cover rounded-lg overflow-hidden shadow-md myObject" style={{width: "550px"}} src={Project_card_One} alt="Card Image" onMouseEnter={() => ProjectHover("one")} />
              } 
                
    

          
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6" style={{position:"relative", zIndex:"4327"}}>
            {myProjectfive ? 
              <div  className="m-3 object-cover rounded-lg overflow-hidden shadow-md bg-white myObject" style={{width: "100%"}} onMouseLeave={() => ProjectHover("five")}>
                <p className="p-5 pb-1" style={{fontSize: "10px"}}> نبذة عن المشروع </p>
                <h3 className="p-5 pt-0 pb-2" style={{fontSize: "18px", fontWeight: "500"}}> مشروع الموقع لشركة احمد للصياغة </h3>
                <p className="p-5 pt-0" style={{color: "#242424", fontSize: "12px", fontWeight:"400"}}> يستعرض هذا الموقع جميع اعمال شركة احمد من المصوغات الذهبية و الفضية, و يحتوي ايضا على الخدمات المتوفرة و اقسام للأسئلة و الاجوبة و ايضابطاقات و ازرار تساعد على التواصل مع السشركة لغاية الطلب او سؤال الأسئلة </p>
                <div className="flex pr-2" style={{right: "0", justifyContent: "end"}}>
                  <img src={smallGrayLink} className="w-3 h-3 mt-1"/>
                  <p style={{color: "#242424", fontSize:"12px"}} className=" p-3 pt-0 sm:pb-2 pb-24"> أنقر لمعـــاينــة حية   </p>

                </div>
              </div> : 
              <img className="m-3 object-cover rounded-lg overflow-hidden shadow-md myObject" src={Project_card_One} alt="Card Image" onMouseEnter={() =>ProjectHover("five")} />
              } 

            {myProjectfour ? 
              <div  className="m-3 object-cover rounded-lg overflow-hidden shadow-md bg-white myObject h-100" style={{width: "100%"}} onMouseLeave={() => ProjectHover("four")}>
                <p className="p-5 pb-1" style={{fontSize: "10px"}}> نبذة عن المشروع </p>
                <h3 className="p-5 pt-0 pb-2" style={{fontSize: "18px", fontWeight: "500"}}> مشروع الموقع لشركة احمد للصياغة </h3>
                <p className="p-5 pt-0" style={{color: "#242424", fontSize: "12px", fontWeight:"400"}}> يستعرض هذا الموقع جميع اعمال شركة احمد من المصوغات الذهبية و الفضية, و يحتوي ايضا على الخدمات المتوفرة و اقسام للأسئلة و الاجوبة و ايضابطاقات و ازرار تساعد على التواصل مع السشركة لغاية الطلب او سؤال الأسئلة </p>
                <div className="flex pr-2" style={{right: "0", justifyContent: "end"}}>
                  <img src={smallGrayLink} className="w-3 h-3 mt-1"/>
                  <p style={{color: "#242424", fontSize:"12px"}} className=" p-3 pt-0 sm:pb-2 pb-24"> أنقر لمعـــاينــة حية   </p>

                </div>
              </div> : 
              <img className="m-3 object-cover rounded-lg overflow-hidden shadow-md myObject" src={Project_card_One} alt="Card Image" onMouseEnter={() => ProjectHover("four")} />
              } 

            {myProjectthree ? 
              <div  className="m-3 object-cover rounded-lg overflow-hidden shadow-md bg-white myObject" style={{width: "100%"}} onMouseLeave={() => ProjectHover("three")}>
                <p className="p-5 pb-1" style={{fontSize: "10px"}}> نبذة عن المشروع </p>
                <h3 className="p-5 pt-0 pb-2" style={{fontSize: "18px", fontWeight: "500"}}> مشروع الموقع لشركة احمد للصياغة </h3>
                <p className="p-5 pt-0" style={{color: "#242424", fontSize: "12px", fontWeight:"400"}}> يستعرض هذا الموقع جميع اعمال شركة احمد من المصوغات الذهبية و الفضية, و يحتوي ايضا على الخدمات المتوفرة و اقسام للأسئلة و الاجوبة و ايضابطاقات و ازرار تساعد على التواصل مع السشركة لغاية الطلب او سؤال الأسئلة </p>
                <div className="flex pr-2" style={{right: "0", justifyContent: "end"}}>
                  <img src={smallGrayLink} className="w-3 h-3 mt-1"/>
                  <p style={{color: "#242424", fontSize:"12px"}} className=" p-3 pt-0 sm:pb-2 pb-24"> أنقر لمعـــاينــة حية   </p>

                </div>
              </div> : 
              <img className="m-3 object-cover rounded-lg overflow-hidden shadow-md myObject"  src={Project_card_One} alt="Card Image" onMouseEnter={() => ProjectHover("three")} />
              } 
          
            </div>

            </div>
            </div>
            <img src={myVector} className="myVector1 hidden lg:flex"/>
            <img src={myVector2} className="myVector2 hidden lg:flex"/>
            <img src={myVector3} className="myVector3 hidden lg:flex"/>

     

            {/* Our Goals and Princples Section  */}

            <h1 className="text-4xl p-10 text-bold pt-20" style={{fontWeight:"600", marginTop:"50px"}} id="GoalsSection">المــبــادئ و الأهـداف</h1>

          <div className="" style={{alignContent:"center", display:"flex", justifyContent:"center"}} >
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3" style={{width:"1140px"}}>


          <div className="flex justify-center">
            <div className=" w-6/2 sm:w-10 overflow-hidden items-center mt-52" id="myBox">

             <div className="lg:flex grid lg:justify-end justify-center p-3 -mb-4">
                 <img class=" h-12 w-12 object-cover mt-5" src={boxImage} alt="Card Image" />
             </div>

              <div className="p-2 justify-end mb-5" >
                <h2 className="text-2xl font-semibold -mb-1 p-2 text-center lg:text-right" style={{direction:"rtl"}}>قصة ,لتجربة فريدة...</h2>
                <p className="p-2 text-center lg:text-right" >نهدف لجعل كل مشروع قصة لتجربة لا تضاهى, نسعى لتحويل كل ثانية يقضيها المستخدم على منصتك, وقتاً مفيداً للجميع - و ايضاً ممتعاً - لتبقى انت و فريقك في اذهانهم لفترة طويلة!</p>
              </div>

              <div className="lg:flex justify-center lg:justify-end item-end -pt-3 pb-28 mr-3 md:grid md:mr-3 grid">
                    <button id="myButton" className="text-sm text-blue-400 h-10 rounded-full bg-white-400 lg:order-0 order-1 mr-0 lg:mr-5" onClick={() => handleClick(1)}> أخر مشروع منجز</button>
                    <button id="myButton" className="text-sm text-white w-56 h-10 rounded-full  lg:order-1 order-0 " style={{backgroundColor: "#61B7EA"}}>مشاهدة الفيديو التعريفي</button>
              </div>

            </div>
            </div>


            <div className="mt-6 ">
                <div className="w-72 mx-auto rounded-lg overflow-hidden mb-8 " style={{backgroundColor:"#61B7EA", boxShadow: "1px 1px 15px 4px #0000000c"}}>

                  <div className="flex justify-end p-3 -mb-4">
                    <img className=" h-12 w-12 object-cover mt-2 mr-2" src={bagIcon} alt="Card Image" />
                  </div>

                  <div className="p-2 justify-end mb-5">
                    <h2 className="text-xl font-semibold -mb-1 p-2 text-white" style={{textAlign:"end"}}>الأحترافية و المهنية</h2>
                    <p className="text-black-600 p-2 text-white">الطابع المهني و الاحترافية تسمو على جميع منتجاتنا و اعمالنا, و ايضا هي اولويتنا في جميع التعاملات, المشاريع و العقود.</p> 
                  </div>

                </div>
    
                <div className="w-72 mx-auto rounded-lg overflow-hidden shadow-md mb-8 " style={{backgroundColor:"#F5FCFF", boxShadow: "1px 1px 15px 4px #0000000c"}}>

                  <div className="flex justify-end p-3 -mb-4">
                    <img className=" h-12 w-12 object-cover mt-2 mr-2"  src={starsIcon} alt="Card Image" />
                  </div>

                  <div className="p-2 justify-end mb-5">
                    <h2 className="text-xl font-semibold -mb-1 p-2" style={{textAlign:"end"}}>الدقة والجودة</h2>
                    <p className="text-black-600 p-2">نحن نضمن الدقة والجودة في كل تفاصيل المواقع الإلكترونية لضمان تحقيق أهدافك وتلبية توقعات عملائك بسهولة وسرعة.</p>      
                  </div>

                </div>
    
                <div className="w-72 mx-auto rounded-lg overflow-hidden shadow-md mb-8 " style={{backgroundColor:"#F5FCFF", boxShadow: "1px 1px 15px 4px #0000000c"}}> 

                  <div className="flex justify-end p-3 -mb-4">
                    <img className=" h-12 w-12 object-cover mt-2 mr-2"  src={clientAssistanceIcon} alt="Card Image" />
                  </div>

                   <div className="p-2 justify-end mb-5">
                    <h2 className="text-xl font-semibold -mb-1 p-2" style={{textAlign:"end"}}> خدمة عملاء مستمرة</h2>
                    <p className="text-black-600 p-2">نحن نفهم أهمية التواصل والاستجابة السريعة لاحتياجات عملائنا. سواء كنت تحتاج إلى دعم فني أو استشارة تقنية، فإن فريقنا دائمًا هنا للمساعدة.</p>      
                  </div>

                </div>
            </div>

             <div className="lg:-ml-28">
              
                <div className="w-72 mx-auto rounded-lg overflow-hidden shadow-md mb-8 " style={{backgroundColor:"#F5FCFF", boxShadow: "1px 1px 15px 4px #0000000c"}}>
                  
                  <div className="flex justify-end p-3 -mb-4">
                    <img className=" h-12 w-12 object-cover mt-2 mr-2" src={myPenIcom} alt="Card Image" />
                  </div>

                  <div className="p-2 justify-end mb-5">
                    <h2 className="text-xl font-semibold -mb-1 p-2" style={{textAlign:"end"}}>أبتكار و تصميم رائع</h2>
                    <p className="text-black-600 p-2">نحن نجمع بين الإبداع والتصميم الاستثنائي لنقدم لك تجربة موقع إلكتروني فريدة تبرز علامتك التجارية بأفضل طريقة.</p>      
                  </div>

                </div>

                <div className="w-72 mx-auto rounded-lg overflow-hidden shadow-md mb-8 " style={{backgroundColor:"#61B7EA", boxShadow: "1px 1px 15px 4px #0000000c"}}>

                  <div className="flex justify-end p-3 -mb-4">
                    <img className=" h-12 w-12 object-cover mt-2 mr-2" src={moneySignIcon} alt="Card Image" />
                  </div>

                  <div className="p-2 justify-end mb-5">
                    <h2 className="text-xl font-semibold -mb-1 p-2 text-white" style={{textAlign:"end"}}>أسعار تنافسية</h2>
                    <p className="text-black-600 p-2 text-white">نحن نجمع بين أمان البيانات والاستدامة التكنولوجية لضمان أداء موقعك بثبات ونجاح, لن يكون عليك القلق حيال اي من الهجمات الألكترونية!</p> 
                  </div>

                </div>

            <div className="w-72 mx-auto rounded-lg overflow-hidden shadow-md mb-8 " style={{backgroundColor:"#F5FCFF", boxShadow: "1px 1px 15px 4px #0000000c"}}>
                  
                <div className="flex justify-end p-3 -mb-3">
                  <img className=" h-10 w-15 object-cover mt-2 mr-2" src={speedIcon} alt="Card Image" />
                </div>

                <div className="p-2 justify-end mb-5">
                  <h2 className="text-xl font-semibold -mb-1 p-2" style={{textAlign:"end"}}>سرعة الانجاز</h2>
                  <p className="text-black-600 p-2">نحن نجمع بين أمان البيانات والاستدامة التكنولوجية لضمان أداء موقعك بثبات ونجاح, لن يكون عليك القلق حيال اي من الهجمات الألكترونية!</p>      
                </div>

               </div>

            </div>

            </div>
            </div>

            </div>
            
            {/* About Us Section */}

            <div className="bg-white pt-20" id="aboutUsSection">
              <div className="flex justify-center ">
              <img className="w-24 h-24 mt-10" src={boxImage} />
              
              </div>

              <div className="flex justify-center ">
              <h1 className="mt-7 -mr-3 text-4xl font-semibold"> عن شـــركتنا</h1>
              
              </div>

              <div className="flex justify-center flex items-center ">
              <p className="mt-7 -mr-3 text-md  longPara "> شركة "داخل الصندوق" أو “IN BOX” هي مجموعة من المبدعين و المختصين في تصميم وتطوير المواقع الإلكترونية. نسعى جاهدين لتحقيق الإبداع والتميز في كل مشروع نقوم به، ونؤمن بأن التصميم والتكنولوجيا يمكن أن تلهم وتحدث تأثيرًا إيجابيًا. فإننا نجمع بين الإبداع والخبرة لتقديم حلول رقمية مخصصة تلبي احتياجات عملائنا بدقة وتساهم في تحقيق أهدافهم على الإنترنت </p>
              </div>

              <div className="flex justify-center flex items-center ">
              <p className="mt-2 -mr-3 text-md  longPara "> نشأت فكرة داخل الصندوق مستلهمة من حاجة العراق الماسة لمواكبة تطور العالم وانتشار التجارة الالكترونية لفوائدها على البلد وقطاعاته المختلفة وانطلاقاً من هذا المبدأ نبني أسس تطورنا وتقدمنا </p>  
              </div>

              <div className="flex justify-center flex items-center ">
              <p className="mt-2 -mr-3 text-md  longPara "> تقدم شركة داخل الصندوق خدمات انشاء المواقع الالكترونية والمواقع التعريفية لمختلف المجالات والتخصصات والمشاريع الصغيرة والمتوسطة بأيادي عراقية وطاقات شابة كفؤة  </p>
              </div>

              <div className="flex justify-center flex items-center ">
              <p className="mt-2 -mr-3 text-md  longPara "> تتخصص شركة داخل الصندوق في تقديم خدماتها للمجال الصحي داخل العراق والقطاع الخاص وتحديدا الشركات الصغيرة والمتوسطة </p>  
              </div>


            </div>

            

            {/* what are you waiting for section */}
            <div className="mySection mt-10"  >

            <div className="bg-white grid lg:flex justify-between p-10 " style={{paddingLeft: myPadding+"%", paddingRight:  myPadding+"%"}}>
              <div className="flex justify-center mb-20 md:mb-0 order-1 lg:order-0">
              <div className="flex">
              <img style={{height: "56px", cursor: "pointer"}} className=" p-5 pt-0 pb-0 -m-3 mt-0 lg:m-5 sm:m-0 " src={whatsapp_Icon} onClick={() => window.location.assign("https://wa.me/+9647858002915")}/>
              <a href="sms:+9647858002915?&body=Hi%2520there%252C%2520I%2527d%2520like%2520to%2520place%2520an%2520order%2520for..." className="p-5 pt-0 pb-0 -m-3 mt-0 lg:m-5 sm:m-0">
               <img style={{ height: "56px", cursor: "pointer" }}  src={phonecall_Icon} alt="Email Agent" />
              </a>
              <a href="mailto:inboxcomp@hotmail.com?subject=From%InBox%Website" className=" p-5 pt-0 pb-0 -m-3 mt-0 lg:m-5 sm:m-0">
                <img style={{height: "56px", cursor: "pointer"}}  src={email_Icon} />
              </a>
              </div>
              </div>


              <div className="order-0 lg:order-1">

              <h1 className="text-bold font-bold text-4xl text-center lg:text-start" style={{direction: "rtl"}}> شتنتظر؟ حصل إستشارة مجانية عن خدماتنا </h1>
              <p className="text-md pt-3 text-center lg:text-start mb-4 mt-2 lg:mt-0 " style={{direction: "rtl"}} > يمكنك الاتصال بنا الان بالطريقة التي تفضلها! </p>

              </div>
            </div>
            </div>
            {/* repetitive questions section */}

{/* 
          {/* contact us section */}

          <div className=" h-30 pt-20" id="ContactUsSection" style={{paddingLeft: paddingLR+"%", paddingRight: paddingLR+"%"}} >

          <h1 className="mt-7 -mr-3 text-4xl font-semibold mt-20 lg:mb-0 mb-5"> صفحاتنا الرسمية </h1>
              
              <div className="flex justify-center flex items-center ">
                <p className="mt-5 -mr-3 text-md  longPara "> الرجاء اختيار احد الطرق السريعة ادناه او ملأ نموذج التواصل, سيتم الرد على رسالتكم في اقرب وقت </p>
              
              </div>

              <div style={{display: "flex", justifyContent: "center"}}>

                <div className=" pt-5 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-20 mb-60" style={{paddingLeft: myPadding+"%", paddingRight:  myPadding+"%"}}>

                <div className="field-div flex justify-end -mb-14 lg:order-2 " >
                    <img className="isntagram-blur-div " style={{paddingLeft: "120px"}} src={instagram_blur} />

                  <div className="p-4"> 
                    
                    
                    <div className="relative mt-2 -mr-3">
                      <p> أنستكرام </p>

                      <div className="flex">
                        <img src={copy_link_bold} style={{cursor: "pointer"}} className="w-4 h-4 mt-2 mr-1" onClick={handleCheckInstagram} />
                        <p style={{direction: "ltr"}} className="mt-1"> inBoxCom@ </p>

                      </div>
                      {checkCopiedInstagram && <div className="copyDiv w-20 h-7 bg-white -ml-20 -mt-7 rounded-md">Copied!</div>}
                    </div>
                  </div>

                  <img className="relative w-20 h-20 m-2 p-2" style={{cursor: "pointer"}} src={instagram_Icon}  onClick={() => window.location.assign("https://www.instagram.com/inbox_team?igsh=dDR2cDYwcG9ubGdt")}/>
                  
                  </div>

                  <div className="field-div flex justify-end -mb-14 lg:order-1" >
                    <img className="isntagram-blur-div " style={{paddingLeft: "120px"}} src={whatsapp_blur} />

                  <div className="p-4 " > 
                    
                    
                    <div className="relative mt-2 -mr-3 " >
                      <p> واتساب </p>

                      <div className="flex">
                        <img src={copy_link_bold} style={{cursor: "pointer"}} className="w-4 h-4 mt-2 mr-1" onClick={handleCheckWhatsapp}/>
                        <p style={{direction: "ltr"}} className="mt-1"> +9647858002915 </p>

                      </div>
                      {checkCopiedWhatsapp && <div className="copyDiv w-20 h-7 bg-white -ml-12 -mt-7 rounded-md absolute">Copied!</div>}
                    </div>
                  </div>

                  <img className="relative w-20 h-20 m-2 p-2" style={{cursor: "pointer"}} src={whatsapp_Icon} onClick={() => window.location.assign("https://wa.me/+9647858002915")}/>
                  
                  </div>

                  <div className="field-div flex justify-end -mb-14 lg:order-1" >
                    <img className="isntagram-blur-div " style={{paddingLeft: "120px"}} src={telegram_blur} />

                  <div className="p-4 "> 
                    
                    
                    <div className="relative mt-2 -mr-3 ">
                      <p> فيسبوك </p>

                      <div className="flex">
                        <img src={copy_link_bold} style={{cursor: "pointer"}} className="w-4 h-4 mt-2 mr-1" onClick={handleCheckFacebook}/>
                        <p style={{direction: "ltr"}} className="mt-1"> IN BOX team  </p>

                      </div>
                      {checkCopiedFacebook && <div className="copyDiv w-20 h-7 bg-white -ml-12 -mt-7 rounded-md absolute">Copied!</div>}
                    </div>
                  </div>

                  <img className="relative w-20 h-20 m-2 p-2" style={{cursor: "pointer"}} src={facebookIcon} onClick={() => window.location.assign("https://www.facebook.com/profile.php?id=61550600312612&mibextid=LQQJ4d")}/>
                  
                  </div>
                </div> 
              </div>
          </div>

          <div className="flex -mt-36 -mb-10" style={{paddingLeft: myPadding+"%", paddingRight:  myPadding+"%"}}>

           <div className="line"> </div>
           <p className="text-center -mt-3 font-semibold" style={{width: "500px", color: "#333333"}}> أو أملأ النــمـوذج الأتي </p> 
           <div className="line"> </div>

          </div>

          


          <form className="" ref={form} onSubmit={sendEmail}>
            <div className="">
              <input name="user_email" placeholder="البريد الألكتروني" type="email" className="myButton0 myInput h-14 m-3 mb-1 " required/>
              <input name="user_lastName" placeholder="الأسم الأخير" type="text" className="myButton1 myInput h-14 m-3 mb-1" required/>
              <input name="user_firstName"  placeholder="الأسم الأول" type="text" className="myButton2 myInput h-14 m-3 mb-1" required/>
            </div>

            <div className="">
              <input name="user_companyName" placeholder="أسم الشركة/المؤسسة" type="text" className="myButton3 myInput h-14 m-3 mb-1" required />
              <input name="user_companyLocation" placeholder="موقع الشركة/المؤسسة"  className="myButton4 myInput h-14 m-3 mb-1"  required/>
              <input name="message_title" placeholder="عنوان الرسالة" type="text" className="myButton5 myInput  h-14 m-3 mb-1" required/>
            </div>

            <div>
              <input name="message_content" type="text" className="myButton6 myInput h-14 m-3" placeholder=" الرسالة "  required/>
            </div>

    
            


          <div className="flex justify-start mySendingButton-div mb-20" style={{paddingLeft: myPadding+"%", paddingRight:  myPadding+"%"}}> 
          <button className="mySendingButton p-14 pt-3 pb-3 text-white " href="mailto:sajadkenani999@gmail.com"> أرســـال </button>
          </div>
          </form>


        </div>
        </ScrollProvider>
    )
}
