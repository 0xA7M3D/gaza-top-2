import img1 from '../../assets/1.jpg';

 

function Notifecations() {
    return (
        <div className="w-[46%]  max-[640px]:w-[85%] max-[430px]:w-full ">
            
            <div className="notifecations flex-col  text-neutral-500 box border border-gray-800/75 overflow-hidden  font-medium   rounded-2xl shadow-lg shadow-gray-900/30 sec_prof flex items-center">
                <div className="top   w-full flex flex-col gap-3 p-3 pb-2">

                    <div className="title px-1 flex justify-between w-full items-center">
                        <p>Notifecations</p>
                        <i className="fal fa-bell"></i>
                    </div>

                    <div className="links-notifec text-neutral-400/70 flex w-full justify-center">
                        <div className="all px-3 text-purple-400 relative after:w-full after:rounded-t-2xl after:h-[3px] after:absolute after:-bottom-2 after:left-0 after:bg-purple-500 ">All</div>
                        <div className="requests px-3">Requests</div>
                        <div className="birthday px-3">Birthday</div>
                    </div>


                </div>



                <div className="link_all w-full">

                    <div className="notefec-1  w-full p-2 hover:bg-black/30 cursor-pointer transition  px-3 flex items-center justify-between" >
                        <div className="lef flex items-center gap-4">
                            <div className="img flex-none w-16 h-16 ">
                                <img className='w-full h-full rounded-full' src={img1} alt="" />
                            </div>

                            <div className="text-message">
                                <p className="name">Mohammed</p>
                                <p className="content_notefac text-xs text-neutral-400/80">Send you request 💌, 23 minutes ago</p>
                            </div>

                        </div>
                        <div className="rig text-2xl">
                            <p>...</p>
                        </div>
                    </div>

                    <div className="notefec-1  w-full p-2 hover:bg-black/30 cursor-pointer transition  px-3 flex items-center justify-between" >
                        <div className="lef flex items-center gap-4">
                            <div className="img flex-none border border-purple-300 rounded-full bg-white w-16 h-16 flex justify-center items-center">
                                <i className="fab fa-angellist text-3xl text-purple-500"></i>
                                {/* <img className='w-full h-full rounded-full' src={img1} alt="" /> */}
                            </div>

                            <div className="text-message">
                                <p className="name">Gaza Top</p>
                                <p className="content_notefac text-xs text-neutral-400/80">Today is BirthDay Omer 🎉</p>
                            </div>

                        </div>
                        <div className="rig text-2xl">
                            <p>...</p>
                        </div>
                    </div>

                    <div className="notefec-1  w-full p-2 hover:bg-black/30 cursor-pointer transition  px-3 flex items-center justify-between" >
                        <div className="lef flex items-center gap-4">
                            <div className="img flex-none w-16 h-16 ">
                                <img className='w-full h-full rounded-full' src={img1} alt="" />
                            </div>

                            <div className="text-message">
                                <p className="name">Omer</p>
                                <p className="content_notefac text-xs text-neutral-400/80">Omer Liked your post 💓</p>
                            </div>

                        </div>
                        <div className="rig text-2xl">
                            <p>...</p>
                        </div>
                    </div>

                    <div className="notefec-1  w-full p-2 hover:bg-black/30 cursor-pointer transition  px-3 flex items-center justify-between" >
                        <div className="lef flex items-center gap-4">
                            <div className="img flex-none border border-purple-300 rounded-full bg-white w-16 h-16 flex justify-center items-center">
                                <i className="fab fa-angellist text-3xl text-purple-500"></i>
                                {/* <img className='w-full h-full rounded-full' src={img1} alt="" /> */}
                            </div>

                            <div className="text-message">
                                <p className="name">Gaza Top</p>
                                <p className="content_notefac text-xs text-neutral-400/80">Don't forget to pray for Palestinians💔</p>
                            </div>

                        </div>
                        <div className="rig text-2xl">
                            <p>...</p>
                        </div>
                    </div>

                    



                </div>
            </div>
        </div>
    )
}
export default Notifecations;