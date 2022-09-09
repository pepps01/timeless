import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex bg-[#F0E6F0] w-[67.75rem]  rounded-[34.33px] pl-[61.33px] pr-[32px] pt-[41px] pb-[27px]">
        <div className="w-[30rem] pr-[138.7px]">
          <div>
            <p className=" font-bold text-[1.875rem] leading-[54.93px] text-[#090F47]">
              Interested in partnering with us or you’ve got questions ?
            </p>
          </div>
          <div className="mt-[41px]">
            <p>
              We are onboarding medical practitioners interested in shaping the
              future of primary care to work with our clients across our various
              platforms and services. 
            </p>
            <p className = "mt-2">You can join our team and be a force for
              good while earning on your downtime.</p>
          </div>
        </div>

        <div className="w-[29rem]  bg-white shadow-md rounded-[34.33px] px-0 mx-0 pt-6 pb-8 mb-4">
          <div class="">
            <form class="">
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-[0.75rem] leading-[12.02px] font-medium mb-2 mx-0"
                  for="username"
                >
                  Full Name
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-3 mt-[22.32px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="fullname"
                  type="text"
                  placeholder="Full Name"
                />
              </div>

              <div class="mb-4">
                <label
                  class="block text-gray-700 mt-[29px] text-[0.75rem] leading-[12.02px] font-medium mb-2 mx-0"
                  for="username"
                >
                  Email
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-3 mt-[22.32px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Email"
                />
              </div>

              <div class="mb-4">
                <label
                  class="block text-[#090F47] mt-[29px] text-[0.75rem] leading-[12.02px] font-medium mb-2 mx-0"
                  for="username"
                >
                  Phone Number
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-3 mt-[22.32px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="text"
                  placeholder="Phone Number"
                />
              </div>

              <div class="mb-4">
                <label
                  class="block text-gray-700 mt-[29px] text-[0.75rem] leading-[12.02px] font-medium mb-2 mx-0"
                  for="Company"
                >
                  Company
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-3 mt-[22.32px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Company"
                  type="text"
                  placeholder="Company"
                />
              </div>

              <div class="mb-4">
                <label
                  class="block text-gray-700 mt-[29px]  text-[0.75rem] leading-[12.02px] font-medium mb-2 mx-0"
                  for="Company"
                >
                  Message
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-3 mt-[22.32px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Company"
                  type="text"
                  placeholder="Message"
                />
              </div>

              <div class="mb-4">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="3"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your message..."
              ></textarea>
              </div>
              <div class="flex items-center justify-between">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign In
                </button>
                <a
                  class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </form>
            <p class="text-center text-gray-500 text-xs">
              &copy;2020 Acme Corp. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
