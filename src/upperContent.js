import "./upperContent.css"
import Logo from "./images/Logo.png"

import menu from "./images/menu.png"

import { useState, useEffect } from "react"

export const UpperContent = () => {

    const [myPadding, setmypadding] = useState(window.innerWidth > 640 ? 10 : 2);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
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

        <div id="mobile-menu" class="lg:hidden w-16 p-4"><img src={menu}/></div> 
        <div>
            <img href="#" src={Logo} className="w-44 h-8"/>
        </div>


            </div>
        </nav>




    </div>
    )
}
