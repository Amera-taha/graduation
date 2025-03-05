import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"
import { CartContext } from "../Context/CrartContext"



const Navbar = () => {
const {numOfItem} = useContext(CartContext)
  const {token , setToken} =  useContext(AuthContext)
  const Navigate = useNavigate()
  function logout(){
  localStorage.removeItem("token")
  setToken(null)
  Navigate("/Login")
  }
  return (
    <div>
<nav className="bg-gray-50 border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <NavLink className="flex items-center space-x-3 rtl:space-x-reverse">
      <i className="fa-solid fa-cart-shopping nav-icon text-3xl text-green-700"></i>
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">fresh cart      </span>
  </NavLink>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 ">
    {token ? <>
     <NavLink to="/Cart" className="relative">
     <i className="fa-solid fa-cart-shopping text-2xl"></i>
      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-green-700 border-2 border-white rounded-full -top-4 -end-4">{numOfItem}</div>
     </NavLink>

    <li>
        <NavLink onClick={logout} className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:text-blue-500 dark:text-white md:dark:hover:bg-transparent dark:border-gray-700">Log out</NavLink>
      </li>
    </>: <>
    <li>
        <NavLink to="/Register" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Register</NavLink>
      </li>
    <li>
        <NavLink to="/Login" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Log in</NavLink>
      </li>
    </>
      }
    
    </ul>
      
      <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
     
     {token ? <>
     <li>
        <NavLink to="/Home" className="block py-2 px-3 md:p-0 text-white bg-dark-700 rounded-sm md:bg-transparent md:text-green-700 md:dark:text-green-500" aria-current="page">Home</NavLink>
      </li>
      <li>
        <NavLink to="/Cart" className="relative block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
        Cart
        </NavLink>
      </li>
    
      <li>
        <NavLink to="/products" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">products</NavLink>
      </li>
      <li>
        <NavLink to="/Categories" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
        catrgories</NavLink>
      </li>
      <li>
        <NavLink to="/Brands" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Brands</NavLink>
      </li> 
      <li>
        <NavLink to="/allorders" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Allorders</NavLink>
      </li> 
     </> :"" }
      
     
       
    </ul>
  </div>

  </div>
</nav>

    </div>
  )
}

export default Navbar
