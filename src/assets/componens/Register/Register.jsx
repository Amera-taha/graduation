import axios from "axios"
import { useFormik } from "formik"
import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import * as Yup from "yup"


const Register = () => {
  

  const Navigate = useNavigate()
  const [isLoading, setisisLoading] = useState(false)
    const user = {
        
            name: "",
            email:"",
            password:"",
            rePassword:"",
            phone:""
        
    }


    const validYup = Yup.object().shape({

        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
        rePassword: Yup.string().oneOf([Yup.ref('password'), null], "Passwords must match")
          .required("Confirm Password is required"),
        phone: Yup.string().required("Phone number is required")
      })

    async function signup(values){
      setisisLoading(true)
    try{
         const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup" , values)
         toast.success(data.message)
         Navigate("/Login")

         setisisLoading(false)
    }catch (e) {
    
    toast.error(e.response.data.message)
    
    
    }

    
    
    }
    const formik = useFormik({
        initialValues: user ,
        onSubmit: signup,
        validationSchema: validYup
    })
  return (
    <>
        

<form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">

<h1 className="py-3 font-bold text-4xl text-green-600">Register Now</h1>
{/* inpout name */}
<div className="relative z-0 w-full mb-5 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"  />
      <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Name :</label>
  </div>

     {formik.errors.name && formik.touched.name ?  <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">Error!</span>{formik.errors.name}
</div>: ""}
{/* inpout email */}
<div className="relative z-0 w-full mb-5 group">
      <input  onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" />
      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Email :</label>
  </div>
  {formik.errors.email  && formik.touched.email ?  <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">Error!</span>{formik.errors.email}
</div>: ""}

{/* inpout password */}
<div className="relative z-0 w-full mb-5 group">
      <input  onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"  />
      <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Password :</label>
  </div>

  {formik.errors.password  && formik.touched.password ?  <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">Error!</span>{formik.errors.password}
</div>: ""}

{/* inpout re-password */}
<div className="relative z-0 w-full mb-5 group">
      <input  onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} type="password" name="rePassword" id="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" />
      <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Re-Password :</label>
  </div>

  {formik.errors.rePassword  && formik.touched.rePassword ?  <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">Error!</span>{formik.errors.rePassword}
</div>: ""}

{/* inpout phone */}
<div className="relative z-0 w-full mb-5 group">
      <input  onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} type="tell" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"/>
      <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> phone :</label>
  </div>
  {formik.errors.phone  && formik.touched.phone ?  <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">Error!</span>{formik.errors.phone}
</div>: ""}

  <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
    {isLoading ? <i className="fa-solid fa-spin fa-spinner text-white"></i> : "register"}
    </button>
</form>

    </>
  )
}

export default Register

