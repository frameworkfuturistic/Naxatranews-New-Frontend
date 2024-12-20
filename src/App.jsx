///////////////////////////////////////////////////////////////////////////////////////////////////////////
// 👉 Author      : swaraj
// 👉 Component   : App.js
// 👉 Status      : Open
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// NPM Libararies and React libraries
import './App.css'
import { contextVar } from '@/Components/Context/ContextVar'
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useState, lazy } from 'react';
import 'animate.css'
import MobileNewsIndex from './Components/Pages/Mobile/News/MobileNewsIndex';
import MobileNewsForm from './Components/Pages/Mobile/News/MobileNewsForm';
import MobileMediaMasterIndex from './Components/Pages/Mobile/MediaMaster/MobileMediaMasterIndex';
import Profile from './Components/Pages/Mobile/Profile';

// Imported Components or Pages 
const HomeIndex            =  lazy(() => import('@/Components/Pages/NaxatraComponents/Home/HomeIndex'))
const ProtectedRoutes      =  lazy(() => import('@/Components/Pages/Others/ProtectedRoutes'))
const ErrorPage            =  lazy(() => import('@/Components/Pages/Others/404/ErrorPage'))
const Login                =  lazy(() => import('@/Components/Pages/Others/Login'))
const CareerForm           =  lazy(() => import('@/Components/Pages/Career/CareerForm'))
const Aboutus              =  lazy(() => import('@/Components/Pages/About/Aboutus'))
const Contactus            =  lazy(() => import('@/Components/Pages/Contact/Contactus'))
const Privacy              =  lazy(() => import('@/Components/Pages/Privacy/Privacy'))
const Terms                =  lazy(() => import('@/Components/Pages/Terms/Terms'))
const LayoutIndex          =  lazy(() => import('@/Components/Pages/Layouts/LayoutIndex'))
const ContentIndex         =  lazy(() => import('@/Components/Pages/NaxatraComponents/Content/ContentIndex'))
const NavBarRoutes         =  lazy(() => import('@/Components/Pages/Others/NavBarRoutes'))
const CareerIndex          =  lazy(() => import('@/Components/Pages/Admin/Career/CareerIndex'))
const NewsIndex            =  lazy(() => import('@/Components/Pages/Admin/News/NewsIndex'))
const ReportMasterIndex    =  lazy(() => import('@/Components/Pages/Admin/ReportMaster/ReportMasterIndex'))
const NewsForm             =  lazy(() => import('@/Components/Pages/Admin/News/NewsForm'))
const MediaMasterIndex     =  lazy(() => import('@/Components/Pages/Admin/MediaMaster/MediaMasterIndex'))
const UserLogs     =  lazy(() => import('@/Components/Pages/Admin/UserLogs/UserLogs'))
const MobileLogin          =  lazy(() => import('@/Components/Pages/Mobile/MobileLogin'))
const MobileRoutes         =  lazy(() => import('@/Components/Pages/Others/MobileRoutes'))

function App() {

  // 👉 Created to handle Global State constants 👈
  const [refresh, setrefresh] = useState(0) // refresh state
  const [toggleBar, settoggleBar] = useState(window.localStorage.getItem('device') == 'mobile' ? false : true)
  const wpx = JSON.parse(localStorage.getItem("layout"))?.Layout_width || "1366px";

  // 👉 Context data (used globally) 👈
  const contextData = {
    refresh, setrefresh, 
    toggleBar, settoggleBar,
    wpx
  }

  // 👉 Public Routes Json 👈
  const publicRoutes = [
    { path: "/login", element: <Login /> },
    { path: "/mobile-login", element: <MobileLogin /> },
    { path: "/career", element: <CareerForm /> },
    { path: "/about", element: <Aboutus /> },
    { path: "/contact", element: <Contactus /> },
    { path: "/privacy", element: <Privacy /> },
    { path: "/Terms", element: <Terms /> },
  ]
  
  const navBarRoutes = [
    { path: "/mobile", element: <HomeIndex /> },
    { path: "/:type?/:name?", element: <HomeIndex /> },
    { path: "/layout", element: <LayoutIndex /> },
    { path: "/news-details/:id/:cId?/:cat?/:heading?", element: <ContentIndex /> },
  ]

  // 👉 Private Routes Json 👈
 const privateRoutes = [
    { path: "/career-admin", element: <CareerIndex /> },
    { path: "/news-master", element: <NewsIndex /> },
    { path: "/news-form/:id?/:type?", element: <NewsForm /> },
    { path: "/media-master", element: <MediaMasterIndex /> },
    { path: "/user-logs", element: <UserLogs /> },
  ]
  
  // Mobile Routes
  const mobileRoutes = [
    { path: "/mobile/report-master", element: <MobileNewsIndex /> },
    { path: "/mobile/news-form/:id?/:type?", element: <MobileNewsForm /> },
    { path: "/mobile/media-master", element: <MobileMediaMasterIndex /> },
    { path: "/mobile/profile", element: <Profile /> },
  ]

  return (
    <>

      <Toaster />

      <contextVar.Provider value={contextData}>
      <Routes>
         {
            publicRoutes?.map((elem, index) =>
              <Route key={index} path={elem?.path} element={elem?.element} />
            )
          }

          <Route element={<NavBarRoutes />}>
          {
            navBarRoutes?.map((elem, index) =>
              <Route key={index} path={elem?.path} element={elem?.element} />
            )
          }
          </Route>

          <Route element={<ProtectedRoutes />}>

            {
              privateRoutes?.map((elem, index) =>
                <Route key={index} path={elem?.path} element={elem?.element} />
              )
            }

          </Route>

          <Route element={<MobileRoutes />}>
          {
              mobileRoutes?.map((elem, index) =>
                <Route key={index} path={elem?.path} element={elem?.element} />
              )
            }
          </Route>

          <Route path='*' element={<ErrorPage />} />

        </Routes>

      </contextVar.Provider>

    </>
  )
}

export default App