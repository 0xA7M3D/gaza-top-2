    import { useEffect, useRef, useState } from 'react';
import img_1 from '../assets/1.jpg';
import Popup_post from './popup/creat_post';
import { useOutletContext } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "../context/user_context";
import q1 from '../assets/quran/q1.png';
import q2 from '../assets/quran/q2.png';
import q3 from '../assets/quran/q3.png';
import q4 from '../assets/quran/q4.png';
import q5 from '../assets/quran/q5.png';
import q6 from '../assets/quran/q6.png';
import heart from '../assets/heart.png';

function Home(){
    const { user, loading } = useContext(UserContext);
    const [ posts, setPosts ] = useState([]);
    const [ myLikes, setMyLikes ] = useState([]);
    const [likePost1,setLikePost1] = useState({idPost:0})
    // console.log(loading?"loading":user[0].name);

    
    
    const ContRef = useRef(null);
    const {open,setOpen} = useOutletContext();

    function next_story(){
        // console.log(ContRef.current);
        // if (ContRef.current) {
            
            ContRef.current?.scrollTo({
                left: ContRef.current.scrollLeft + 100,
                behavior:'smooth'
            });
        // }
        
    }
    function back_story(){
        // console.log(btn);
        if (ContRef.current) {
            ContRef.current.scrollLeft -= 100;
        }
    }


    function get_posts(){
        fetch("http://localhost:5000/posts")
        .then(res=>res.json())
        .then(data=>setPosts(data))
        .catch(err=>console.log("Error Get Posts",err))
    }
    function get_my_likes(){
        fetch(`http://localhost:5000/mylikes/${user?.[0].id}`)
        .then(res=>res.json())
        .then(data=>setMyLikes(data))
        .catch(err=>console.log("Error Get your likes",err))
    }
    
    

    useEffect(()=>{
        console.log(myLikes);
    },[myLikes])
    function likePost(id){
        
        fetch("http://localhost:5000/like_post" , {
            method:"POST",
            credentials:"include",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({idPost:id,idUser:user?.[0].id||null})
        })
        .then(res=>res.json())
        .then(data=> {console.log(data); get_posts();get_my_likes()})
        .catch(err=>console.log("Error add like",err))
    }
    

    useEffect(()=>{
        get_posts()
        get_my_likes()
    },[user])


    return (
        <div className="home w-[46%] max-[640px]:w-[85%] max-[430px]:w-full  text-neutral-500 p-3 max-sm:px-1 flex flex-col gap-4 items-center">
            

            


            <Popup_post/>
            <div onClick={()=>setOpen(!open)} className={`bacg1 ${open?'':'hidden'} w-full h-full fixed top-0 left-0 bg-black/20 z-40 `}></div>
           
            <h1 className='text-cyan-500'> بسم الله  </h1>
            <div className="parent_storyes w-full relative rounded-2xl ">
                <span className="flex rounded-l-2xl w-[30px] h-full z-[9] absolute top-0 left-0 bg-linear-to-r from-[#000000c2] to-transparent "></span>
                <span className="flex rounded-r-2xl w-[30px] h-full z-[9] absolute top-0 right-0 bg-linear-to-l from-[#00000083] to-transparent "></span>
                
                <div onClick={back_story} className="back_sto absolute z-10 w-6 h-6 bg-black/90  text-purple-500 flex justify-center items-center cursor-pointer text-xs rounded-full shadow-xl shadow-gray-700/40 -translate-1/2 top-1/2 left-0">
                    <i className="fa fa-arrow-left"></i>
                </div>
                
                <div ref={ContRef} className="storyes  flex gap-[7px] overflow-x-auto scroll-smooth w-full  rounded-2xl">

                    <div className="story-1 flex-none flex  after:absolute after:w-full after:h-full after:top-0 after:left-0  after:bg-linear-to-b after:from-[#0000007c] after:via-transparent after:to-[#0000007c]  relative rounded-xl w-[100px] h-[150px] overflow-hidden">
                        <img className='w-auto h-full' src={q1} alt="" />
                        <div className="text_all h-full w-full absolute z-[2] flex flex-col">
                            <div className="img_prof w-7 h-7 m-2 border border-dashed rounded-full border-purple-400/40">
                                <img className='rounded-full w-full h-full' src={q6} alt="" />
                            </div>
                            <div className="name_prof absolute bottom-0 flex w-full h-[50%] bg-linear-to-t from-black  to-transparent">
                                <p className='self-end text-xs  font-normal p-2 text-white'>Ahmed Programmer</p>
                            </div>
                        </div>
                    </div>
                    <div className="story-1 flex-none flex gap-2 after:absolute after:w-full after:h-full after:top-0 after:left-0  after:bg-linear-to-b after:from-[#0000007c] after:via-transparent after:to-[#0000007c]  relative rounded-xl w-[100px] h-[150px] overflow-hidden">
                        <img className='w-auto h-full' src={q2} alt="" />
                        <div className="text_all h-full w-full absolute z-[2] flex flex-col">
                            <div className="img_prof w-7 h-7 m-2 border border-dashed rounded-full border-purple-400/40">
                                <img className='rounded-full w-full h-full  ' src={q6} alt="" />
                            </div>
                            <div className="name_prof absolute bottom-0 flex w-full h-[50%] bg-linear-to-t from-black  to-transparent">
                                <p className='self-end text-xs  font-normal p-2 text-white'>Ahmed Programmer</p>
                            </div>
                        </div>
                    </div>
                    <div className="story-1 flex-none flex gap-2 after:absolute after:w-full after:h-full after:top-0 after:left-0  after:bg-linear-to-b after:from-[#0000007c] after:via-transparent after:to-[#0000007c]  relative rounded-xl w-[100px] h-[150px] overflow-hidden">
                        <img className='w-auto h-full' src={q3} alt="" />
                        <div className="text_all h-full w-full absolute z-[2] flex flex-col">
                            <div className="img_prof w-7 h-7 m-2 border border-dashed rounded-full border-purple-400/40">
                                <img className='rounded-full w-full h-full  ' src={q6} alt="" />
                            </div>
                            <div className="name_prof absolute bottom-0 flex w-full h-[50%] bg-linear-to-t from-black  to-transparent">
                                <p className='self-end text-xs  font-normal p-2 text-white'>Ahmed Programmer</p>
                            </div>
                        </div>
                    </div>
                    <div className="story-1 flex-none flex gap-2 after:absolute after:w-full after:h-full after:top-0 after:left-0  after:bg-linear-to-b after:from-[#0000007c] after:via-transparent after:to-[#0000007c]  relative rounded-xl w-[100px] h-[150px] overflow-hidden">
                        <img className='w-auto h-full' src={q4} alt="" />
                        <div className="text_all h-full w-full absolute z-[2] flex flex-col">
                            <div className="img_prof w-7 h-7 m-2 border border-dashed rounded-full border-purple-400/40">
                                <img className='rounded-full w-full h-full  ' src={q6} alt="" />
                            </div>
                            <div className="name_prof absolute bottom-0 flex w-full h-[50%] bg-linear-to-t from-black  to-transparent">
                                <p className='self-end text-xs  font-normal p-2 text-white'>Ahmed Programmer</p>
                            </div>
                        </div>
                    </div>
                    <div className="story-1 flex-none flex gap-2 after:absolute after:w-full after:h-full after:top-0 after:left-0  after:bg-linear-to-b after:from-[#0000007c] after:via-transparent after:to-[#0000007c]  relative rounded-xl w-[100px] h-[150px] overflow-hidden">
                        <img className='w-auto h-full' src={q5} alt="" />
                        <div className="text_all h-full w-full absolute z-[2] flex flex-col">
                            <div className="img_prof w-7 h-7 m-2 border border-dashed rounded-full border-purple-400/40">
                                <img className='rounded-full w-full h-full  ' src={q6} alt="" />
                            </div>
                            <div className="name_prof absolute bottom-0 flex w-full h-[50%] bg-linear-to-t from-black  to-transparent">
                                <p className='self-end text-xs  font-normal p-2 text-white'>Ahmed Programmer</p>
                            </div>
                        </div>
                    </div>
                    <div className="story-1 flex-none flex gap-2 after:absolute after:w-full after:h-full after:top-0 after:left-0  after:bg-linear-to-b after:from-[#0000007c] after:via-transparent after:to-[#0000007c]  relative rounded-xl w-[100px] h-[150px] overflow-hidden">
                        <img className='w-auto h-full' src={q2} alt="" />
                        <div className="text_all h-full w-full absolute z-[2] flex flex-col">
                            <div className="img_prof w-7 h-7 m-2 border border-dashed rounded-full border-purple-400/40">
                                <img className='rounded-full w-full h-full  ' src={q6} alt="" />
                            </div>
                            <div className="name_prof absolute bottom-0 flex w-full h-[50%] bg-linear-to-t from-black  to-transparent">
                                <p className='self-end text-xs  font-normal p-2 text-white'>Ahmed Programmer</p>
                            </div>
                        </div>
                    </div>
                    <div className="story-1 flex-none flex gap-2 after:absolute after:w-full after:h-full after:top-0 after:left-0  after:bg-linear-to-b after:from-[#0000007c] after:via-transparent after:to-[#0000007c]  relative rounded-xl w-[100px] h-[150px] overflow-hidden">
                        <img className='w-auto h-full' src={q1} alt="" />
                        <div className="text_all h-full w-full absolute z-[2] flex flex-col">
                            <div className="img_prof w-7 h-7 m-2 border border-dashed rounded-full border-purple-400/40">
                                <img className='rounded-full w-full h-full  ' src={q6} alt="" />
                            </div>
                            <div className="name_prof absolute bottom-0 flex w-full h-[50%] bg-linear-to-t from-black  to-transparent">
                                <p className='self-end text-xs  font-normal p-2 text-white'>Ahmed Programmer</p>
                            </div>
                        </div>
                    </div>








                </div>

                <div onClick={next_story} className="next_sto absolute z-10 w-6 h-6 bg-black text-purple-500 flex justify-center items-center cursor-pointer text-xs rounded-full shadow-xl shadow-gray-700/40 -translate-1/2 top-1/2 left-full">
                    <i className="fa fa-arrow-right"></i>
                </div>

            </div>
            <div className="creat_post px-2 w-full flex items-center bg-black/20  overflow-hidden rounded-2xl shadow-lg shadow-gray-800/30">
                <img className='w-10 h-10 rounded-full ' src={q6} alt="" />
                <div className="inputs flex gap-2 h-full items-center w-full">
                    <input className='w-full h-[80%] text-gray-300 focus:outline-3 outline-purple-700/20 text-xs  rounded-4xl px-2 ' type="text" name="" id="" placeholder='Whrite Us Palestine..' />
                    <i className="fal fa-images"></i>
                    <button onClick={()=>setOpen(!open)} className='p-1 px-5 rounded-2xl cursor-pointer text-sm font-normal text-white  hover:bg-purple-500 bg-purple-500/90'>Post</button>
                </div>
            </div>
            <div className="posts w-full flex flex-col gap-5">
                {
                    
                    posts?.map(post=>{
                        
                        const isLiked = myLikes.some(
                            like => like.idPost == post.id &&
                            like.idUser == user?.[0].id
                          );

                        return(

                        <div key={post.id} className="post-1  overflow-hidden rounded-2xl shadow-lg shadow-gray-900/30 w-full">
                            
                            <div className="info-post flex items-center justify-between p-2 px-5">
                                <div className="lef flex items-center gap-3">
                                    <div className="img w-12 h-12 rounded-full">
                                        <img className='rounded-full w-full h-full' src={q6} alt="" />
                                    </div>
                                    <div className="text-inf ">
                                        <div className="Name font-medium">
                                            <p>Ahmed Programmer</p>
                                        </div>
                                        <div className="date text-[11px] text-gray-400/70">
                                            <p><span className='text-gray-600'>Created in:</span> {post.created_at}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rig">
                                    <p className='font-snas font-bold text-3xl'>...</p>
                                </div>
                            </div>
                            <div className="content_post text-center pt-3">
                                <div className={`text_post ${post.image =="null" ? "pb-2":''}`}>
                                    <p>"{post.text}"</p>
                                </div>
                                <div className={`img_post ${post.image =="null" ?"hidden":''} flex items-center  w-full h-[200px] overflow-hidden rounded-2xl`}>
                                    <img className='w-full h-auto opacity-50' src={post.image !="null" ? `../../api/uploads/${post.image}` :''} alt="Error Get Img (:" />
                                </div>
                            </div>

                            <div className="reacts">
                                <div className="btns flex justify-between flex-row-reverse">
                                    
                                    <button onClick={(e)=>{likePost(post.id)}} className={`w-full ${isLiked ? "text-purple-400 active_like" :''} relative  text-center p-2 hover:bg-gray-900/70 active:bg-gray-900/70 transition cursor-pointer `}>
                                        <i className={`${isLiked ? "fas": 'fal'} fa-heart`}></i>
                                        <div className="effect-love">
                                            <img src={heart} alt="" />
                                            <img src={heart} alt="" />
                                            <img src={heart} alt="" />
                                            {/* <img src={heart} alt="" /> */}
                                        </div>
                                    </button>
                                    <button className='w-full text-center p-2 hover:bg-gray-900/70 active:bg-gray-900/70 transition  cursor-pointer'><i className="fal fa-share"></i></button>
                                    <button className='w-full text-center p-2 hover:bg-gray-900/70 active:bg-gray-900/70 transition  cursor-pointer'><i className="fal fa-comment"></i></button>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
            
    )
}

export default Home;