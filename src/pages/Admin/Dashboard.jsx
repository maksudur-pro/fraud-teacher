const Dashboard = () => {
  return (
    <div>
      <div className="min-h-screen flex antialiased">
        <div className="flex flex-col w-14 md:w-64 h-full transition-all duration-300 z-10">
          <div className="fixed  overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
            <ul className="flex flex-col py-4 space-y-1">
              <li className="px-5 hidden md:block">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                    Main
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate hidden md:block">
                    Dashboard
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate  hidden md:block">
                    Board
                  </span>
                  <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-indigo-50 rounded-full">
                    New
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate hidden md:block">
                    Messages
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate hidden md:block">
                    Notifications
                  </span>
                  <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                    1.2k
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-[50%] lg:w-[50%] mx-auto">
          <div className="px-10 py-8  ">
            <div className=" mx-auto space-y-6">
              <div className="h-8">
                <h1 className="text-2xl uppercase text-center font-bold">
                  Report
                </h1>
              </div>

              <form>
                <legend className="mb-2 text-sm font-medium">
                  Report type *
                </legend>
                <select className="select select-neutral rounded-sm border border-black ">
                  <option disabled={true}>Pick a type</option>
                  <option>Tutor</option>
                  <option>Guardian</option>
                  <option>Tuition media</option>
                </select>

                <legend className="my-2 text-sm font-medium">
                  Your name *
                </legend>
                <input
                  type="text"
                  className="input rounded-sm border border-black w-full"
                  placeholder="Enter your name"
                />

                <legend className="my-2 text-sm font-medium">
                  Phone number *
                </legend>
                <input
                  type="tel"
                  className="input rounded-sm border border-black w-full"
                  placeholder="Enter your number"
                />

                <legend className="my-2 text-sm font-medium">
                  Accused name *
                </legend>
                <input
                  type="text"
                  className="input rounded-sm border border-black w-full"
                  placeholder="Enter accused name"
                />
                <legend className="my-2 text-sm font-medium">
                  Accused phone number *
                </legend>
                <input
                  type="tel"
                  className="input rounded-sm border border-black w-full"
                  placeholder="Enter accused number"
                />
                <legend className="my-2 text-sm font-medium">
                  Upload supporting evidence
                </legend>
                <input
                  type="file"
                  className="file-input rounded-sm border border-black w-full"
                />

                <legend className="my-2 text-sm font-medium">
                  Summary of experience
                </legend>
                <textarea
                  className="textarea h-24 rounded-sm border border-black w-full"
                  placeholder="Enter your experience"></textarea>
              </form>

              <button
                type="submit"
                className="w-full p-4 text-xl text-black font-semibold bg-[#fdbe2e] rounded-md transition-all duration-300 ease-in-out hover:text-white hover:shadow-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
