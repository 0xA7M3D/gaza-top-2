import { useContext } from 'react';
import img1 from '../../assets/1.jpg';

import q1 from '../../assets/quran/q1.png';
import q6 from '../../assets/quran/q6.png';
import { UserContext } from '../../context/user_context';

function Profile() {

    const { user, loading } = useContext(UserContext);

    // console.log(loading?"loading":user?.[0]?.name||"error");
    return (
        <div className="w-[46%] max-[640px]:w-[85%]  max-[430px]:w-full flex flex-col gap-1">
            <div className="imges w-full relative ">
                <div className="img-ground w-full h-36 overflow-hidden rounded-b-2xl">
                    <img className='w-full h-auto' src={q6} alt="" />
                </div>
                <div className="img-profile w-24 h-24 rounded-full absolute -translate-1/2 top-full  left-1/4 border-2 border-gray-900">
                    <img className='w-full h-full rounded-full ' src={q1} alt="" />
                </div>
            </div>
            <div className="texts mt-11 p-2">
                <div className="name text-purple-500 font-bold text-2xl  w-full text-center ">
                    <p>{loading?"Loading...":user?.[0]?.name||"error"}</p>
                </div>
                <div className="desic w-full text-center text-gray-600 text-sm pt-1">
                    <p>{loading?"Loading...":user?.[0]?.bio||"error"}</p>
                </div>
            </div>

            <div className="folowers flex justify-between py-2 px-3">
                <div className="folow flex flex-col gap-2 text-center text-gray-300/70"><p className='font-bold text-lg'>{loading?"Loading...":user?.[0]?.folowers||"0"}</p> <p className='text-gray-400/30'>Folow</p></div>
                <div className="folowing flex flex-col gap-2 text-center text-gray-300/70"><p className='font-bold text-lg'>{loading?"Loading...":user?.[0]?.folowing||"0"}</p> <p className='text-gray-400/30'>Folowing</p></div>
                <div className="posts flex flex-col gap-2 text-center text-gray-300/70"><p className='font-bold text-lg'>0</p> <p className='text-gray-400/30'>Posts</p></div>
            </div>
            <div className="buttons flex gap-3 justify-between pt-2">
                <button className="edite p-1 py-1.5  w-1/2  text-center border border-purple-400/20 rounded-2xl text-purple-400 cursor-pointer text-sm hover:bg-purple-500/5 active:bg-purple-500 hover:text-[#efeff6] active:border-transparent active:text-[#efeff6] transition font-medium">Edite <i className="fa fa-pen pl-2 text-xs"></i></button>
                <button className="story p-1 py-1.5  w-1/2  text-center border border-purple-400/20 rounded-2xl text-purple-400 cursor-pointer text-sm hover:bg-purple-500/5 active:bg-purple-500 hover:text-[#efeff6] active:border-transparent active:text-[#efeff6] transition font-medium">Add Story <i className="fa fa-plus pl-2 text-xs"></i></button>
            </div>

            <hr className='w-full h-[1px] border-none my-2.5 mt-4 bg-linear-to-l from-neutral-100/0 via-neutral-400/30 rounded-full to-neutral-100/0'/>

            <div className="posts_con ">

                <div className="link-nav flex justify-between items-center p-2">
                    <div className="links-prof flex gap-3 text-gray-400/60">
                        <p className='relative text-purple-400 after:w-full after:rounded-t-2xl after:h-[0px] after:absolute after:-bottom-1 after:left-0 after:bg-purple-500'>Posts</p>
                        <p>Images</p>
                    </div>
                    <div className="sett text-gray-600"><i className='fal fa-cog'></i></div>
                </div>
                <div className="posts-prof py-2 text-neutral-500">


                    <div className="post-1  bg-black/20 overflow-hidden rounded-2xl shadow-lg shadow-gray-800/30 w-full">
                        <div className="info-post flex items-center justify-between p-2 px-5">
                            <div className="lef flex items-center gap-3">
                                <div className="img w-12 h-12 rounded-full">
                                    <img className='rounded-full w-full h-full' src={q1} alt="" />
                                </div>
                                <div className="text-inf ">
                                    <div className="Name font-medium">
                                        <p>Ahmed Programmer</p>
                                    </div>
                                    <div className="date text-xs text-gray-400/70">
                                        <p>Today 10:22 Pm</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rig">
                                <p className='font-snas font-bold text-3xl'>...</p>
                            </div>
                        </div>
                        <div className="content_post text-center pt-3">
                            <div className="text_post">
                                <p>"Free Palestine"</p>
                            </div>
                            <div className="img_post flex items-center  w-full h-[200px] overflow-hidden rounded-2xl">
                                <img className='w-full h-auto' src={q6} alt="" />
                            </div>
                        </div>

                        <div className="reacts">
                            <div className="btns flex justify-between flex-row-reverse">
                                <button className='w-full text-center p-2 hover:bg-gray-900 active:bg-gray-900 transition text-purple-400 cursor-pointer '><i className="fa fa-hand-peace"></i></button>
                                <button className='w-full text-center text-gray-400 p-2 hover:bg-gray-900 active:bg-gray-900 transition  cursor-pointer'><i className="fal fa-share"></i></button>
                                <button className='w-full text-center text-gray-400 p-2 hover:bg-gray-900 active:bg-gray-900 transition  cursor-pointer'><i className="fal fa-comment"></i></button>
                            </div>
                        </div>
                    </div>






                </div>
            </div>
        </div>
    )
}
export default Profile;