import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import React from 'react'
import '../App.css'
import logo from '../assets/Logo.png'


function LoginPages() {
    const navigate = useNavigate()
    const [count, setCount] = useState(0)
  return (
    <>
    <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center mt-9">
            <figure><img src={logo} className='Card-Image' /></figure>
                <h2 className="text-4xl font-bold text-center text-gray-700 light:text-black">Login</h2>
              
            </div>

              <div className="mt-16">
                  <form>
                      
                    <div>
                          <input type="email" name="email" id="email" placeholder="Email" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-full light:placeholder-gray-600 light:bg-red-900 light:text-gray-300 light:border-red-700 focus:border-red-400 lgiht:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                      </div>

                      <div>
                          <input type="password" name="password" id="password" placeholder="Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-full light:placeholder-gray-600 light:bg-gray-900 light:text-gray-300 light:border-gray-700 focus:border-red-400 light:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                      </div>

                      <div className="mt-6 ">
                          <button
                              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-500 rounded-full hover:bg-red-400 focus:outline-none focus:bg-red-400 focus:ring focus:ring-red-300 focus:ring-opacity-50">
                              <a href="#">Register</a>
                          </button>
                      </div>

                  </form>

                  <p className="mt-6 text-sm text-center text-gray-400">------------------------or------------------------</p>
                  <div className="mt-6 justify-between">
                          <button
                              className="flex-1 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform mr-4 bg-white-500 rounded-full hover:bg-light-400 focus:outline-none focus:bg-light-400 focus:ring focus:white-red-300 focus:ring-opacity-50w-32 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-500 rounded-full hover:bg-red-400 focus:outline-none focus:bg-red-400 focus:ring focus:ring-red-300 focus:ring-opacity-50">
                              <a href="#">Facebook</a>
                          </button>
                          <button
                              className="flex-1 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-500 rounded-full hover:bg-red-400 focus:outline-none focus:bg-red-400 focus:ring focus:ring-red-300 focus:ring-opacity-50w-32 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-500 rounded-full hover:bg-red-400 focus:outline-none focus:bg-red-400 focus:ring focus:ring-red-300 focus:ring-opacity-50">
                              <a href="#">Google</a>
                          </button>
                          
                      </div>
                  <p className="mt-6 text-sm text-center text-gray-400">By signing in, you agree to our Terms and <b>Privacy Policy.</b></p>
                  <p className="mt-6 text-sm text-center text-gray-400">This site is protected by reCAPTCHA Enterprise and the Google <b>Privacy Policy</b> and <b>Terms of Service</b> apply.</p>

                  
              </div>
          </div>
      </div>
    </>
  )
}

export default LoginPages