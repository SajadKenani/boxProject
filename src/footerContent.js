import "./footerContent.css";

import footerBoxIcon from "./images/footer-box-image.png";


import { useState, useEffect, useRef, useContext } from "react"

import { useScrollContext } from './ScrollContext';

const myPadding = 10;

export const FooterContent = () => {

    const { scrollToSection } = useScrollContext();

    const handleClick = (myNum) => {
        scrollToSection(myNum);
       
     
      }
      
      const navMainRef = useRef()
      const navGoals = useRef()
      const navProductRef = useRef()
    
      const captureMain = () => {if (navMainRef.current){ navMainRef.current.classList.replace("p", "pointerDiv");}}
      const leaveMain = () => {if (navMainRef.current){  navMainRef.current.classList.replace("pointerDiv", "p") }}
    
      const captureGoals = () => {if (navGoals.current){ navGoals.current.classList.replace("p", "pointerDiv");}}
      const leaveGoals = () => {if (navGoals.current){  navGoals.current.classList.replace("pointerDiv", "p") }}
    
      const captureAboutUs = () => {if (navProductRef.current){ navProductRef.current.classList.replace("p", "pointerDiv");}}
      const leaveAboutUs = () => {if (navProductRef.current){  navProductRef.current.classList.replace("pointerDiv", "p") }}
    
      const captureContactUs = () => {if (navProductRef.current){ navProductRef.current.classList.replace("p", "pointerDiv");}}
      const leaveContactUs = () => {if (navProductRef.current){  navProductRef.current.classList.replace("pointerDiv", "p") }}
    

    return (
        <div>
            <div className=" grid grid-cols-1 lg:grid-cols-2 p-10" style={{paddingLeft: myPadding+"%", paddingRight:  myPadding+"%", zIndex: "231312", position: "relative", backgroundColor: "#242424"}}>

                <div className="grid grid-cols-1 md:grid-cols-2 mr-0 lg:-mr-44 lg:order-1 order-2">

                    <div className="grid mb-10 lg:mb-0"> 

                    <h1 className="pb-6 text-center lg:text-end font-semibold" style={{color: "#FCFCFC"}}> التــواصل الأجتماعي</h1>

                    <a  className=" pb-4 text-center lg:text-end" style={{color: "#FCFCFC"}} onClick={() => window.location.assign("https://www.facebook.com/profile.php?id=61550600312612&mibextid=LQQJ4d")}> فــيسبوك </a>
                    <a  className=" pb-4 text-center lg:text-end" style={{color: "#FCFCFC"}} onClick={() => window.location.assign("https://www.instagram.com/inbox_team?igsh=dDR2cDYwcG9ubGdt")}> أنستاكــرام </a>
                    <a  className=" pb-4 text-center lg:text-end" style={{color: "#FCFCFC"}} onClick={() => window.location.assign("https://wa.me/+9647858002915")}> واتس اب </a>
                    <a  className=" pb-4 text-center lg:text-end" style={{color: "#FCFCFC"}} onClick={() => window.location.assign("https://www.inboxcompany.com/")}> موقعــنا </a>
                    <a href="mailto:inboxcomp@hotmail.com?subject=From%20InBox%20Website" className=" pb-4 text-center lg:text-end" style={{color: "#FCFCFC"}}> البريد الألكتروني </a>


                    </div>

                    <div className="grid">

                    <h1 className="pb-6 text-center lg:text-end font-semibold" style={{color: "#FCFCFC"}}> روابط مفــيدة </h1>

                    <a className=" pb-4 text-center lg:text-end" style={{color: "#FCFCFC", zIndex: "3424"}} onClick={() => handleClick(0)} onMouseEnter={captureMain} onMouseLeave={leaveMain}> الــرجوع الى الأعلى </a>
                    <a className=" pb-4 text-center lg:text-end" style={{color: "#FCFCFC", zIndex: "3424"}} onClick={() => handleClick(3)} onMouseEnter={captureContactUs} onMouseLeave={leaveContactUs}> التواصل معنا </a>
                    <a className=" pb-4 text-center lg:text-end" style={{color: "#FCFCFC", zIndex: "3424"}}> الوظائف و التقديم </a>
                    <a className=" pb-4 text-center lg:text-end" style={{color: "#FCFCFC", zIndex: "3424"}} onClick={() => handleClick(4)} onMouseEnter={captureGoals} onMouseLeave={leaveGoals}> القيم و المبادئ </a>
                    <a className=" pb-4 text-center lg:text-end" style={{color: "#FCFCFC", zIndex: "3424"}}> تسجيل الدخول </a>
                    
                    
                    </div>
                    


                </div>

                <div className="flex lg:justify-end justify-center  gap-0 -mt-9 lg:mb-0 mb-10  lg:order:2 order-1">
                    <div> 
                        <div className="flex justify-center lg:justify-end pb-5 ">
                         <img className="w-48  pt-10" src={footerBoxIcon} />
                       </div>

                       <div className="w-72 ">
                         <p className=" text-center lg:text-start" style={{color: "#FCFCFC"}}> هي شركة تأسست في مطلع عام 2023, هدفها انشاء تجارب مستخدم لمشاريع ناجحة و مؤثرة </p>
                       </div>

                    </div>
                </div>

            </div>

            <div>
                <p className="text-center p-2"> جميع الحقـوق محفوظة لشركة داخل الصندوق • 2024 © </p>

            </div>
        </div>
    )
}
