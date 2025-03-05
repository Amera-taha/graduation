import axios from "axios";
import { useQuery } from "react-query";
import Slider from "react-slick";

const CategoriesSlider = () => {
    async function AllCategories(){
   
        return  await axios.get("https://ecommerce.routemisr.com/api/v1/categories")
  
       
    }
    const { data} = useQuery("Categories" ,AllCategories ,)

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed:1000
      };
  return (
    <div className="py-7">
    <Slider {...settings}>
        {data?.data.data.map(function(item ,idx) {
          return <div key={idx}>
          <img src={item.image} className=" w-full h-[200px]" alt="" />
          <h1 className="text-green-600 text-center font-bold ">{item.name}</h1>
          </div>
          
          })}
    </Slider>
        </div>
  )
}

export default CategoriesSlider
