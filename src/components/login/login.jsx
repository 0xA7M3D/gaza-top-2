import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";




function Login(){
    console.log("Normal text %cHello text %cGreen text", "color: red", "color: green");

    const [show , SetShow] = useState(false);
    const [faucus , SetFaucus] = useState({facus1:false , facus2:false});
    // console.log(faucus.facus1 , faucus.facus2);

    // SetFaucus(...{facus1:true})
    // function change_facus(target){

    // }

      const [data_user , Set_data_user] = useState({user:'',pass:''})
    //   const data_user = {name:"Ahmed" , user:'@ahm',pass:'123456'};
      const [msg , Set_Msg] = useState({error:false,msg:''});
      // Close Notefications
      const [close , setClose] = useState(false);

      const navigat = useNavigate();

      useEffect(()=>{
        console.log(msg);
        if (msg.error == true) {
            // setTimeout(() => {
                navigat('/');
            // }, 1000);
        }
      },[msg])

      
      function send(e){
            e.preventDefault();
            const data_form = new FormData();
            
            data_form.append('name' , data_user.user);
            data_form.append('pass' , data_user.pass);
            
            
                fetch("http://localhost/Gaza-Top/Gaza-Top/Api/login.php",{
                    method: 'POST',
                    body: data_form
                    // credentials: "include",
                })
                .then(resp => resp.json())
                .then(data =>{
                    console.log(data);   
                    // Set_Msg({...msg,msg:data.Errors_content});
                })

            setClose(false)

        }

    return(
        <div className="relative">

            <div className={`notefication2 border-b  absolute ${close? "-top-40":"-top-3"}  ${msg.error!=null? "-top-3": "-top-20"} ${msg.error == false ? "border-green-400" :"border-red-300"} transition-all rounded-lg text-neutral-800 -translate-1/2 left-1/2 z-40 w-[450px] bg-gray-800 shadow-lg shadow-neutral-300/20`}>
                <div className="flex justify-between p-3 py-4 items-center">
                    <div className="ll flex items-center gap-4">
                        {
                        msg.error == true?
                        <i className="fa fa-exclamation-triangle text-xl text-red-600"></i>
                        :msg.error == false? <i className="fa fa-check-circle text-xl text-green-600"></i>
                        :
                        ""
                        }
                
                        <p className="text-neutral-400">{ msg.error!= null ? msg.msg : ""}</p>
                    </div>
                    <div onClick={()=>{setClose(true)}} className="btn_clos cursor-pointer text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200 p-0.5 rounded-full transition-all px-2">
                        <i className="fa fa-close"></i>
                    </div>
                </div>
            </div>


            <div className="login gap-4 shadow-2xl flex flex-col items-center relative  p-5  py-9 bg-gray-800/80 text-black rounded-lg w-[450px] border-0 border-violet-400">
         
                
                <div className="title_page absolute -translate-1/2 top-0 right-0 scale-3d -skew-x-12 bg-violet-400 p-1 px-3 text-white rounded-sm ">
                    <p>Login</p>
                </div>
                <div className="text_title text-3xl leading-4 w-full">
                    <p className="text-sm text-gray-600/90  ">Welcome to</p>
                    <h3 className="text-center text-violet-500 font-bold">Gaza Top</h3>
                </div>
                <form onSubmit={send} method="post" className="contents">
                    <div className="inps flex flex-col py-4 w-full gap-4">
                        <div className="inp-1 flex relative items-center flex-row">
                            <i className={`fa fa-at ${faucus.facus1 ? "text-violet-400":"text-gray-500"}`}></i>
                            <span className={`absolute -translate-1/2 ${faucus.facus1 ? "top-0 left-15 text-gray-700 text-sm":"top-1/2 left-16"} transition-all  text-gray-600 z-[1] `}> Name @ </span>
                            <input onChange={(e)=>Set_data_user((provid)=>({...provid,user:e.target.value}))} onFocus={()=>SetFaucus((prev)=>({...prev,facus1:true}))} onBlur={(e)=> SetFaucus((prev)=> ({...prev,facus1: e.target.value?true:false}))} className={`w-full p-1 px-3 border-b ${faucus.facus1 ? "border-violet-500/40":"border-white/10"} outline-none relative z-[3] text-gray-300 pl-5`} type="text" />
                        </div>
                        <div className="inp-1 flex relative items-center flex-row">
                            <i className={`fa fa-key ${faucus.facus2 ? "text-violet-400":"text-gray-500"}`}></i>
                            <span className={`absolute -translate-1/2 ${faucus.facus2 ? "top-0 left-16 text-gray-700 text-sm":"top-1/2 left-16"} transition-all  text-gray-600 z-[1] `}> Password </span>
                            <input onChange={(e)=>Set_data_user((provid)=>({...provid,pass:e.target.value}))} onFocus={()=>SetFaucus( (prev)=>({...prev, facus2:true}))} onBlur={(e)=> SetFaucus((prev)=> ({...prev,facus2:e.target.value ? true:false}))} className={`w-full p-1 px-3 border-b ${faucus.facus2 ? "border-violet-500/40":"border-white/10"} outline-none relative z-[3] text-gray-300 pl-5`} type={`${show?"text":"password"}`} />
                            <i onClick={()=>{SetShow(!show)}} className={`far fa-eye${show ? "-slash":""} absolute cursor-pointer -translate-1/2 top-1/2 right-0 z-[4]`}></i>
                        
                        </div>
                    </div>
                    <div className="btn w-full">
                        <button className="p-1 w-full rounded cursor-pointer text-white  bg-violet-500/90 hover:bg-violet-500 hover:scale-[0.98] active:bg-violet-500 active:scale-[0.98] transition " type="submit">Login</button>
                    </div>
                </form>
                {/* <hr className="w-1/2 text-violet-400"/> */}
                <div className="or flex items-center w-full text-neutral-900/10">
                    <hr className="w-full" />
                    <p className="text-neutral-800 px-4">OR</p>
                    <hr className="w-full" />
                </div>

                <Link to={'/sign/signup'}>
                    <p className="underline text-violet-900"> SignUp </p>
                </Link>



            </div>
        </div>

    )

}

export default Login;