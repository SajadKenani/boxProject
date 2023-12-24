import "./footerContent.css";

import footerBoxIcon from "./images/footer-box-image.png";

const myPadding = 10;

export const FooterContent = () => {

    return (
        <div>
            <div className=" grid grid-cols-1 lg:grid-cols-2 p-10" style={{paddingLeft: myPadding+"%", paddingRight:  myPadding+"%", zIndex: "231312", position: "relative", backgroundColor: "#242424"}}>

                <div className="grid grid-cols-1 md:grid-cols-2 mr-0 lg:-mr-44 lg:order-1 order-2">

                    <div className="grid mb-10 lg:mb-0"> 

                    <h1 className="pb-6 text-center lg:text-end font-semibold" style={{color: "#FCFCFC"}}> التــواصل الأجتماعي</h1>

                    <a href="#" className=" pb-4 text-center lg:text-end" style={{color: "#FCFCFC"}}> فــيسبوك </a>
                    <a href="#" className=" pb-4 text-center lg:text-end" style={{color: "#FCFCFC"}}> أنستاكــرام </a>
                    <a href="#" className=" pb-4 text-center lg:text-end" style={{color: "#FCFCFC"}}> واتس اب </a>
                    <a href="#" className=" pb-4 text-center lg:text-end" style={{color: "#FCFCFC"}}> موقعــنا </a>
                    <a href="#" className=" pb-4 text-center lg:text-end" style={{color: "#FCFCFC"}}> البريد الألكتروني </a>


                    </div>

                    <div className="grid">

                    <h1 className="pb-6 text-center lg:text-end font-semibold" style={{color: "#FCFCFC"}}> روابط مفــيدة </h1>

                    <a href="#" className=" pb-4 text-center lg:text-end" style={{color: "#FCFCFC"}}> الــرجوع الى الأعلى </a>
                    <a href="#" className=" pb-4 text-center lg:text-end" style={{color: "#FCFCFC"}}> التواصل معنا </a>
                    <a href="#" className=" pb-4 text-center lg:text-end" style={{color: "#FCFCFC"}}> الوظائف و التقديم </a>
                    <a href="#" className=" pb-4 text-center lg:text-end" style={{color: "#FCFCFC"}}> القيم و المبادئ </a>
                    <a href="#" className=" pb-4 text-center lg:text-end" style={{color: "#FCFCFC"}}> تسجيل الدخول </a>
                    
                    
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
                <p className="text-center p-2"> جميع الحقـوق محفوظة لشركة داخل الصندوق • 2023 © </p>

            </div>
        </div>
    )
}