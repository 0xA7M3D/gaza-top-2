import { Link } from 'react-router-dom';
import img1 from '../../assets/1.jpg';


function Chat() {
    return (
        <div className="w-[46%] max-[640px]:w-[85%] max-[430px]:w-full ">
            {/* <h1 className="text-center text-5xl text-purple-500">Chat Link</h1> */}
            
            <div className="chat flex-col  text-neutral-500 box border border-purple-500/20  backdrop-blur-lg overflow-hidden  font-medium   rounded-2xl shadow-lg shadow-gray-800/30 sec_prof flex items-center">
                <div className="top bg-black/20 border-purple-500/20 w-full flex flex-col gap-3 p-3 pb-2">

                    <div className="title px-1 flex font-bold justify-between w-full items-center">
                        <p>Chats</p>
                        <i className="fal fa-comment"></i>
                    </div>

                    <div className="links-notifec text-neutral-400/70 flex w-full justify-center">
                        <div className="all px-3 text-purple-400 relative after:w-full after:rounded-t-2xl after:h-[3px] after:absolute after:-bottom-2 after:left-0 after:bg-purple-500 ">All</div>
                        <div className="requests px-3">Friends</div>
                        <div className="birthday px-3">Famiely</div>
                        <div className="birthday px-3">Groups</div>
                    </div>


                </div>



                <div className="link_all w-full">
                    <Link to="/chatUser/11">
                        <div className="notefec-1 w-full p-2 hover:bg-black/30  bg-neutral-0 cursor-pointer transition  px-3 flex items-center justify-between" >
                            <div className="lef flex items-center gap-4">
                                <div className="img flex-none w-16 h-16 relative">
                                    <img className='w-full h-full rounded-full' src={img1} alt="" />
                                    <span className='absolute top-[80%] left-[90%] -translate-1/2 w-4 border border-[#efeff6] h-4 flex justify-center items-center text-sm text-white rounded-full bg-purple-300'></span>
                                </div>

                                <div className="text-message">
                                    <p className="name">Mohammed</p>
                                    <p className="content_notefac text-[10px] text-purple-400/80 font-sans">... السلام عليكم اخي</p>
                                </div>

                            </div>
                            <div className="rig flex items-center gap-2 flex-row-reverse">
                                <span className='w-5 h-5 flex justify-center items-center text-sm text-white rounded-full bg-purple-400'>1</span>
                                <span className="date text-xs  text-neutral-400/60">Today 1:30 PM</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="/chatUser/2">
                        <div className="notefec-1  w-full p-2 hover:bg-black/30 bg-neutral-0 cursor-pointer transition  px-3 flex items-center justify-between" >
                            <div className="lef flex items-center gap-4">
                                <div className="img flex-none w-16 h-16 ">
                                    <img className='w-full h-full rounded-full' src={img1} alt="" />
                                </div>

                                <div className="text-message">
                                    <p className="name">Omer</p>
                                    <p className="content_notefac text-[10px] text-purple-400/80 font-sans">... يسطا فينك كـ</p>
                                </div>

                            </div>
                            <div className="rig flex items-center gap-2 flex-row-reverse">
                                <span className='w-5 h-5 flex justify-center items-center text-sm text-white rounded-full bg-purple-400'>3</span>
                                <span className="date text-xs text-neutral-400/60">2 day ago in 2:25 AM</span>
                            </div>
                        </div>
                    </Link>

                    <Link to="/chatUser/4">
                        <div className="notefec-1  w-full p-2 hover:bg-black/30 bg-neutral-0 cursor-pointer transition  px-3 flex items-center justify-between" >
                            <div className="lef flex items-center gap-4">
                                <div className="img flex-none w-16 h-16 ">
                                    <img className='w-full h-full rounded-full' src={img1} alt="" />
                                </div>

                                <div className="text-message">
                                    <p className="name">Aymen</p>
                                    <p className="content_notefac text-[10px] text-purple-400/80 font-sans">... هلا كيفك يا احمد</p>
                                </div>

                            </div>
                            <div className="rig flex items-center gap-2 flex-row-reverse">
                                <span className='w-5 h-5 flex justify-center items-center text-sm text-white rounded-full bg-purple-400'>5</span>
                                <span className="date text-xs text-neutral-400/60">Yesterday in 11:12 AM</span>
                            </div>
                        </div>
                    </Link>

                    



                </div>
            </div>
        
        
        </div>
    )
}
export default Chat;