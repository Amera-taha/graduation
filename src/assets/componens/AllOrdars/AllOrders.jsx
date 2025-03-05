import axios from "axios";
import { jwtDecode } from "jwt-decode"
import { useQuery } from "react-query";
import { GridLoader } from "react-spinners";

const AllOrders = () => {


  const {id} = jwtDecode(localStorage.getItem("token"))
   const {isLoading,data} = useQuery("AllOrders" , AllOrders)
   console.log(data);
   
  async function AllOrders(){
   
    return  await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)

   
}
if(isLoading){
  return <div className="h-screen bg-white-400 flex flex-wrap justify-center items-center">
  
  <GridLoader color="green" />
  </div> 
}
  return (
    <div className="py-8 px-5 mx-auto md:w-[80%]">
      {data?.data.map(function(Order,idx){
        return <div key={idx} className="bg-slate-100 p-8 mb-4">
        <h1 className=" text-1xl  font-bold ">Totel order price : <span className="text-green-600">{Order.totalOrderPrice} EGP</span></h1>
        <h2 className=" text-1xl  font-bold py-2">payment Method Type: <span className="text-green-600">{Order.paymentMethodType}</span></h2>

        <div className="flex gap-4  flex-wrap justify-center items-center">
           {Order?.cartItems.map(function(item,idx){
            return <div key={idx} className="p-2 w-1/6">
            <img src={item.product.imageCover} className="w-full" alt={item.product.title} />
          <h2 className=" text-1xl text-green-600 py-2"> price:{item.price} EGP</h2>
            </div>
           })}
        </div>
        </div>
      })}
    </div>
  )
}

export default AllOrders
