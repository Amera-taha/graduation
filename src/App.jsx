import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./assets/componens/Home/Home"
import Products from "./assets/componens/Products/Products"
import Brands from "./assets/componens/Brands/Brands"
import Register from "./assets/componens/Register/Register"
import Categories from "./assets/componens/Categories/Categories"
import Cart from "./assets/componens/Cart/Cart"
import Erro from "./assets/componens/Error/Erro"
import Layout from "./assets/componens/Layout/Layout"
import Login from "./assets/componens/Login/Login"
import { Toaster } from "react-hot-toast"
import AuthContextprovider from "./assets/componens/Context/AuthContext"
import { QueryClient, QueryClientProvider } from "react-query"
import ProdactsDatiles from "./assets/componens/ProdactsDatiles/ProdactsDatiles"
import CrartContextProvder from "./assets/componens/Context/CrartContext"
import Payment from "./assets/componens/Payment/Payment"
import AllOrders from "./assets/componens/AllOrdars/AllOrders"
import ProtecdRoute from "./assets/componens/protecdRoute/ProtecdRoute"






const App = () => {

   const x = new QueryClient()
   const router = createBrowserRouter([
    {path:"" , element : <Layout/> , children:[
      {path:"/" , element :  <Login/>},
      {path:"/Home" , element : <ProtecdRoute><Home/></ProtecdRoute> },
      {path:"*" , element : <Erro/>}, 
    {path:"/Cart" , element : <ProtecdRoute><Cart/></ProtecdRoute>},
    {path:"/Brands" , element : <ProtecdRoute><Brands/></ProtecdRoute> },
    {path:"/products" , element : <ProtecdRoute><Products/></ProtecdRoute>},
    {path:"/Categories" , element :<ProtecdRoute><Categories/></ProtecdRoute>},
    {path:"/Payment" , element :<Payment/>},
    {path:"/allorders" , element :<ProtecdRoute><AllOrders/></ProtecdRoute>},
    {path:"/ProdactsDatiles/:id" , element :<ProdactsDatiles/>},
    {path:"/Register" , element : <Register/>},
    {path:"/Login" , element : <Login/>},
       
    ]},
    
  ])
  return (
    <QueryClientProvider client={x} >
    <AuthContextprovider>
    <CrartContextProvder>
      <Toaster/>
      <RouterProvider router={router}/>
      </CrartContextProvder>
    </AuthContextprovider>
    </QueryClientProvider>
  )
}

export default App
