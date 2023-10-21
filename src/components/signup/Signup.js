
// import React, { useRef} from 'react'


// const Signup = () => {

//   const f_name=useRef("");
//   const age=useRef("");
//   const email_id=useRef("");
//   const mob_num=useRef("");
//   const pass=useRef("");
//   const confirm_pass=useRef("");

//   const addUser=(event)=>{

//     event.preventDefault();

//     let user = {
//       f_name:f_name.current.value,
//       age:age.current.value,
//       mob_num:mob_num.current.value,
//       email_id:email_id.current.value,
//       pass:pass.current.value,
//       confirm_pass:confirm_pass.current.value
//     }
//   }

//   return (
//     <>
//       <div className="main">
//         <div className="title">
//           Sign Up
//         </div>
//         <div className="div1">
//           <input type="text" placeholder="Full Name" name="f_name"/>
//         </div>
//         <div className="div1">
//           <div className="div2-1">
//             <input type="text" placeholder="Age" name="age"/>
//           </div>
//           <div className="div2-2">
//             <input type="text" placeholder="Mobile Number" name="mob_num" />
//           </div>
//         </div>
//         <div className="div1">
//           <input type="text" placeholder="Email Address" name="email_id" id="" />
//         </div>
//         <div className="div1">
//           <div className="div4-1">
//             <input type="text" placeholder="Password" name="pass" id="" />
//           </div>
//           <div className="div4-2">
//             <input type="text" placeholder="Confirm Password" name="confirm_pass" id="" />
//           </div>
//         </div>
//         <div className="div1">
//           <button onClick={addUser}>Sign Up</button>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Signup