import { useContext } from "react"
import { CartContext } from "../Context/CrartContext"
import { GridLoader } from "react-spinners"
import { Link } from "react-router-dom"


const Cart = () => {
  const {Products,totalPrice,numOfItem,Loading, upDateCount ,deletItem,ClearItem} = useContext(CartContext)
  if(Loading){
    return <div className="h-screen bg-white-400 flex flex-wrap justify-center items-center">
    
    <GridLoader color="green" />
    </div> 
  }
  return (
    <div className="p-5 mx-auto md:w-[90%] mt-5 bg-slate-100">
       <div className=" flex justify-between items-center p-5">
        <div>
        <h1 className="font-bold text-2xl">Cart Shop </h1>
        <h4 className=" text-xl mt-4">total price:  <span className=" text-xl mt-4 text-green-700">{totalPrice}</span></h4>
        </div>
        <div>
        <Link to={"/Payment"} type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none">Check Out</Link>
        <h4 className=" text-xl mt-4 ">total number of items: <span className=" text-xl mt-4 text-green-700">{numOfItem}</span></h4>
        </div>
       </div>


       <div className="parent mt-3">

        {Products?.map(function(item ,idx) {
          return <div key={idx} className="chaild flex flex-wrap justify-center items-center pb-3 border-b-[1px] border-dotted  border-slate-500">
          <div className="img w-1/6">
          <img src={item.product.imageCover} className="w-full p-2" alt="" />
          </div>
          <div className="content w-4/6">
          <h5 className="text-1xl mb-4 font-semibold tracking-tight text-green-700 dark:text-white">{item.product.title}</h5>
          <p className="text-sm font-bold text-gray-900 dark:text-white mb-4">{item.price}EGP</p>
          <button onClick={ ()=> deletItem(item.product._id)} className="text-red-600">
          <i className="fa-solid fa-trash "></i>
          Remove
          </button>
          </div>
          <div className="count w-1/6 flex flex-wrap justify-center items-center">
  
          <button onClick={ ()=> upDateCount(item.product._id,item.count + 1)} type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">+</button>
  
            <h3 className="px-1">{item.count}</h3>
            <button  onClick={ ()=> upDateCount(item.product._id,item.count - 1)} type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">-</button>
  
          </div>
          </div>
        })}
        
       </div>
       <button onClick={ClearItem} className="mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-green-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
Clear your Cart
</span>
</button>
    </div>
  )
}

export default Cart
