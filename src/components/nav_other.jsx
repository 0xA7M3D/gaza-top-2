

import { useState } from 'react';
import img1 from '../assets/1.jpg';
import { Link } from 'react-router-dom';


function Nav_Other() {

    const [open , setopen] = useState(false);
    // console.log(open);
    

    return(
        <>

            <div className={`nav_other min-sm:w-80 `}>
                    <div onClick={()=>setopen(!open)}  className={`btn ${open ? 'bg-purple-300' : 'bg-white'} absolute top-16 right-2 hidden max-sm:flex box group hover:bg-purple-300 w-min transition cursor-pointer gap-7  p-4 px-4.5 rounded-2xl shadow-lg shadow-gray-200/30 items-center`}>
                        <i className={`fa fa-comment ${open ? 'text-white' : 'text-gray-400'} group-hover:text-white transition `}></i>
                    </div>
                    <div className={`boxes ${open ? 'max-sm:max-h-[545px]' : 'max-sm:max-h-0'} sticky top-20 overflow-hidden transition-all max-sm:absolute max-sm:flex-none right-6  z-20 flex flex-col gap-3`}>

              
                        <div className="box p-3    overflow-hidden rounded-2xl shadow-lg shadow-gray-800/30 max-sm:!bg-gray-950/100 max-sm:!backdrop-blur-none  sec_links">
                            <div className="title_box pb-3 flex items-center justify-between">
                                <div className="flex gap-2 items-center">
                                    <i className="fa text-gray-800 fa-comment"></i>
                                    <p className="text-gray-500   font-medium">Messages</p>
                                </div>
                            </div>

                            <div className="inp_search  rounded-4xl border items-center flex border-gray-300/10 text-sm">
                                <i className="fal fa-search cursor-pointer text-gray-300  px-2 pl-3"></i>
                                <input className="w-full text-gray-400 font-medium text-sm   p-2 outline-0 h-full" type="text" name="" id="" placeholder="Search Messages..." />
                            </div>

                            <div className="sec_frinds">
                                <div className="links_fri1 flex justify-between p-1 py-2 font-medium text-sm text-gray-400  ">
                                    <p className='relative cursor-pointer after:w-full after:h-[3px] after:-bottom-1 after:left-0 after:bg-purple-400/60 text-purple-500 after:rounded-t-2xl after:absolute  '>General</p>
                                    <p className='relative cursor-pointer   '>Primary</p>
                                    <p className='relative cursor-pointer   '>Requests</p>
                                </div>
                            </div>

                            <div className="content_sec">
                                <div className="frinds">

                                    <Link to="/chatUser/11">
                                        <div className=" hover:bg-[#9f9fca0c] active:bg-[#9f9fca0c] cursor-pointer transition font-medium p-3 gap-5 rounded-2xl shadow-lg shadow-gray-950/30 sec_prof flex items-center ">
                                            <img className='w-[40px] h-[40px] border border-purple-300 rounded-full' src={img1} alt="" />
                                            <div className="text">
                                                <p className="name text-gray-600">Mohamed</p>
                                                <p className="name text-gray-400 text-xs">Last Seen 10 menutes</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/chatUser/12">
                                        <div className=" hover:bg-[#9f9fca0c] active:bg-[#9f9fca0c] cursor-pointer transition font-medium p-3 gap-5 rounded-2xl shadow-lg shadow-gray-950/30 sec_prof flex items-center ">
                                            <img className='w-[40px] h-[40px] border border-purple-300 rounded-full' src={img1} alt="" />
                                            <div className="text">
                                                <p className="name text-gray-600">Omer</p>
                                                <p className="name text-gray-400 text-xs">Last Seen 1 day</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/chatUser/13">
                                        <div className=" hover:bg-[#9f9fca0c] active:bg-[#9f9fca0c] cursor-pointer transition font-medium p-3 gap-5 rounded-2xl shadow-lg shadow-gray-950/30 sec_prof flex items-center ">
                                            <img className='w-[40px] h-[40px] border border-purple-300 rounded-full' src={img1} alt="" />
                                            <div className="text">
                                                <p className="name text-gray-600">Ahmed</p>
                                                <p className="name text-gray-400 text-xs"> active <span className='inline-flex w-2.5 ml-2 -mb-[2px] h-2.5 bg-green-500 rounded-full '></span> </p>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/chatUser/14">
                                        <div className=" hover:bg-[#9f9fca0c] active:bg-[#9f9fca0c] cursor-pointer transition font-medium p-3 gap-5 rounded-2xl shadow-lg shadow-gray-950/30 sec_prof flex items-center ">
                                            <img className='w-[40px] h-[40px] border border-purple-300 rounded-full' src={img1} alt="" />
                                            <div className="text">
                                                <p className="name text-gray-600">Hady</p>
                                                <p className="name text-gray-400 text-xs"> Last Seen 3 Month </p>
                                            </div>
                                        </div>
                                    </Link>

                                </div>
                            </div>

        
                        </div>


                        <div className="requests">

                            <div className="title_requests">
                                <p className='text-gray-400   font-medium py-2 px-1'>Requests</p>
                            </div>

                            <div className="box transition  max-sm:!bg-gray-950/100 max-sm:!backdrop-blur-none  font-medium p-3 pb-1 mb-3  rounded-2xl shadow-lg shadow-gray-800/30 sec_prof  ">
                                <div className=" gap-5 flex items-center">
                                    <img className='w-[40px] h-[40px] border border-purple-300 rounded-full' src={img1} alt="" />
                                    <div className="text">
                                        <p className="name text-gray-600">Ahmed</p>
                                        <p className="name text-gray-400 text-xs"> Send You Request Frind  </p>
                                    </div>
                                </div>

                                <div className="btns flex p-2 justify-center gap-2">
                                    <button className='p-1 px-3 rounded-2xl cursor-pointer text-sm font-normal hover:bg-purple-500 active:bg-purple-500 bg-purple-500/90'>Accept</button>
                                    <button className='p-1 px-3 rounded-2xl cursor-pointer text-sm font-normal hover:bg-[#9f9fca2a] active:bg-[#9f9fca2a] border-2 text-gray-500 border-[#9f9fca41]'>Chancle</button>
                                </div>

                            </div>





                        </div>
        
                        
                    </div>
                </div>

        </>
    )
}

 export default Nav_Other;