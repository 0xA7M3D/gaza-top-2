import { useState } from 'react';
import img1 from '../assets/1.jpg';
import Nav_Links from './nav_links';
import { useOutletContext } from 'react-router-dom';


function Nav_Header(open1) {
    // const {open,setOpen} = useOutletContext();
    // console.log(open.open);
    return(
        
        <div className="header sticky top-0 z-40 w-full justify-between bg-black/20 backdrop-blur-xl items-center flex p-2 py-3 mb-4 px-5 shadow-lg shadow-gray-600/10">
            <div onClick={()=>{open1.setOpen(!open1.open)}} className="btn_open text-xl cursor-pointer max-[430px]:flex hidden">
                <i className="fa fa-bars text-neutral-400"></i>
            </div>
            <div className="logo   text-purple-400 flex items-center gap-2 font-medium text-xl">
                <i className="fab fa-angellist"></i>
                <p className='text-gray-200'>GazaTop</p>
            </div>
            <div className="inp_search max-sm:hidden border overflow-hidden w-[400px] flex items-center border-gray-400/30 rounded-4xl">
                <i className="fal fa-search p-1 px-3 py-[10px] text-white bg-purple-500/50 h-full cursor-pointer"></i>
                <input className="outline-0 w-full h-full   p-[5px] py-[7px] px-2 text-gray-400" type="text" name="" id="" placeholder="Search For Palestinians" />
            </div>
            <div className="profile_sec items-center flex gap-3">
                <button onClick={()=>open1.setOpenOpenP(!open1.openP)} className="p-1 max-sm:hidden px-6 rounded-xl font-medium transition   hover:bg-purple-400 hover:text-white cursor-pointer border border-purple-400 text-purple-400"> Creat </button>
                <div className="prof_img w-8 h-8 border border-purple-300 overflow-hidden rounded-full">
                    <img className='w-full h-full' src={img1} alt="" />
                </div>
            </div>
        </div>

        
    )
}

 export default Nav_Header;