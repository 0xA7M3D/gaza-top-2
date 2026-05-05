import { Outlet, useNavigate } from "react-router-dom";
import Nav_Header from "./header";
import Nav_Links from "./nav_links";
import Nav_Other from "./nav_other";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import img_1 from "../assets/bgs/img-1.jpg"

function Layout() {

  const navigat = useNavigate();
  const cookie_logIn = Cookies.get("login");
  const cookie_user = Cookies.get("user");
  console.log(cookie_logIn);

  
  // useEffect(()=>{
  //   if(!cookie_logIn || cookie_logIn == undefined ){
  //     navigat('/sign');
  //   }
  // },[])

  const [open, setOpen] = useState(false);


  const [click , setClick] = useState(false);

    return (
      <>
      <div className="background-1">
        <img src={img_1} alt="" />
      </div>
        <Nav_Header openP={open} setOpenOpenP={setOpen} open={click} setOpen={setClick}/>
        <div className="flex gap-2 px-5 max-sm:gap-1 max-sm:px-1 justify-between">
            <Nav_Links open={click} setOpen={setClick}/>
            <Outlet context={{open, setOpen}}/>
            <Nav_Other/>
        </div>
      </>
    )
  }
  
  export default Layout;