import { useContext, useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom";

export default function Popup_post() {

    const {open , setOpen} = useOutletContext();
    const [data1, setData] = useState("");
    const [file, setFile] = useState(null);
    

    const handelValue = (e)=>{
        setData(e.target.value);
    }
    const handelFile = (e)=>{
        setFile(e.target.files[0]);
        console.log(file);
        
    }



    function cerat_post() {
        
        fetch("http://localhost:5000/api/creat_post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title:data1})
        });
        console.log("done: " , data1);
        
    }
    
    return(
        <div className={`popup ${open? "active":'dis-active'} transition-all fixed z-50 bg-gray-950  flex flex-col items-center w-90 gap-5 shadow-2xl shadow-gray-300/15 p-5 rounded -translate-1/2 top-1/2 left-1/2`}>
            <div className="title">
                <p className="text-3xl py-3">Creat <span className="text-linear font-medium">Post Now</span></p>
            </div>
           {/* <form  action="http://localhost:5000/api/creat_post" method="post"> */}
                <div className="inputs flex flex-col w-full">
                    <div className="inp w-full">
                        <textarea onChange={handelValue} value={data1}  className="w-full border border-gray-300/20 focus:outline-4 outline-purple-700/40 rounded-md p-2  resize-none" placeholder="Text Post" name="text_post" id=""></textarea>
                    </div>
                    <div className="inp w-full flex ">
                        <label className="w-full p-3 py-10  border-2 border-dashed border-gray-300/20 hover:border-gray-400 transition cursor-pointer" htmlFor="inp12">
                            <div className="title-icon flex flex-col items-center gap-1 ">
                                <i className="fa fa-image text-5xl text-purple-500"></i>
                                <p>Upload Image</p>
                            </div>
                            <input onChange={handelFile}  id="inp12" className="w-full hidden border border-gray-300 focus:outline-4 outline-purple-700/40 rounded-md" type="file" />
                        </label>
                    </div>
                </div>
                <button onClick={()=>{cerat_post()}}  className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-1 px-6 cursor-pointer hover:shadow-lg transition-all shadow-gray-400/20 rounded">Creat</button>
           {/* </form> */}
        </div>
    )
}