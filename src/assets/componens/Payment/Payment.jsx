import { useContext, useState } from "react"
import { CartContext } from "../Context/CrartContext"
import axios from "axios"

const Payment = () => {
const {cartId,setisnumOfItem,
    setistotalPrice,
    setisProducts} = useContext(CartContext)

    const [Loading, setLoading] = useState(false)
    const [details, setDetails] = useState("")
    const [phone, setphone] = useState("")
    const [city, setcity] = useState("")

    async function CashPayment (){
    setLoading(true)
        const AllOrders = {
            shippingAddress:{
                details: details,
                phone: phone,
                city: city
                }
        }
        try{
            const { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}` ,AllOrders,
        {
          headers:{
            token:localStorage.getItem("token")
        }
        } )
        setisnumOfItem(0)        
          setisProducts([])
          setistotalPrice(0)
          setLoading(false)

        } catch(error){
          console.log(error);
          setLoading(true)

        }
        console.log(AllOrders);
        
    }
    async function CashOnline (){
        const AllOrders = {
            shippingAddress:{
                details: details,
                phone: phone,
                city: city
                }
        }
        try{
            const { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}` ,AllOrders,
        {
          headers:{
            token:localStorage.getItem("token")
        },
            params:{
                url:"http://localhost:5173"
            }
        
         } )
            window.open(data.session.url)
        } catch(error){
          console.log(error);
        }
        
    }
  return (
    <div>
      <div  className="max-w-md mx-auto py-8">

        {/* inpout Details */}
<div className="relative z-0 w-full mb-5 group">
      <input onChange={(e)=> setDetails(e.target.value)} type="text" name="Details" id="Details" className="block  py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"  />
      <label htmlFor="Details" className="font-bold text-4xl peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Details :</label>
  </div>
        {/* inpout phone */}
<div className="relative z-0 w-full mb-5 group">
      <input onChange={(e)=> setphone(e.target.value)} type="tell" name="phone" id="phone" className="block  py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"  />
      <label htmlFor="phone" className="font-bold text-4xl peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> phone :</label>
  </div>
        {/* inpout city */}
<div className="relative z-0 w-full mb-5 group">
      <input onChange={(e)=> setcity(e.target.value)} type="text" name="city" id="city" className="block  py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"  />
      <label htmlFor="city" className="font-bold text-4xl peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> city :</label>
  </div>

  <button onClick={CashPayment} type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
       {Loading ? <i className="fa-solid fa-spin fa-spinner text-white"></i> : "Pay Now "}
    </button>
  <button onClick={CashOnline} type="submit" className="text-white mx-4 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
       {Loading ? <i className="fa-solid fa-spin fa-spinner text-white"></i> : "Online payment "}
    </button>

      </div>
    </div>
  )
}

export default Payment
