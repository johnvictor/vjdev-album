import React from "react";
import { Link } from "react-router-dom";
import Album from "../assets/img/album.svg";
class LoginPage extends React.Component {
  render() {
    return (
      <div className="flex min-h-screen justify-center items-center bg-gradient-to-r from-green-800 to-indigo-900">
        <form
          className="rounded-xl ring-4 ring-indigo-300 h-80 shadow-2xl m-4 p-10 w-auto flex justify-center items-center text-sm 
            bg-red-400"
        >
          <div className="block w-96 text-left">
            <h1 className="text-2xl tracking-widest text-center animate-pulse text-white font-bold">
              <img
                className="inline-block p-4 h-20 animate-pulse"
                src={Album}
                alt="album icon"
              />
              ALBUM
            </h1>

            <label htmlFor="email" className="block text-green-100">
              Email
            </label>
            <input className="rounded-md w-full h-8" autoComplete="username" />
            <div className="text-red-500 h-4 mb-4"></div>

            <label htmlFor="password" className="block text-green-100">
              Password
            </label>
            <input
              type="password"
              autoComplete="new-password"
              className="rounded-md w-full h-8"
            />
            <div className="text-red-500 h-4 mb-4"></div>

            <Link
              to="/register"
              className="cursor-pointer text-indigo-700 hover:text-white duration-500"
            >
              Register
            </Link>

            <button
              className="float-right bg-blue-600 hover:bg-blue-500 text-white
                        font-semibold hover:text-white py-2 px-4 border border-blue-500 
                        hover:border-transparent rounded"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
