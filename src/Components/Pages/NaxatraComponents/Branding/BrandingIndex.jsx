import React, { useRef, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { BiUser } from 'react-icons/bi'
import { FiAlertCircle } from 'react-icons/fi'
import axios from 'axios'
import { ApiList } from '@/Components/Api/ApiList'
import { toast } from 'react-hot-toast'
import './Style.css'
import ApiJsonHeader from '@/Components/Api/ApiJsonHeader'

const BrandingIndex = (props) => {

  const [toggle, setToggle] = useState(false)
  const [loader, setLoader] = useState(false)

  const { apiLogout } = ApiList()

  const dialogRef = useRef()
  let token = localStorage.getItem('token')

  const brandingMenu = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Contact Us", path: "/contact" },
     
    { title: "Apply For Job", path: "/career" },
  ];

  const navigate = useNavigate()

  const LogOutUser = () => {

    setLoader(true)

    axios.post(apiLogout, {}, ApiJsonHeader())
      .then((res) => {
        if (res?.data?.status) {
          localStorage.clear()
          toast.success("Logout Successfully !!!")
        }
      })
      .finally(() => {
        setLoader(false)
        navigate('/')
        dialogRef.current.close()
      })
  }

  const navigateFun = (path) => {
    // if(path == '/career'){
    //   window.open("http://naxatranewshindi.com/career", "_blank")
    // } else {
    navigate(path)
    // }
  }

  const navigateFun2 = () => {
    const device = window.localStorage?.getItem('device')
    device == 'mobile' ? navigate('/mobile-login') : navigate('/login')
}

  return (
    <>
      <div className='z-50 flex items-center justify-center w-screen border-b animate__animated animate__slideInDown animate__faster'>
        <div className={`max-w-[${props?.wpx}] h-full w-full flex flex-wrap justify-between md:px-10`} >

          <div className='flex items-center gap-2 px-2 py-2 md:gap-4 md:px-0 md:py-0'>
            <span className='hidden font-semibold cursor-pointer md:block' onClick={() => navigate('/')}>Naxatra</span>
            {
              brandingMenu?.slice(0, 10)?.map((elem, index) =>
                <>
                  <span className={`cursor-pointer ${elem?.path == "/career" ? " colorChange font-bold text-sm px-2 drop-shadow-md py-0.5" : " text-sm  font-semibold text-zinc-500"}`} onClick={() => navigateFun(elem?.path)} key={index}>{elem?.title}</span>
                </>)
            }

            {brandingMenu?.length > 10 && <span className={`transition-all duration-200 bg-zinc-200 h-full p-2 text-sm cursor-pointer`} onClick={() => setToggle(!toggle)}> <span className={`${toggle ? 'rotate-180 ' : ' '} block transition-all duration-200`}> <FaChevronDown /> </span> </span>}
          </div>

          <div className='flex items-center gap-2'>
           
            {token &&
              <button className='flex gap-2 items-center bg-green-600 hover:bg-green-500 select-none font-semibold text-white text-xs md:text-sm px-2 md:px-3 py-1.5' onClick={() => navigate('/career-admin')}><span>Dashboard</span></button>}

            {!token ? <button className='flex gap-2 items-center bg-red-600 hover:bg-red-500 select-none font-semibold text-white text-xs md:text-sm px-2 md:px-3 py-1.5' onClick={() => navigateFun2()}><span>Sign In</span> <span className='text-lg'><BiUser /></span></button>
              :
              <button className='flex gap-2 items-center bg-red-600 hover:bg-red-500 select-none font-semibold text-white text-xs md:text-sm px-2 md:px-3 py-1.5' disabled={loader} onClick={() => dialogRef.current.showModal()}><span>{!loader ? 'Sign' : 'Signing'} Out</span></button>}

          </div>
          </div>
      </div>

      {
        <div className={`${toggle ? 'h-[1.7rem] border-b' : 'h-[0rem]'} transition-all duration-200 w-screen absolute pt-1 bg-white justify-center items-center overflow-clip z-50`}>
          <div className={`max-w-[${props?.wpx}] h-full w-full px-10`} >

            <div className='flex items-center gap-4'>
              {
                brandingMenu?.slice(10,)?.map((elem, index) =>
                  <>
                    <span className='text-xs font-semibold text-zinc-400' key={index}>{elem?.title}</span>
                  </>)
              }

            </div>
          </div>
        </div>
      }

      <dialog ref={dialogRef} className='backdrop:backdrop-brightness-75 animate__animated animate__slideInLeft animate__faster'>

        <div className='z-50 flex flex-col gap-4 px-6 py-4 bg-white border'>
          <div className='flex items-center gap-6'>
            <span className='block p-2 text-red-500 bg-red-100 rounded-full drop-shadow-md shadow-red-300'><FiAlertCircle size={25} /></span>
            <div className='flex flex-col gap-2'>
              <span className='pb-1 text-xl font-semibold border-b'>Confirmation</span>
              <span className='text-base'>Are you sure want to log out ?</span>
            </div>
          </div>
          <div className='flex justify-end gap-2'>
            <button className='px-4 py-1 text-sm text-white bg-slate-400 hover:bg-slate-500 ' onClick={() => dialogRef.current.close()}>No</button>
            <button className='px-4 py-1 text-sm text-white bg-red-500 hover:bg-red-600 ' onClick={() => LogOutUser()}>Yes</button>
          </div>
        </div>

      </dialog>
    </>
  )
}

export default BrandingIndex