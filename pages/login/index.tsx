import { FaFacebookF, FaGoogle } from "react-icons/fa";
import Router from "next/router";
import { useState } from "react";
import axios from "axios";


const Login = () => {
  const [username, changeUsername] = useState("");
  const [password, changePassword] = useState("");
  const [message, changeMessage] = useState("");
  // alert("Reached")
  const createToken = () => {
    // Router.push("/index");

    axios
      .post("https://app.teamonetech.com/custom-auth/token/login/", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log("Response",response.data.token);
        localStorage.setItem('token',response.data.token)
        Router.push("/");
      })
      .catch((err) => {
        console.log(err.message);
        changeMessage("Unable to Login. Check Credentials and try again");
        //   alert(err.message)
      });
  };

  return (
    <div className="h-screen  w-full">
      <div className="grid h-screen p-0 grid-cols-1 m-0 lg:grid-cols-3  place-items-start place-content-stretch   font-Oxygen">
        <div className="w-full col-span-2 p-0 m-0 relative h-full bg-white  hidden mx-auto lg:flex flex-col gap-2 justify-center">
          <div className="circle-shape-one"></div>
          {/* <div className="round-shape-one"></div> */}
          <div className="round-shape-three"></div>
          <img
            className="absolute bottom-0 right-0 left-0 max-h-80 w-auto opacity-90"
            src="blob.svg"
          ></img>
          <img className="mx-auto w-96  px-2" src="cover.svg"></img>
          <h1 className="mt-10 w-1/2 mx-auto text-center text-4xl tracking-wide font-extrabold font-Roboto text-secondary">
            Satellite Based Farm Management System<br/>
          </h1>
        </div>
        <div className="h-auto my-auto  border-2   lg:mx-0  mx-auto   w-auto flex flex-col justify-center rounded-lg   ">
          <div className="sm:mx-auto bg-white sm:w-full sm:max-w-md rounded-t-2xl ">
            <img
              className="mx-auto h-12 w-auto mt-14 px-2 "
              src="logo.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-2xl font-medium text-secondary">
              Sign into your Account
            </h2>
            
           
          </div>
          <div className=" bg-white sm:mx-auto overflow-auto sm:w-full sm:max-w-md">
            <svg
              className="w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#7C9C3C"
                fill-opacity="1"
                d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-md rounded-2xl">
            <div className="bg-primary bg-opacity-9 py-4 px-6 sm:px-10 rounded-b-lg">
              {/* <form className="mb-0 space-y-6" action="#" method="POST"> */}
                <div className="relative mb-2">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className=" bg-transparent  placeholder-transparent h-10 w-full text-white focus:border-lime-400 border-0 focus:ring-0 border-b-2 border-gray-200 "
                    placeholder="email"
                    onChange={(e) => changeUsername(e.target.value)}
                  ></input>
                  <label
                    htmlFor="email"
                    className=" left-0 -top-3.5 text-white text-md transition-all duration-200 ease-in-out peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-whitw peer-focus:text-sm"
                  >
                    Email address
                  </label>
                </div>
                <div className=" mb-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className=" bg-transparent  placeholder-transparent h-10 w-full text-white focus:border-lime-400 border-0 focus:ring-0 border-b-2 border-gray-200 "
                    placeholder="Password"
                    onChange={(e) => changePassword(e.target.value)}
                  ></input>
                  <label
                    htmlFor="Password"
                    className=" left-0 -top-3.5 text-white text-md transition-all duration-200 ease-in-out peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-whitw peer-focus:text-sm"
                  >
                    Password
                  </label>
                  <br />
            
                  <div className="flex justify-center items-center my-2">
                   
              <a
                href="#"
                className="border-2 border-white bg-gray-200 rounded-full p-3 mx-1 hover:bg-primary shadow-2xl"
              >
                <FaFacebookF className="text-sm fill-blue-500 hover:fill-secondary"></FaFacebookF>
              </a>
              <a
                href="#"
                className="border-2  border-white bg-gray-200 rounded-full p-3 mx-1 hover:bg-primary  shadow-2xl"
              >
                <FaGoogle className="text-sm fill-red-500 hover:fill-secondary"></FaGoogle>
              </a>
            </div>
            <p className="mt-2 text-center text-md font-normal text-secondary max-w">
              Don't have an Account?
              <a
                href="#"
                className="font-medium text-secondary  hover:text-primary focus:outline-none focus:ring-1 focus:ring-primary mx-1 rounded focus:border-primary"
              >
                Sign Up.
              </a>
            </p>
                </div>
                {/* <div className="flex items-center">
                  <input
                    id="terms-and-privacy"
                    name="terms-and-privacy"
                    type="checkbox"
                    className="rounded-sm border-gray-300 text-lime-500 focus:ring-lime-400"
                  />
                  <label
                    htmlFor="terms-and-privacy"
                    className="ml-2 block text-sm text-secondary"
                  >
                    I agree to the
                    <a
                      href="#"
                      className="text-white hover:text-lime-300 mx-1"
                    >
                      Terms
                    </a>
                    and
                    <a
                      href="#"
                      className="text-white hover:text-white mx-1"
                    >
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div> */}
                <span hidden={message === ""}>
                  <small className={"text-red-800"}>{message}</small>
                  <br />
                </span>
                <br />
                <div>
                  <button
      
                    className="w-1/2 mx-auto flex justify-center py-2 px-4 border border-transparent  rounded-2xl bg-secondary text-lg font-medium text-white  hover:bg-banner_background hover:text-secondary  transition ease-in-out  duration-500"
                    // onClick={() => Router.push("/dasboard")}
                    onClick={() => createToken()}
                  >
                    Sign In
                  </button>
                </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
