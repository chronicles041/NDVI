import { FaFacebookF, FaGoogle } from "react-icons/fa";
import Router from "next/router";
import { useState } from "react";
import axios from "axios";

type LoginPageProps = {
  t: Function;
};
const Login = ({ t }: LoginPageProps) => {
  const [username, changeUsername] = useState("");
  const [password, changePassword] = useState("");
  const [message, changeMessage] = useState("");
  // alert("Reached")
  const createToken = () => {
    axios
      .post("https://app.teamonetech.com/auth/token/login/", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
        Router.push("/dashboard");
      })
      .catch((err) => {
        console.log(err.message);
        changeMessage("Unable to Login. Check Credentials and try again");
        //   alert(err.message)
      });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  m-auto place-items-center place-content-center min-h-screen overflow-auto  font-Oxygen">
      <div className="w-full relative h-full bg-banner_background overflow-hidden hidden mx-auto lg:flex flex-col gap-2 justify-center">
        <div className="circle-shape-one"></div>
        <div className="round-shape-one"></div>
        <div className="round-shape-two"></div>
        <div className="round-shape-three"></div>
        <img
          className="absolute bottom-0 right-0 left-0 w-auto h-auto opacity-90"
          src="blob.svg"
        ></img>
        <img className="mx-auto w-auto h-auto px-2" src="cover.svg"></img>
        <h1 className="mt-10 text-center text-3xl font-semibold text-secondary">
          PlantSat DashBoard Management <br />
          For Precision Agriculture.
        </h1>
      </div>
      <div className="min-h-screen linear-bg w-full flex flex-col justify-center py-12 px-6 lg:px-8 overflow-hidden shadow-custom-shadow">
        <div className="sm:mx-auto bg-banner_background sm:w-full sm:max-w-md rounded-t-lg shadow-2xl">
          <img
            className="mx-auto h-12 w-auto mt-4 "
            src="logo.png"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-2xl font-medium text-secondary">
            Sign into your Account
          </h2>
          <div className="text-center mt-3">
            <span className="inline-block w-1 h-1 rounded-full bg-primary ml-1"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-secondary ml-1"></span>
            <span className="inline-block w-40 h-1 rounded-full bg-primary ml-2"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-secondary ml-1"></span>
            <span className="inline-block w-1 h-1 rounded-full bg-primary ml-1"></span>
          </div>
          <div className="flex justify-center items-center my-2">
            <a
              href="#"
              className="border-2  border-primary rounded-full p-3 mx-1 hover:bg-primary shadow-2xl"
            >
              <FaFacebookF className="text-sm fill-blue-500 hover:fill-secondary"></FaFacebookF>
            </a>
            <a
              href="#"
              className="border-2  border-primary rounded-full p-3 mx-1 hover:bg-primary  shadow-2xl"
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
        <div className=" bg-banner_background sm:mx-auto sm:w-full sm:max-w-md">
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
        <div className="sm:mx-auto sm:w-full sm:max-w-md shadow-2xl">
          <div className="bg-primary py-8 px-6 rounded-b-lg sm:px-10">
            {/* <form className="mb-0 space-y-6" action="#" method="POST"> */}
              <div className="relative bg-primary">
                <input
                  id="email"
                  name="email"
                  type="text"
                  className="peer bg-primary placeholder-transparent h-10 w-full text-gray-200 focus:border-banner_background border-0 focus:ring-0 border-b-2 border-gray-200 "
                  placeholder="Email address"
                  onChange={(e) => changeUsername(e.target.value)}
                ></input>
                <label
                  htmlFor="email"
                  className=" left-0 -top-3.5 text-white text-md transition-all duration-200 ease-in-out peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
                >
                  Email address
                </label>
              </div>
              <div className="relative bg-primary">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="peer  bg-primary  placeholder-transparent h-10 w-full text-white focus:border-lime-400 border-0 focus:ring-0 border-b-2 border-gray-200 "
                  placeholder="Password"
                  onChange={(e) => changePassword(e.target.value)}
                ></input>
                <label
                  htmlFor="Password"
                  className=" left-0 -top-3.5 text-white text-md transition-all duration-200 ease-in-out peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-whitw peer-focus:text-sm"
                >
                  Password
                </label>
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
                
                  className="w-full flex justify-center py-2 px-4 border border-transparent shadow-xl rounded-2xl bg-secondary text-lg font-medium text-white  hover:bg-banner_background hover:text-secondary neumorph transition ease-in-out  duration-500"
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
  );
};
export default Login;
