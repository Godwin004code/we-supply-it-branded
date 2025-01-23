import React, {useEffect, useState} from "react";

export default function Login({setActive}) {
  const [state, setState] = useState([])

 
//   useEffect(() => {
//     console.log(stateArr);
//     getState();
//   }, []);

//   function getState () {
//     try{
//       let sts = [];
//       let cti = [];

//       stateArr.forEach((res) => {
//         sts.push({
//           key: res.name,
//           value: res.name,
//         })

//         cti.push({
//           key: res.name,
//           value: res.name,
//         })
//       })
//       setState([
//         { key: 'Select State', value:''},
//         ...sts
//       ])
//     }catch(err){
//       console.log(err)
//     }
//   }

  return (
    <form className="flex flex-col gap-8 register-form max-w-[1000px]">
      

      <div className="flex sm:flex-col items-center gap-3">
        
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="company-email" className="flex items-start">
            Company Email Address
            <span className="text-[red] text-xs items-start inline">*</span>
          </label>
          <input className="h-[50px] pl-3 rounded-lg brd" type="text" name="company-email" id="company-email" />
        </div>
      </div>
      {/* Password */}
      <div className="flex items-center gap-3">
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="password " className="flex items-start">
            Password{" "}
            <span className="text-[red] text-xs items-start inline">*</span>
          </label>
          <input className="h-[50px] pl-3 rounded-lg brd" type="text" name="password" id="password" />
        </div>
      </div>


      <button className="font-bold bg-[#39d8fc] p-3 text-white rounded-md w-full">
        Login
      </button>
      <p className="text-center cursor-pointer">
          Don't have an account? <span className="text-[#39d8fc]" onClick={() => setActive(false)}>Register</span>{" "}
          
        </p>
    </form>
  );
}
