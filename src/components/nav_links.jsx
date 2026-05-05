import { Link, useLocation } from 'react-router-dom';
import img1 from '../assets/1.jpg';

function Nav_Links(clicked) {
    // console.log(clicked);

    const link = useLocation(null);
    let active = 'group bg-linear-to-r to-[#9f9fca02] from-[#9f9fca1a] after:w-1 after:rounded-r-2xl after:h-full after:absolute after:top-0 after:left-0 after:bg-purple-500 relative active';
    // console.log(link);
    
    return(
        <>
        <div className={`nav_links relative select-none ${clicked.open ? 'max-[430px]:max-h-[515px]' : 'max-[430px]:max-h-0'} transition-all max-[430px]:fixed max-[430px]:top-[70px] z-20 w-[27%] max-sm:w-[58.31px] overflow-hidden flex-none `}>
            <div className="boxes flex flex-col gap-3 sticky top-0">
                <div className="box bg-black/20 backdrop-blur-lg font-medium p-3 gap-5 rounded-2xl shadow-lg shadow-gray-800/30 sec_prof flex items-center ">
                    <img className='w-[37px] min-w-[37px]  h-[37px] border border-purple-300 rounded-full' src={img1} alt="" />
                    <div className="text">
                        <p className="name text-gray-400">Ahmed</p>
                        <p className="name text-gray-400 text-xs">@ahm</p>
                    </div>
                </div>
                <div className="box bg-black/20 backdrop-blur-lg overflow-hidden rounded-2xl shadow-lg shadow-gray-800/30 sec_links">
                    <Link to={'/profile'}>
                        <div className={`link flex  ${link.pathname == '/profile'? active :''}   items-center gap-7 w-full hover:bg-[#9f9fca1a] active:bg-[#9f9fca1a]  cursor-pointer p-3 px-5 transition`}>
                            <i className="fad fa-users group-[.active]:text-purple-400 text-gray-400"></i>
                            <p className="text-gray-400 group-[.active]:text-purple-600 text-[14px]   font-medium">Profile</p>
                        </div>
                    </Link>
                    <Link to={'/'}>
                        <div className={`link flex  ${link.pathname == '/'? active :''}   items-center gap-7 w-full hover:bg-[#9f9fca1a] active:bg-[#9f9fca1a] cursor-pointer p-3 px-5 transition`}>
                            <i className="far fa-home-lg group-[.active]:text-purple-400 text-gray-400"></i>
                            {/* <i class="fa-regular fa-house text-gray-"></i> */}
                            <p className="text-gray-400 group-[.active]:text-purple-600 text-[14px]   font-medium">Home</p>
                        </div>
                    </Link>
                    <Link to={'/explore'}>
                        <div className={`link flex  ${link.pathname == '/explore'? active :''}   items-center gap-7 w-full hover:bg-[#9f9fca1a] active:bg-[#9f9fca1a] cursor-pointer p-3 px-5 transition`}>
                            <i className="fab fa-angellist group-[.active]:text-purple-400 text-gray-400"></i>
                            <p className="text-gray-400 group-[.active]:text-purple-600 text-[14px]   font-medium">Explore</p>
                        </div>
                    </Link>
                    <Link to={'/notifecations'}>
                        <div className={`link flex  ${link.pathname == '/notifecations'? active :''}   items-center gap-7 w-full hover:bg-[#9f9fca1a] active:bg-[#9f9fca1a] cursor-pointer p-3 px-5 transition`}>
                            <i className="fal fa-bell group-[.active]:text-purple-400 text-gray-400"></i>
                            <p className="text-gray-400 group-[.active]:text-purple-600 text-[14px]   font-medium">Notifications</p>
                        </div>
                    </Link>
                    <Link to={'/chat'}>
                        <div className={`link flex  ${link.pathname == '/chat' || link.pathname == '/chatUser'? active :''}   items-center gap-7 w-full hover:bg-[#9f9fca1a] active:bg-[#9f9fca1a] cursor-pointer p-3 px-5 transition`}>
                            <i className="fal fa-comment group-[.active]:text-purple-400 text-gray-400"></i>
                            <p className="text-gray-400 group-[.active]:text-purple-600 text-[14px]   font-medium">Messagse</p>
                        </div>
                    </Link>
                    <Link to={'/data_link'}>
                        <div className={`link flex  ${link.pathname == '/data_link'? active :''}   items-center gap-7 w-full hover:bg-[#9f9fca1a] active:bg-[#9f9fca1a] cursor-pointer p-3 px-5 transition`}>
                            <i className="fal fa-analytics group-[.active]:text-purple-400 text-gray-400"></i>
                            <p className="text-gray-400 group-[.active]:text-purple-600 text-[14px]   font-medium">Analytics</p>
                        </div>
                    </Link>
                    <Link to={'/mood'}>
                        <div className={`link flex  ${link.pathname == '/mood'? active :''}   items-center gap-7 w-full hover:bg-[#9f9fca1a] active:bg-[#9f9fca1a] cursor-pointer p-3 px-5 transition`}>
                            <i className="fal fa-moon group-[.active]:text-purple-400 text-gray-400"></i>
                            <p className="text-gray-400 group-[.active]:text-purple-600 text-[14px]   font-medium">Theme</p>
                        </div>
                    </Link>
                    <Link to={'/settings'}>
                        <div className={`link flex  ${link.pathname == '/settings'? active :''}   items-center gap-7 w-full hover:bg-[#9f9fca1a] active:bg-[#9f9fca1a] cursor-pointer p-3 px-5 transition`}>
                            <i className="fal fa-cogs group-[.active]:text-purple-400 text-gray-400"></i>
                            <p className="text-gray-400 group-[.active]:text-purple-600 text-[14px]   font-medium">Settings</p>
                        </div>
                    </Link>


                </div>

                <div className="btn box group hover:bg-red-500/60 active:bg-red-400 transition cursor-pointer gap-7 bg-black/20 backdrop-blur-lg p-3 px-5 rounded-2xl shadow-lg shadow-gray-800/30 flex items-center">
                    <i className="fa fa-sign-out group-hover:text-white group-active:text-white transition text-gray-400"></i>
                    <p className="text-gray-400 group-hover:text-white group-active:text-white transition text-[14px]   font-medium">Log Out</p>
                </div>
            </div>
        </div>

        </>
    )
}

 export default Nav_Links;