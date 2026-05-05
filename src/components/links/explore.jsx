
import img1 from '../../assets/1.jpg';
import vid from '../../assets/videoplayback.mp4';
import vid2 from '../../assets/vid.mp4';
import { useEffect, useState } from 'react';

function Explore() {
    const [openComments,setOpenComments] = useState({e:undefined,open:false});
    const [click,setClick] = useState({e:undefined,click:false})
    useEffect(()=>{
        if (click.e && click.e.target !== undefined) {
            if (click.click == true) {
                click.e.target.pause();
            }else{
                click.e.target.play();
            }
            console.log(click.click);
            
        }else{
            console.log("Error in code");
        }
    },[click.click])

    useEffect(()=>{
        if (openComments.e && openComments.e.target !== undefined) {
            
            if (openComments.open == true) {
                console.log(openComments.e.currentTarget);
                openComments.e.target.style.background="#f00";
            }else{
                openComments.e.target.style.background="#0000000";
            }
            

        }else{
            console.log("Error in code");
        }
    },[openComments.open])
    
  
    return (
        <div className="w-[46%] flex flex-col mt-6 items-center max-[640px]:w-[85%] max-[430px]:w-full ">
            
            <div className="videos-explore flex flex-col gap-10 justify-center">

                
                <div className="video flex relative w-[340px] overflow-hidden max-w-[400px] h-[500px] bg-gray-300/0 rounded-xl">
                 
                   <div className="playes text-3xl">
                        <div className={`play ${click.click ==false? "active":""}`}>
                            <i className="fa fa-play"></i>
                        </div>
                        <div className={`pause ${click.click == true?  "active":""}`}>
                            <i className="fa fa-pause"></i>
                        </div>
                    </div>

                    <video onClick={(e)=>{setClick({...e,e:e,click:!click.click})}} className='w-[120%] h-[120%]' src={vid}  controlsList='true' ></video>
                    <div className="btns flex flex-col gap-4 absolute bottom-20 right-5">
                        <div className="like text-2xl cursor-pointer text-violet-500 hover:text-white/90 hover:scale-105 transition">
                            <i className="fas fa-thumbs-up"></i>
                            <p className='text-sm text-center'>10K</p>
                        </div>
                        <div className="dis-like text-2xl cursor-pointer text-white/70 hover:text-white/90 hover:scale-105 transition">
                            <i className="fa fa-thumbs-down"></i>
                            <p className='text-sm text-center'>0</p>
                        </div>
                        <div onClick={(e)=>{setOpenComments({...e,open:true,e:e})}} className="comment text-2xl cursor-pointer text-white/70 hover:text-white/90 hover:scale-105 transition">
                            <i className="fa fa-comment"></i>
                        </div>
                        <div className="share text-2xl cursor-pointer text-white/70 hover:text-white/90 hover:scale-105 transition">
                            <i className="fas fa-share"></i>
                        </div>
                    </div>
                    
                    <div className="info flex flex-col gap-4 absolute bottom-5 left-5">
                        <div className="img_and_name flex gap-3 items-center">
                            <div className="img w-[45px] h-[45px] ">
                                <img className='w-full h-full rounded-full ' src={img1} alt="" />
                            </div>
                            <div className="name font-medium text-lg">
                                <p>Dev.Ahmed</p>
                            </div>
                            <button className="btn-folow border text-violet-500 border-violet-500/50 p-0.5 px-3 rounded-lg cursor-pointer hover:text-white hover:bg-violet-400 transition">
                                follow
                            </button>
                        </div>
                        <div className="description-video text-gray-100">
                            <p>This is description video </p>
                        </div>
                    </div>


                    <div className={`comments-video ${openComments.open?"active":''} absolute  bottom-0 bg-white/90 backdrop-blur-sm text-black`}>
                        <div className="header-comments flex justify-between items-center p-4 pt-4 shadow-xl shadow-gray-600/10">
                            <p>Comments</p>
                            <button onClick={(e)=>{setOpenComments({...e,open:false,e:e})}} className='cursor-pointer hover:text-black/70 p-1'>
                                <i className="fa fa-close"></i>
                            </button>
                        </div>
                        <div className="comments max-h-[250px] overflow-auto flex p-3 flex-col gap-5">
                            <div className="inputs flex items-center">
                                <input  className='p-2 text-sm w-full border border-r-0 border-violet-900 rounded-l-lg outline-none' type="text" placeholder='Comment..'/>
                                <button className='p-2 text-sm border border-violet-900 rounded-r-lg text-violet-950 hover:bg-violet-900 hover:text-white transition cursor-pointer'>Send</button>
                            </div>
                            <div className="comment flex gap-2">
                                <div title='Dev.Ahmed' className="img w-[35px] h-[35px] flex-none">
                                    <img className='w-full h-full flex-none rounded-full' src={img1} alt="" />
                                </div>
                                <div className="text-comment rounded-xl bg-violet-100 text-sm p-2 text-gray-500">
                                    <p>This is Comment example for gaza-top socila made by Ddev.Ahmed</p>
                                </div>
                            </div>
                            <div className="comment flex gap-2">
                                <div title='Dev.Ahmed' className="img w-[35px] h-[35px] flex-none">
                                    <img className='w-full h-full flex-none rounded-full' src={img1} alt="" />
                                </div>
                                <div className="text-comment rounded-xl bg-violet-100 text-sm p-2 text-gray-500">
                                    <p>This is Comment example for gaza-top socila made by Ddev.Ahmed</p>
                                </div>
                            </div>
                            <div className="comment flex gap-2">
                                <div title='Dev.Ahmed' className="img w-[35px] h-[35px] flex-none">
                                    <img className='w-full h-full flex-none rounded-full' src={img1} alt="" />
                                </div>
                                <div className="text-comment rounded-xl bg-violet-100 text-sm p-2 text-gray-500">
                                    <p>This is Comment example for gaza-top socila made by Ddev.Ahmed</p>
                                </div>
                            </div>
                            <div className="comment flex gap-2">
                                <div title='Dev.Ahmed' className="img w-[35px] h-[35px] flex-none">
                                    <img className='w-full h-full flex-none rounded-full' src={img1} alt="" />
                                </div>
                                <div className="text-comment rounded-xl bg-violet-100 text-sm p-2 text-gray-500">
                                    <p>This is Comment example for gaza-top socila made by Ddev.Ahmed</p>
                                </div>
                            </div>
                            <div className="comment flex gap-2">
                                <div title='Dev.Ahmed' className="img w-[35px] h-[35px] flex-none">
                                    <img className='w-full h-full flex-none rounded-full' src={img1} alt="" />
                                </div>
                                <div className="text-comment rounded-xl bg-violet-100 text-sm p-2 text-gray-500">
                                    <p>This is Comment example for gaza-top socila made by Ddev.Ahmed</p>
                                </div>
                            </div>
                            <div className="comment flex gap-2">
                                <div title='Dev.Ahmed' className="img w-[35px] h-[35px] flex-none">
                                    <img className='w-full h-full flex-none rounded-full' src={img1} alt="" />
                                </div>
                                <div className="text-comment rounded-xl bg-violet-100 text-sm p-2 text-gray-500">
                                    <p>This is Comment example for gaza-top socila made by Ddev.Ahmed</p>
                                </div>
                            </div>


                        </div>
                    </div>


                </div>
                
                <div className="video flex relative w-[340px] overflow-hidden max-w-[400px] h-[500px] bg-gray-300/0 rounded-xl">
                 
                   <div className="playes text-3xl">
                        <div className={`play ${click.click ==false? "active":""}`}>
                            <i className="fa fa-play"></i>
                        </div>
                        <div className={`pause ${click.click == true?  "active":""}`}>
                            <i className="fa fa-pause"></i>
                        </div>
                    </div>

                    <video onClick={(e)=>{setClick({...e,e:e,click:!click.click})}} className='w-[120%] h-[120%]' src={vid2}  controlsList='true' ></video>
                    <div className="btns flex flex-col gap-4 absolute bottom-20 right-5">
                        <div className="like text-2xl cursor-pointer text-violet-500 hover:text-white/90 hover:scale-105 transition">
                            <i className="fas fa-thumbs-up"></i>
                            <p className='text-sm text-center'>10K</p>
                        </div>
                        <div className="dis-like text-2xl cursor-pointer text-white/70 hover:text-white/90 hover:scale-105 transition">
                            <i className="fa fa-thumbs-down"></i>
                            <p className='text-sm text-center'>0</p>
                        </div>
                        <div onClick={(e)=>{setOpenComments({...e,open:true,e:e})}} className="comment text-2xl cursor-pointer text-white/70 hover:text-white/90 hover:scale-105 transition">
                            <i className="fa fa-comment"></i>
                        </div>
                        <div className="share text-2xl cursor-pointer text-white/70 hover:text-white/90 hover:scale-105 transition">
                            <i className="fas fa-share"></i>
                        </div>
                    </div>
                    
                    <div className="info flex flex-col gap-4 absolute bottom-5 left-5">
                        <div className="img_and_name flex gap-3 items-center">
                            <div className="img w-[45px] h-[45px] ">
                                <img className='w-full h-full rounded-full ' src={img1} alt="" />
                            </div>
                            <div className="name font-medium text-lg">
                                <p>Dev.Ahmed</p>
                            </div>
                            <button className="btn-folow border text-violet-500 border-violet-500/50 p-0.5 px-3 rounded-lg cursor-pointer hover:text-white hover:bg-violet-400 transition">
                                follow
                            </button>
                        </div>
                        <div className="description-video text-gray-100">
                            <p>This is description video </p>
                        </div>
                    </div>


                    <div className={`comments-video ${openComments.open?"active":''} absolute  bottom-0 bg-white/90 backdrop-blur-sm text-black`}>
                        <div className="header-comments flex justify-between items-center p-4 pt-4 shadow-xl shadow-gray-600/10">
                            <p>Comments</p>
                            <button onClick={(e)=>{setOpenComments({...e,open:false,e:e})}} className='cursor-pointer hover:text-black/70 p-1'>
                                <i className="fa fa-close"></i>
                            </button>
                        </div>
                        <div className="comments max-h-[250px] overflow-auto flex p-3 flex-col gap-5">
                            <div className="inputs flex items-center">
                                <input  className='p-2 text-sm w-full border border-r-0 border-violet-900 rounded-l-lg outline-none' type="text" placeholder='Comment..'/>
                                <button className='p-2 text-sm border border-violet-900 rounded-r-lg text-violet-950 hover:bg-violet-900 hover:text-white transition cursor-pointer'>Send</button>
                            </div>
                            <div className="comment flex gap-2">
                                <div title='Dev.Ahmed' className="img w-[35px] h-[35px] flex-none">
                                    <img className='w-full h-full flex-none rounded-full' src={img1} alt="" />
                                </div>
                                <div className="text-comment rounded-xl bg-violet-100 text-sm p-2 text-gray-500">
                                    <p>This is Comment example for gaza-top socila made by Ddev.Ahmed</p>
                                </div>
                            </div>
                            <div className="comment flex gap-2">
                                <div title='Dev.Ahmed' className="img w-[35px] h-[35px] flex-none">
                                    <img className='w-full h-full flex-none rounded-full' src={img1} alt="" />
                                </div>
                                <div className="text-comment rounded-xl bg-violet-100 text-sm p-2 text-gray-500">
                                    <p>This is Comment example for gaza-top socila made by Ddev.Ahmed</p>
                                </div>
                            </div>
                            <div className="comment flex gap-2">
                                <div title='Dev.Ahmed' className="img w-[35px] h-[35px] flex-none">
                                    <img className='w-full h-full flex-none rounded-full' src={img1} alt="" />
                                </div>
                                <div className="text-comment rounded-xl bg-violet-100 text-sm p-2 text-gray-500">
                                    <p>This is Comment example for gaza-top socila made by Ddev.Ahmed</p>
                                </div>
                            </div>
                            <div className="comment flex gap-2">
                                <div title='Dev.Ahmed' className="img w-[35px] h-[35px] flex-none">
                                    <img className='w-full h-full flex-none rounded-full' src={img1} alt="" />
                                </div>
                                <div className="text-comment rounded-xl bg-violet-100 text-sm p-2 text-gray-500">
                                    <p>This is Comment example for gaza-top socila made by Ddev.Ahmed</p>
                                </div>
                            </div>
                            <div className="comment flex gap-2">
                                <div title='Dev.Ahmed' className="img w-[35px] h-[35px] flex-none">
                                    <img className='w-full h-full flex-none rounded-full' src={img1} alt="" />
                                </div>
                                <div className="text-comment rounded-xl bg-violet-100 text-sm p-2 text-gray-500">
                                    <p>This is Comment example for gaza-top socila made by Ddev.Ahmed</p>
                                </div>
                            </div>
                            <div className="comment flex gap-2">
                                <div title='Dev.Ahmed' className="img w-[35px] h-[35px] flex-none">
                                    <img className='w-full h-full flex-none rounded-full' src={img1} alt="" />
                                </div>
                                <div className="text-comment rounded-xl bg-violet-100 text-sm p-2 text-gray-500">
                                    <p>This is Comment example for gaza-top socila made by Ddev.Ahmed</p>
                                </div>
                            </div>


                        </div>
                    </div>


                </div>
                
                


            </div>


        </div>
    )
}
export default Explore;