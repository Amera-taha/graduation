import axios from "axios"
import { useQuery } from "react-query"
import { GridLoader } from "react-spinners"


const Categories = () => {
  async function Allcategories(){
   
    return  await axios.get("https://ecommerce.routemisr.com/api/v1/categories")

   
}
const {isLoading , error , data} = useQuery("categories" ,Allcategories,)

if(isLoading){
return <div className="h-screen bg-white-400 flex flex-wrap justify-center items-center">

<GridLoader color="green" />
</div> 
}
  return (
    <>
      <div className="mx-auto py-6 md:w-[90%]">
        <div  className="flex gap-5 flex-wrap justify-center items-center">
          {data?.data.data.map(function(categories,idx) {
            return<div key={idx} className="w-full  sm:w-1/1 md:w-1/3 lg:w-1/3  max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            

<div className=" bg-white border duration-200  transition d border-gray-200 rounded-lg hover:shadow-md hover:shadow-green-600 dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg h-[300px] w-full" src={categories.image} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-green-700 dark:text-white">{categories.name} </h5>
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

export default Categories
