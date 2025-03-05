import axios from "axios"
import { useQuery } from "react-query"
import { GridLoader } from "react-spinners"


const Brands = () => {
  async function AllBrands(){
   
    return  await axios.get("https://ecommerce.routemisr.com/api/v1/brands")

   
}
const {isLoading , error , data} = useQuery("brands" ,AllBrands,)

if(isLoading){
return <div className="h-screen bg-white-400 flex flex-wrap justify-center items-center">

<GridLoader color="green" />
</div> 
}
  return (
    <>
      <div className="mx-auto py-6 md:w-[90%]">
        <h1 className="text-center py-7 font-bold text-4xl text-green-700">All Brands</h1>
        <div  className="flex gap-5 flex-wrap justify-center items-center">
          {data?.data.data.map(function(brands,idx) {
            return<div key={idx} className="w-full  sm:w-1/1 md:w-1/4 lg:w-1/5  max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            

<div className=" bg-white border duration-200  transition border-gray-200 rounded-lg hover:shadow-md hover:shadow-green-600 dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg h-[200px] w-full" src={brands.image} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-xl font-bold text-center tracking-tight text-gray-700 dark:text-white">{brands.name} </h5>
        </a>
       
    </div>
</div>

          
            </div>
          },[])}

        </div>

      </div> 
    </>
  )
}

export default Brands
