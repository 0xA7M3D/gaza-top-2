import { Link, useParams } from 'react-router-dom';
import img1 from '../../assets/1.jpg';
import { useState } from 'react';


function Chat() {

    const [focus,setFocus] = useState(false);
    const [userSearch,setUserSearch] = useState();

    
    function search_user(user){
        const user1 = user.replaceAll(" ","");
        if(user1.length > 0){
            fetch(`http://localhost:5000/acount/${user1}`)
            .then(result => result.json())
            .then(data=> {console.log(data);setUserSearch(data)})
            .catch(err => console.log("Error in search this user:  ",err))
        }
    }


    return (
        <div className="w-[46%] max-[640px]:w-[85%] max-[430px]:w-full ">
            {/* <h1 className="text-center text-5xl text-purple-500">Chat Link</h1> */}
            
            <div className="chat flex-col  text-neutral-500 box border border-gray-800/75  backdrop-blur-lg overflow-hidden  font-medium   rounded-2xl shadow-lg shadow-gray-800/30 sec_prof flex items-center">
                <div className="top  border-gray-800/75 w-full flex flex-col gap-3 p-3 pb-2">

                    <div className="title px-1 flex font-bold justify-between w-full items-center">
                        <p>Chats</p>
                        <i className="fal fa-comment"></i>
                    </div>

                    <div className="relative">
                        <div className="inp-search flex items-center focus-within:outline-4 rounded-md border-gray-800 border outline-gray-800">
                            <i className="fal fa-search px-2 text-sm"></i>
                            <input onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} onChange={(e)=>{search_user(e.target.value)}} className='w-full p-1 text-sm px-2 outline-none border-none' type="text" name="" id="" placeholder='Search with user acount'/>
                        </div>

                        <div className={`drop-down ${focus? "":"active"} z-30 bg-gray-800 absolute left-0 w-full p-2 shadow-gray-950 shadow-lg rounded-b-lg`}>
                         {
                            userSearch?.[0]?.['name'] ?
                            <Link to={`/chatUser/${userSearch?.[0]?.['id']}`}>
                                <div className="chat-1 w-full p-2 hover:bg-black/30  bg-neutral-0 cursor-pointer transition  px-3 flex items-center justify-between" >
                                    <div className="lef flex items-center gap-4">
                                        <div className="img flex-none w-10 h-10 relative">
                                            <img className='w-full h-full rounded-full' src={img1} alt="" />
                                        </div>

                                        <div className="text-message">
                                            <p className="name">{userSearch?.[0]?.['name']}</p>
                                        </div>

                                    </div>
                                </div>
                            </Link>

                            :
                            
                            <h3 className='text-white/30 text-sm text-center'>Not Found account have this user</h3>
                         }
                        </div>


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
                        <div className="chat-1 w-full p-2 hover:bg-black/30  bg-neutral-0 cursor-pointer transition  px-3 flex items-center justify-between" >
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
                        <div className="chat-1  w-full p-2 hover:bg-black/30 bg-neutral-0 cursor-pointer transition  px-3 flex items-center justify-between" >
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
                        <div className="chat-1  w-full p-2 hover:bg-black/30 bg-neutral-0 cursor-pointer transition  px-3 flex items-center justify-between" >
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