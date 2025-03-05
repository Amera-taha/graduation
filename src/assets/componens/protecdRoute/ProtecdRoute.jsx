import { Navigate } from "react-router-dom"



const ProtecdRoute = ({ children }) => {
   if(localStorage.getItem("token") == null){
      return <Navigate to={"/Login"}/>
   }
   return (
      <>
      {children}
      </>
   )
 
}

export default ProtecdRoute
