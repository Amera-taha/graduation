import axios from "axios"
import { useContext, useState } from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { GridLoader } from "react-spinners"
import { CartContext } from "../Context/CrartContext"
import toast from "react-hot-toast"

const ProdactsDatiles = () => {
    const {id}  = useParams()

    const  {AddToCart} = useContext(CartContext);
      const [Loading, setLoading] = useState(false)
    
    async function AddCart(){
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
    
    async function AllProdactsDatiles(){
   
        return  await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)

    }
    const { data , isLoading} = useQuery(`ProdactsDatiles${id}` ,AllProdactsDatiles ,)

    if(isLoading){
        return <div className="h-screen bg-white-400 flex flex-wrap justify-center items-center">
        
        <GridLoader color="green" />
        </div> 
      }
  return (
    <div className="md:w-[80%] mx-auto"> 
      <div className="flex flex-wrap items-center">
       <div className="md:w-1/3 p-5">
       <div>
        <img src={data.data.data.imageCover} className="" alt="" />
       </div>
       </div>
       <div className="md:w-2/3 p-5">
       <div>
             <h1 className="text-3xl mb-4 font-bold">{data.data.data.title}</h1>   
             <p className=" mb-6">{data.data.data.description}</p>
             <div className="flex items-center justify-between space-x-1 mt-2.5 mb-5">
        <span className="text-sm font-bold text-gray-900 ">{data.data.data.price}EGP</span>
            <div className="flex items-center   rtl:space-x-reverse">
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">{data.data.data.ratingsAverage}</span>

            </div>
        </div>
        <div className="flex items-center justify-between">
            <a onClick={AddCart} href="#" className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            {Loading ? <i className="fa-solid fa-spin fa-spinner text-white"></i> : "Add to cart"}
            </a>
        </div>
   </div>
       </div>
      </div>
    </div>
  )
}

export default ProdactsDatiles
