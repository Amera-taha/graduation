
import Slider from "react-slick";
import Slider1 from "./../../images/XCM_Manual_1396328_4379575_Egypt_EG_BAU_GW_DC_SL_Bags_Wallets_379x304_1X._SY304_CB650636675_.jpg";
import Slider2 from "./../../images/1681511179514.png";
import img1 from "./../../images/1681511156008.png";
import img2 from "./../../images/1681511392672.png";

 
 const HomeSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay:true
      };
      return (
        <section className="py-7 mb-5 mx-auto md:w-[90%]">
       
            <div className="py-4 mb-2 flex flex-wrap justify-center items-center">
        <div className="w-2/3">
    <Slider {...settings}>
      <div className=" ">
<img src={Slider1} className=" w-full h-[400px]" alt="" />
      </div>
      <div className=" ">
<img src={Slider2} className="w-full h-[400px]" alt="" />
      </div>
     
      
    </Slider>
    </div>
          <div className="w-1/3">
        <img src={img1}  className="w-full h-[200px]" alt="" />
        <img src={img2}  className="w-full h-[200px] " alt="" />
          </div>
            </div>
        
         </section>
       
      ); }
 
 export default HomeSlider
 