import { Link, useParams } from 'react-router-dom';
import img1 from '../../assets/1.jpg';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/user_context';


function ChatUser() {
    const { user, loading } = useContext(UserContext);
    const [num , SetNum] = useState({x:0 , y:0 , id:null});
    const [open , SetOpen] = useState(false);
    const [msgSend,setMsgSend] = useState("")
    
    const {id} = useParams();

    
    function sendMsg(){
        console.log(msgSend);
        fetch("http://localhost:5000/msg",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                idMe:user?.[0]?.id,
                idUser:id,
                msg:msgSend
            })
        })

        .then(res=>res.json())
        .then(data=> console.log(data))
        .catch(err=> console.log("Error Send Message:  ",err))

    }

    window.onclick = ()=>{
        SetOpen(false);
    }
    
    function open_list_menue(t , id){
        SetOpen(!open);
        let msgs = document.querySelector('.msgs');
        const rect = msgs.getBoundingClientRect();
        t.preventDefault();
        console.log(t.currentTarget);
        // let width = parseInt(getComputedStyle(t).width);                       
        // let height = parseInt(getComputedStyle(t).height); 
        // let res_wid = width - 300;
        // let res_hei = height - 150;
        let windoWidth = parseInt(getComputedStyle(msgs).width);
        console.log(windoWidth);
        
        let x = t.clientX - windoWidth;
        let y = t.clientY -  rect.top + msgs.scrollTop;
        let windoheight = parseInt(getComputedStyle(msgs).height);
        if(x + 200 > windoWidth ){
            x = x  - 200;  
        }
        if(x + 200 <= 200 ){
            // return;  
            x = 0;
        }
        // if(y + 200 > windoheight ){
        //     y = y  - 200;  
        // }


        

        
        SetNum({x ,y , id});

    }

    function del_msg(){
        console.log(num.id);
        
    }
    function edite_msg(){
        console.log(num.id);
        
    }



    // console.log(num);
    return (
        <div className="w-[46%] max-[640px]:w-[85%] max-[430px]:w-full ">
            {/* <h1 className="text-center text-5xl text-purple-500">Chat Link</h1> */}
            
            <div className="chat flex-col  text-neutral-500 box border  border-gray-800/75 overflow-hidden  font-medium   rounded-2xl shadow-lg shadow-gray-950/30 sec_prof flex items-center">
                <div className="top   w-full flex flex-col gap-3 p-3 pb-2 drop-shadow-md  ">

                    <div className="title px-1 flex font-bold justify-between w-full items-center">
                        <div className="info_user flex items-center gap-4">
                        <Link to={'/chat'}>
                            <div className="back px-2 cursor-pointer">
                                <i className="fa fa-arrow-left"></i>
                            </div>
                        </Link>

                            <div className="img flex-none w-14 h-14 relative">
                                <img className='w-full h-full rounded-full' src={img1} alt="Error Image" />
                                <span className='absolute top-[80%] left-[90%] -translate-1/2 w-4 border border-[#efeff6] h-4 flex justify-center items-center text-sm text-white rounded-full bg-purple-300'></span>
                            </div>
                            <div className="text_info">
                                <p className='user_name'>Free Palestine</p>
                                <p className='date text-xs font-medium text-neutral-400/60'>Last Seen 3 Minutes</p>
                            </div>
                        </div>
                        <p className='text-2xl select-none cursor-pointer'>...</p>
                        {/* <i className="fal fa-comment"></i> */}
                    </div>



                </div>



                <div className="message_all w-full ">

                    <div className="msgs flex flex-col gap-2 p-2 pt-4 px-3 h-[300px] overflow-y-auto overflow-x-hidden relative">

                        <div onContextMenu={(e)=> {open_list_menue(e, 1 /** id Message Here */)}} className="msg_you w-fit">
                            <div className="text-msg p-2 px-3 bg-black/40 rounded-xl rounded-bl-none">
                                <p className='text-neutral-400'> Assalamu Alikom My Friend  </p>
                                <div className="date h-3 -translate-y-0 text-neutral-500 font-light  text-[10px]   pr-1 text-end">
                                    <p className=''> <i className="fal fa-clock"></i> 4:12 PM</p>
                                </div>
                            </div>
                          
                        </div>
                        <div onContextMenu={(e)=> {open_list_menue(e, 2 /** id Message Here */)}} className="msg_me w-fit ml-auto">
                            <div className="text-msg p-2 px-3 bg-violet-500 rounded-xl rounded-br-none">
                                <p className='text-neutral-100'> Walikom Asalam My Brother </p>
                                <div className="date h-2 -translate-y-0.5 flex justify-between text-white/70 font-light  text-[10px]   pr-1 text-end">
                                    <p className=''><i className="fal fa-clock"></i> 4:13 PM </p>
                                    <div className="sended">
                                        {/* <i className="fal fa-thumbs-up"></i> */}
                                        <i className="fa fa-check text-violet-700/90"></i>
                                    </div>
                                </div>
                            </div>

                        </div>
      

  


                        <div style={{ top: `${num.y}px`, left: `${num.x}px` }}  className={`list-menue absolute ${open ? "max-h-[200px]":"max-h-0"} transition-all flex-none   shadow-[0px_0px_20px] shadow-neutral-600/20 w-50 rounded-2xl overflow-hidden`}>
                                <ul>
                                    <li className='flex gap-5 items-center p-2 pl-4 px-3 w-full hover:bg-violet-500 hover:text-white hover:gap-3 active:bg-violet-500 active:text-white active:gap-3 text-neutral-500 group transition-all cursor-pointer '>
                                        <i className="fas fa-arrow-turn-up"></i>
                                        <p className=''>Replay</p>
                                    </li>
                                    <li className='flex gap-5 items-center p-2 pl-4 px-3 w-full hover:bg-violet-500 hover:text-white hover:gap-3 active:bg-violet-500 active:text-white active:gap-3 text-neutral-500 group transition-all cursor-pointer '>
                                        <i className="fa fa-copy"></i>
                                        <p className=''>Copy</p>
                                    </li>
                                    <li className='flex gap-5 items-center p-2 pl-4 px-3 w-full hover:bg-violet-500 hover:text-white hover:gap-3 active:bg-violet-500 active:text-white active:gap-3 text-neutral-500 group transition-all cursor-pointer '>
                                        <i className="fas fa-arrow-right-arrow-left"></i>
                                        <p className=''>Forword</p>
                                    </li>
                                    <li onClick={edite_msg} className='flex gap-5 items-center p-2 pl-4 px-3 w-full hover:bg-violet-500 hover:text-white hover:gap-3 active:bg-violet-500 active:text-white active:gap-3 text-neutral-500 group transition-all cursor-pointer '>
                                        <i className="fa fa-pen"></i>
                                        <p className=''>Edite</p>
                                    </li>
                                    <li onClick={del_msg} className='flex gap-5 items-center p-2 pl-4 px-3 w-full hover:bg-violet-500 hover:text-white hover:gap-3 active:bg-violet-500 active:text-white active:gap-3 text-neutral-500 group transition-all cursor-pointer '>
                                        <i className="fa fa-trash"></i>
                                        <p className=''>Delete</p>
                                    </li>
                                </ul>
                            </div>

                    </div>

                    <div className="btns_msg p-1 px-2 flex items-center">
                        <div className="btns_small flex gap-0 mr-2">
                            <div className="mic flex justify-center items-center cursor-pointer w-10 h-10 text-lg rounded-l-2xl hover:bg-violet-400 hover:scale-y-100 active:bg-violet-400 active:scale-y-100  scale-y-95 transition  bg-violet-400/70 p-1 text-white">
                                <i className="far fa-microphone  "></i>
                            </div>
                            <div className="file1 flex justify-center items-center cursor-pointer w-10 h-10 text-lg rounded-r-2xl hover:bg-violet-400 hover:scale-y-100 active:bg-violet-400 active:scale-y-100 scale-y-95 transition  bg-violet-400/70 p-1 text-white">
                                <i className="far fa-image  "></i>
                            </div>
                            {/* <i className="far fa-"></i> */}
                        </div>
                        <div className="input flex items-center w-full ">
                            <textarea onChange={(e)=>{setMsgSend(e.target.value)}} className='resize-none text-white/80 w-full p-2 border border-neutral-300/10 rounded-lg rounded-r-none border-r-neutral-300/10 h-11 focus:outline-2 outline-violet-500/30' name="msg" id="" placeholder='Message...'></textarea>
                        </div>
                        <div onClick={sendMsg} className="send flex justify-center pr-1 items-center group shadow hover:bg-violet-500 hover:rounded-l-none active:bg-violet-500 active:rounded-l-none text-white cursor-pointer rounded-full transition-all flex-none w-11 h-11 ">
                            <i className="fa fa-paper-plane text-violet-500 transition group-hover:text-white group-active:text-white"></i>
                        </div>
                    </div>


                </div>
            </div>
        
        
        </div>
    )
}
export default ChatUser;