import { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router , Route ,Routes, useLocation, createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import Home from './components/home';
// import Nav_Header from './components/header';
// import Nav_Links from './components/nav_links';
// import Nav_Other from './components/nav_other';
import Frindes from './components/links/frindes';
import Explore from './components/links/explore';
import Mood from './components/links/mood';
import Notifecations from './components/links/notifecations';
import Settings from './components/links/settings';
import Chat from './components/links/chat';
import Dtat_Link from './components/links/data_link';
import Profile from './components/links/profile';
import Loader from './components/loader';
import ChatUser from './components/links/chat_user';
import Layout from './components/layout';
import LayoutSign from './components/login/layoutSign';
import Login from './components/login/login';
import SignUp from './components/login/signup';
// function App() {
//   const [count, setCount] = useState(0)


//   // if(location1.pathname == '/admin'){
//   //   adm = true
//   // }
  
//   return (
//     <div className="cont w-full h-full">
//       <Router>
//         <AppContent />
//       </Router>
//     </div>
//   )
// }

function App(){




  const router = createBrowserRouter(
    [
      {
        path:'/' ,
        element:<Layout/>,
        children:[
          {index:true , element:<Home/>},
          {path:'/friens',element:<Frindes/> },
          {path:'/explore' , element:<Explore/>},
          {path:'/mood' , element:<Mood/>},
          {path:'/notifecations' , element:<Notifecations/>},
          {path:'/settings' , element:<Settings/>},
          {path:'/chat' , element:<Chat/>},
          {path:'/data_link' , element:<Dtat_Link/>},
          {path:'/profile' , element:<Profile/>},
          {path:'/chatUser/:id' , element:<ChatUser/>},

        ]
      },
       {
        path:'/sign',
        element:<LayoutSign/>,
        children:[
          {index:true, element:<Login/>},
          {path:'/sign/signup' , element:<SignUp/>},
        ]
       }


    ]
  
  )

  return (
    <RouterProvider router={router}></RouterProvider>
    // <>
    //     <Loader />
    //     <Nav_Header open={click} setOpen={setClick}/>
    //     <div className="flex gap-2 px-5 max-sm:gap-1 max-sm:px-1 justify-between">
    //       <Nav_Links open={click} setOpen={setClick}/>

    //       <Routes>

    //         <Route Component={Home} path='/'/>
    //         <Route Component={Profile} path='/profile'/>
    //         <Route Component={Frindes} path='/frindes'/>
    //         <Route Component={Explore} path='/explore'/>
    //         <Route Component={Mood} path='/mood'/>
    //         <Route Component={Notifecations} path='/notifecations'/>
    //         <Route Component={settings} path='/settings'/>
    //         <Route Component={Chat} path='/chat'/>
    //         <Route Component={Dtat_Link} path='/data_link'/>

    //       </Routes>
    //       <Nav_Other/>
    //     </div>
    // </>
  )
}



export default App ;
