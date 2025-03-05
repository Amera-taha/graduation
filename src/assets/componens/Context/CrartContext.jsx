import axios from "axios"
import { createContext, useContext, useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"

export const CartContext = createContext()
const CrartContextProvder = ({children}) => {

  const {token} = useContext(AuthContext)
  const [Products, setisProducts] = useState(0)
  const [numOfItem, setisnumOfItem] = useState(0)
  const [totalPrice, setistotalPrice] = useState(0)
  const [Loading, setLoading] = useState(false)
  const [cartId, setcartId] = useState(null)


    async function AddToCart(id){
        try{
            const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/cart" ,
            {
                productId: id
            },
            {
                headers:{
                    token:localStorage.getItem("token")
                }
            }
        )
        getUser()
        return data
        } catch(error){
        console.log(error);

        }
        
  
       
    }

    async function getUser(){
      setLoading(true)
      try{
          const { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/cart" ,
          {
              headers:{
                  token:localStorage.getItem("token")
              }
          })
          setisnumOfItem(data.numOfCartItems)        
          setisProducts(data.data.products)
          setistotalPrice(data.data.totalCartPrice)
          setLoading(false)
          setcartId(data?.data?._id)
      } catch(error){
console.log(error);
setLoading(false)


      }
      

     
  }
    async function upDateCount(id ,count){
      
      try{
          const { data } = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}` ,
         {
          count:count
         },
      {
        headers:{
          token:localStorage.getItem("token")
      }
      } )
        setisnumOfItem(data.numOfCartItems)        
          setisProducts(data.data.products)
          setistotalPrice(data.data.totalCartPrice)
      } catch(error){
        console.log(error);
      }
  }
    async function deletItem(id){
      
      try{
          const { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}` ,
      {
        headers:{
          token:localStorage.getItem("token")
      }
      } )
        setisnumOfItem(data.numOfCartItems)        
          setisProducts(data.data.products)
          setistotalPrice(data.data.totalCartPrice)
        
      } catch(error){
        console.log(error);
      }
  }
    async function ClearItem(){
      
      try{
          const { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart` ,
      {
        headers:{
          token:localStorage.getItem("token")
      }
      } )
        setisnumOfItem(0)        
          setisProducts([])
          setistotalPrice(0)
      } catch(error){
        console.log(error);
      }
  }

  useEffect(function() {
    if(token !== null){
      getUser()
    }
    
  }, [token])
  return (
    <CartContext.Provider value={
        { AddToCart,
          Products,
          numOfItem,
          totalPrice,
          Loading,
          upDateCount,
          deletItem,
          ClearItem,
          cartId,
          setisnumOfItem,
          setistotalPrice,
          setisProducts
         }
    }>
      {children}
    </CartContext.Provider>
  )
}

export default CrartContextProvder
