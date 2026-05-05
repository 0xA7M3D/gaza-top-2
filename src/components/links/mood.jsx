import { useEffect, useState } from "react";


function Mood() {

    const [mood , setMood] = useState(false);
    console.log(mood);
    useEffect (() =>{

        if(mood){
            document.documentElement.classList.add('dark')
            console.log("Dark");
        }else{
            document.documentElement.classList.remove('dark')
            console.log("Light");
        }
        console.log(document.documentElement.classList)

    },[mood])
    


    return (
        <div className="w-[46%] max-[640px]:w-[85%] max-[430px]:w-full ">
            <div className="settings flex-col  text-neutral-400 box border border-purple-500/20 overflow-hidden  font-medium   rounded-2xl shadow-lg shadow-gray-900/30 sec_prof flex items-center">
                <div className="top bg-black/20 backdrop-blur-lg w-full flex flex-col gap-3 p-3 pb-2">

                    <div className="title px-1 flex justify-between w-full items-center">
                        <p>Themes</p>
                        <i className="fal fa-moon"></i>
                    </div>

                </div>

                <div className="input_check w-full select-none p-2">
                    <div className="setting-1 w-full">
                        <div className="title_hr flex items-center gap-2 text-sm text-neutral-300">
                            <p>moods</p>
                            <hr className="w-full h-[1px] border-none rounded-3xl bg-linear-to-r from-black/30 to-transparent"/>
                        </div>
                        <div className="inputs_moods flex gap-3 justify-around py-3">

                            <label htmlFor="hh1" className="flex gap-2 items-center justify-center">
                                <p>Dark</p>
                                <div className="ff relative flex">
                                    <input onChange={()=>{setMood(!mood)}} className="inp1222 cursor-pointer appearance-none transition-all border border-purple-400 rounded-xl w-10 h-5 " type="checkbox" name="" id="hh1" />
                                    <span className="w-5 h-5 cursor-pointer flex transition-all scale-75  bg-purple-400 rounded-full absolute left-0 top-0"></span>
                                </div>
                            </label>
                            <label htmlFor="hh2" className="flex gap-2 items-center justify-center">
                                <p>Light</p>
                                <div className="ff relative flex">
                                    <input className="inp1222 cursor-pointer appearance-none transition-all border border-purple-400 rounded-xl w-10 h-5 " type="checkbox" name="" id="hh2" />
                                    <span className="w-5 h-5 cursor-pointer flex transition-all scale-75  bg-purple-400 rounded-full absolute left-0 top-0"></span>
                                </div>
                            </label>
                            <label htmlFor="hh3" className="flex gap-2 items-center justify-center">
                                <p>Sunny</p>
                                <div className="ff relative flex">
                                    <input className="inp1222 cursor-pointer appearance-none transition-all border border-purple-400 rounded-xl w-10 h-5 " type="checkbox" name="" id="hh3" />
                                    <span className="w-5 h-5 cursor-pointer flex transition-all scale-75  bg-purple-400 rounded-full absolute left-0 top-0"></span>
                                </div>
                            </label>
                        </div>

                    </div>
                </div>
                
            

            
            
                            
            </div>


        </div>
    )
}
export default Mood;