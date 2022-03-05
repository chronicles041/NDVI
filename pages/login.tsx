import { FaFacebookF, FaGoogle } from "react-icons/fa";
import Router from "next/router";

type LoginPageProps = {
  t: Function;
};
const Login = ({ t }: LoginPageProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  m-auto place-items-center place-content-center min-h-screen overflow-auto  font-Oxygen">
      <div className="w-full relative min-h-screen bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 overflow-hidden hidden mx-auto lg:flex flex-col gap-2 justify-center">
        <div className="circle-shape-one"></div>
        <div className="round-shape-one"></div>
        <div className="round-shape-two"></div>
        <div className="round-shape-three"></div>
        <img
          className="absolute bottom-0 right-0 left-0 w-auto h-auto"
          src="blob.svg"
        ></img>
        <img className="mx-auto w-auto h-auto px-2" src="cover.svg"></img>
        <h1 className="mt-10 text-center text-3xl font-semibold text-white">
          Farm Insure Management for Rapid <br />
          and Fast Insucrance Claim
        </h1>
      </div>
      <div className="min-h-screen bg-gradient-to-r from-lime-300 via-lime-500 to-lime-600  w-full flex flex-col justify-center py-12 px-6 lg:px-8 overflow-hidden shadow-custom-shadow">
        <div className="sm:mx-auto bg-lime-400 sm:w-full sm:max-w-md rounded-t-lg shadow-2xl">
          <img
            className="mx-auto h-12 w-auto mt-4"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-2xl font-medium text-white">
            Sign into your Account
          </h2>
          <div className="text-center mt-3">
            <span className="inline-block w-1 h-1 rounded-full bg-white ml-1"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-gray-500 ml-1"></span>
            <span className="inline-block w-40 h-1 rounded-full bg-white ml-2"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-gray-500 ml-1"></span>
            <span className="inline-block w-1 h-1 rounded-full bg-white ml-1"></span>
          </div>
          <div className="flex justify-center items-center my-2">
            <a
              href="#"
              className="border-2  border-white rounded-full p-3 mx-1 hover:bg-white shadow-2xl"
            >
              <FaFacebookF className="text-sm fill-blue-500 hover:fill-black"></FaFacebookF>
            </a>
            <a
              href="#"
              className="border-2  border-white rounded-full p-3 mx-1 hover:bg-white  shadow-2xl"
            >
              <FaGoogle className="text-sm fill-red-500 hover:fill-black"></FaGoogle>
            </a>
          </div>
          <p className="mt-2 text-center text-md font-normal text-white max-w">
            Don't have an Account?
            <a
              href="#"
              className="font-medium text-gray-500  hover:text-white focus:outline-none focus:ring-1 focus:ring-white mx-1 rounded focus:border-white"
            >
              Sign Up.
            </a>
          </p>
        </div>
        <div className=" bg-lime-400 sm:mx-auto sm:w-full sm:max-w-md shadow-2xl">
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md shadow-2xl">
          <div className="bg-white py-8 px-6 shadow rounded-b-lg sm:px-10">
            <form className="mb-0 space-y-6" action="#" method="POST">
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="text"
                  className="peer  placeholder-transparent h-10 w-full text-gray-600 focus:border-lime-400 border-0 focus:ring-0 border-b-2 border-gray-200 "
                  placeholder="Email address"
                ></input>
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-gray-500 text-md transition-all duration-200 ease-in-out peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Email address
                </label>
              </div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="peer  placeholder-transparent h-10 w-full text-gray-600 focus:border-lime-400 border-0 focus:ring-0 border-b-2 border-gray-200 "
                  placeholder="Password"
                ></input>
                <label
                  htmlFor="Password"
                  className="absolute left-0 -top-3.5 text-gray-500 text-md transition-all duration-200 ease-in-out peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Password
                </label>
              </div>
              <div>
                <label
                  htmlFor="company-size"
                  className="block text-md text-gray-600"
                >
                  User Type
                </label>
                <div className="mt-1">
                  <select
                    name="company-size"
                    id="company-size"
                    className="w-full  rounded-lg shadow-sm border-gray-300 focus:ring-lime-400 focus:border-lime-400"
                  >
                    <option value="">Super Admin</option>
                    <option value="small">Admin</option>
                    <option value="medium">Champions</option>
                    <option value="large">Others Users</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="terms-and-privacy"
                  name="terms-and-privacy"
                  type="checkbox"
                  className="rounded-sm border-gray-300 text-lime-500 focus:ring-lime-400"
                />
                <label
                  htmlFor="terms-and-privacy"
                  className="ml-2 block text-sm text-gray-600"
                >
                  I agree to the
                  <a
                    href="#"
                    className="text-lime-400 hover:text-lime-300 mx-1"
                  >
                    Terms
                  </a>
                  and
                  <a
                    href="#"
                    className="text-lime-400 hover:text-lime-300 mx-1"
                  >
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-lg text-lg font-medium text-white bg-lime-500 hover:bg-lime-400 neumorph transition ease-in-out  duration-300"
                  onClick={() => Router.push("/dasboard")}
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
