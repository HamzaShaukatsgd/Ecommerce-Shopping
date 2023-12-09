import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

// import React from 'react'

const Login = () => {
  const navigate =useNavigate();
  const state = {
    username: "",
    pass: "",
  };

  const handleChange = (evt) => {
    const fields = Object.assign({}, this.state);
    fields[evt.target.name] = evt.target.value;
    this.setState({ ...fields });
    console.log(this.state);
  };

  return (
    <div>
         <a href="/" className="text-blue-700 text-[1.5rem] p-3" onClick={()=>navigate("/Home")}>go back</a>
      <div className="flex justify-center shadow-lg">
        <div className="flex flex-col absolute top-[30%] shadow-lg border-[2px] p-5 w-[60%] rounded-lg mobile:w-[90%]">
          <text className="text-2xl">Login</text>
          <div className="flex mt-3">
            <input
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
              placeholder="username"
              name="username"
              value={state.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex mt-3">
            <input
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
              placeholder="password"
              name="pass"
              value={state.pass}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="button"
            value="Login"
            className="btn mt-7 hover:scale-[1.02]"
          />
        </div>
      </div>
  

    </div>
  )
}

export default Login


// export default class Login extends Component {

  
//   state = {
//     username: "",
//     pass: "",
//   };

//   handleChange = (evt) => {
//     const fields = Object.assign({}, this.state);
//     fields[evt.target.name] = evt.target.value;
//     this.setState({ ...fields });
//     console.log(this.state);
//   };

//   render() {
//     const navigate =useNavigate();
//     return (
//       <>      <a href="/" className="text-blue-700 text-[1.5rem] p-3" onClick={()=>navigate("/Home")}>go back</a>
//       <div className="flex justify-center shadow-lg">
//         <div className="flex flex-col absolute top-[30%] shadow-lg border-[2px] p-5 w-[60%] rounded-lg mobile:w-[90%]">
//           <text className="text-2xl">Login</text>
//           <div className="flex mt-3">
//             <input
//               className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
//               placeholder="username"
//               name="username"
//               value={this.state.username}
//               onChange={this.handleChange}
//               required
//             />
//           </div>
//           <div className="flex mt-3">
//             <input
//               className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
//               placeholder="password"
//               name="pass"
//               value={this.state.pass}
//               onChange={this.handleChange}
//               required
//             />
//           </div>
//           <input
//             type="button"
//             value="Login"
//             className="btn mt-7 hover:scale-[1.02]"
//           />
//         </div>
//       </div>
//       </>

//     );
//   }
// }
