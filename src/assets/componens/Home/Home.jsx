import axios from "axios";
import { useQuery } from "react-query";
import { GridLoader } from "react-spinners";
import CategoriesSlider from "../HomeSlider/CategoriesSlider";
import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CrartContext";
import toast from "react-hot-toast";
import HomeSlider from "../HomeSlider/HomeSlider";




const Home = () => {

  const  {AddToCart} = useContext(CartContext);
      const [Loading, setLoading] = useState(false)
    
   
    async function AddCart(id){
        setLoading(true)
        const data = await AddToCart(id)
        if(data.status == "success"){
            toast.success(data.message)
            setLoading(false)
        }else{
            toast.error("error")
            setLoading(false)

        }
        
    }
  async function AllProdacts(){
   
      return  await axios.get("https://ecommerce.routemisr.com/api/v1/products")

     
  }
const {isLoading  , data} = useQuery("prodacts" ,AllProdacts ,)
if(isLoading){
  return <div className="h-screen bg-white-400 flex flex-wrap justify-center items-center">
  
  <GridLoader color="green" />
  </div> 
}
  return (
    <>
    
      <HomeSlider/>
              <CategoriesSlider/>

        <div className="mx-auto md:w-[90%]">
        
        <div  className="flex gap-4  flex-wrap justify-center items-center">
          {data?.data.data.map(function(product,idx) {
            return<div key={idx} className="col w-full hover:shadow-md hover:shadow-green-600 duration-200  transition sm:w-1/2 md:w-1/3 lg:w-1/5  max-w-sm bg-white rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">

          <Link to={`/ProdactsDatiles/${product.id}`}>
          <a href="#">
        <img className="p-8 rounded-t-lg h-[400px] w-full mb-4" src={product.imageCover} alt={product.category.name} />
    </a>
    <div className="px-2 pb-4 ">
        <a href="#">
            <h5 className="text-1xl mb-4 font-semibold tracking-tight text-green-700 dark:text-white">{product.category.name}</h5>
            <h5 className="text-md font-semibold tracking-tight text-gray-700 dark:text-white">{product.title.split(" ").splice(0,2).join(" ")}</h5>
        </a>
        <div className="flex items-center justify-between space-x-1 mt-2.5 mb-5">
        <span className="text-sm font-bold text-gray-900 dark:text-white">{product.price}EGP</span>
            <div className="flex items-center   rtl:space-x-reverse">
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">{product.ratingsAverage}</span>

            </div>
        </div>
        
    </div>
          </Link>
          <div className="text flex items-center justify-between">
          <div onClick={function(){
            AddCart(product.id)
          }} className="flex items-center justify-between mb-4 mx-2">
            <a href="#" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add to cart</a>
        </div> 
        <div className="heart mx-2">
        <NavLink>
          <button>
            {setLoading ? <i className="fa-solid fa-heart  text-3xl"></i> :<i className="fa-solid fa-heart text-red-600 text-3xl"></i>}
                      

          </button>
        </NavLink>
        </div>
          </div>
          
        
            </div>
          },[])}

        </div>

      </div> 
      
       
      



      
    </>
  )
}

export default Home
