import React, { useState , useEffect } from 'react'
import logo from '@/Components/assets/logo.webp'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { ApiList } from '@/Components/Api/ApiList'
import { toast } from 'react-hot-toast'
import { RotatingLines } from 'react-loader-spinner'
import ErrorCard from '@/Components/Common/ErrorCard'
import ApiJsonHeader from '@/Components/Api/ApiJsonHeader'
 

const Login = () => {

  useEffect(() => {
    document.title = "Login";

    const metaDescriptionTag = document.querySelector("meta[name='description']") || document.createElement('meta');
    metaDescriptionTag.name = 'description';
    metaDescriptionTag.content = 'hello mr login';

    document.head.appendChild(metaDescriptionTag);

    return () => {
      document.title = 'Default Title';
      document.head.removeChild(metaDescriptionTag);
    };
  }, [document.title]);
  
  const [loader, setloader] = useState(false)
  const [errorState, setErrorState] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  const { apiLogin } = ApiList()

  const labelStyle = "text-sm"
  const inputStyle = "focus:outline-none border rounded-sm focus:shadow-md px-2 py-1 text-sm"
  const inputStyleR = "focus:outline-none border border-red-400 placeholder:text-red-400 rounded-sm focus:shadow-md px-2 py-1 text-sm"

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: (values) => {
      console.log(values)
      loginFun(values)
    },
    validationSchema: yup.object().shape({
      email: yup.string().required("Enter email or username"),
      password: yup.string().required("Enter password")
    })
  })

  const activateErrorCard = (status, message) => {
    setErrorState(status)
    setErrorMessage(message)
  }

  const loginFun = (values) => {

    setloader(true)

    let payload = {
      email: values?.email,
      password: values?.password,
    }

    axios.post(apiLogin, payload, ApiJsonHeader())
      .then((res) => {

        console.log(res)

        if (res.data.status == true) {
          toast.success("Login Successfully !!!")
          window.localStorage.setItem('token', res?.data?.data?.token)
          localStorage.setItem("userDetails", JSON.stringify(res?.data?.data))
          navigate('/career-admin')
        } else {
          toast.error(res?.data?.message)
          activateErrorCard(true, res?.data?.message)
        }
      })
      .catch((err) => {
        console.log(err)
        toast.error("Server Error! Please try again later.")
        activateErrorCard(true, "Server Error! Please try again later.")
      })
      .finally(() => {
        setloader(false)
      })
  }

  return (
    <>
      {<ErrorCard message={errorMessage} status={errorState} activateErrorCard={activateErrorCard} />}
      
      <form onChange={formik.handleChange} onSubmit={formik.handleSubmit} className='flex items-center justify-center w-screen h-screen bg-zinc-100' >

        <div className='py-4 bg-white border border-blue-100 rounded-sm shadow-md animate__animated animate__slideInDown animate__faster'>

          <div className='flex items-center gap-2 px-8 py-2 border-b'>
            <span><img src={logo} alt="" srcSet="" className='w-14 drop-shadow-md' /></span>
            <span className='text-3xl font-semibold text-zinc-800'>Naxatra News Login</span>
          </div>

          <div className='w-full px-8 '>

            <div className='flex flex-col gap-2 my-4'>
              <label htmlFor="" className={labelStyle}>Username or Email <span className='text-xl text-red-500'>*</span> </label>
              <input type="text" name="email" id="" className={formik.touched.email && formik.errors.email ? inputStyleR : inputStyle} placeholder='Enter email or username' />
            </div>

            <div className='flex flex-col gap-2 my-4'>
              <label htmlFor="" className={labelStyle}>Password <span className='text-red-500'>*</span> </label>
              <input type="password" name="password" id="" className={formik.touched.password && formik.errors.password ? inputStyleR : inputStyle} placeholder='Enter password' />
            </div>

            <div className='flex justify-center mt-6'>
              {
                loader ?
                  <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="25"
                    visible={true}
                  />
                  :
                  <button className='px-4 py-1 text-sm text-white bg-green-500 hover:bg-green-600 drop-shadow-md'>Login</button>
              }
            </div>

            <div className='flex justify-center mt-2 '>
              <span className='text-xs text-blue-800 cursor-pointer hover:underline ' onClick={() => navigate('/')}>Back to Naxatra News</span>
            </div>

          </div>

        </div>

      </form>
    </>
  )
}

export default Login