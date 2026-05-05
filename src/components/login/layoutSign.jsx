import { Outlet } from "react-router-dom";

function LayoutSign() {

    return (
      <div className="flex justify-center p-3 pt-20">
        <Outlet/>
      </div>
    )
  }
  
  export default LayoutSign;