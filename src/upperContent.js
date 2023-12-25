import "./upperContent.css"
import Logo from "./images/Logo.webp"

import menu from "./images/menu.webp"

import { useState, useEffect, useRef } from "react"

export const UpperContent = () => {

    const [myPadding, setmypadding] = useState(window.innerWidth > 640 ? 10 : 2);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const [activatedmenu, useactivatedmenu] = useState(false);

    const barRef = useRef();
    const shadowRef = useRef();

    const  activateMenu = () => {

      if (barRef.current){
        barRef.current.classList.replace("hide-bar", "side-bar");}
 
      if (shadowRef.current){
        shadowRef.current.classList.replace("hide-shadow", "shadow-div");}


      setTimeout(() => useactivatedmenu(!activatedmenu), 0);
      

    }

    const leaveBar = () => {
      if (barRef.current){
        barRef.current.classList.replace("side-bar", "hide-bar");}
 
      if (shadowRef.current){
        shadowRef.current.classList.replace("shadow-div", "hide-shadow");}

      setTimeout(() => useactivatedmenu(!activatedmenu), 490);
    }
  
  // Function to handle window resize
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    // Additional logic based on the width change
    if (window.innerWidth > 640) {
      setmypadding(10)
    } else {
      setmypadding(-5)
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
  


    return (
        <div className=" fixed" style={{ backgroundColor:"#F5FCFF", zIndex: "14343222", width: "100%", paddingLeft: myPadding+"%", paddingRight:  myPadding+"%"}}>

        {activatedmenu && 
          <div>
            <div className="fixed bg-white side-bar bar pt-10 p-6 " ref={barRef} style={{height: "100%", left: "0", zIndex: "321"}}>
              <h1 className="text-end text-2xl"> القائمة الرئــيسية </h1>

              <div className="grid pt-4">
                <a className="text-end pt-3"> أتصل بنا </a>
                <a className="text-end pt-3"> أراء العملاء </a>
                <a className="text-end pt-3"> الخدمات </a>
                <a className="text-end pt-3"> مشاريعنا </a>
                <a className="text-end pt-3"> عن الشركة </a>

                <a className="text-end pt-6" style={{color: "#2997D8"}}> التواصل مع المبيعات </a>
              </div>

            </div>
            <div className="fixed shadow-div shadow" ref={shadowRef} onClick={() => leaveBar()} style={{width: "100%", height: "100%", right: "0", backgroundColor: "rgba(0, 0, 0, 0.226)"}}></div>
          </div>
        }


        <nav class="p-4">
        <div class="container mx-auto flex justify-between items-center">
    
        

  
        <div class="hidden lg:flex space-x-9 ">
            <a href="#" class="-m-1.5 text-sm text-white w-40 h-10 rounded-full bg-blue-400 p-2 flex items-center justify-center " >التواصل مع المبيعات</a>
 
            <a href="#" className="text-black">عن الشركة</a>
            <a href="#" class="text-black">مشاريعنا</a>
            <a href="#" class="text-black">الخدمات</a>
            <a href="#" class="text-black">أسألة مكررة</a>
            <a href="#" class="text-black">أتصل بنا</a>

            
        </div>

        <div id="mobile-menu" class="lg:hidden w-16 p-4" onClick={() => activateMenu()}><img src={menu}/></div> 
        <div>
            <img href="#" src={Logo} className="w-44 h-8"/>
        </div>


            </div>
        </nav>




    </div>
    )
}
