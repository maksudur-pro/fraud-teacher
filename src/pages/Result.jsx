import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center items-center lg:w-full lg:h-screen p-4">
        <div className="flex flex-col lg:flex-row lg:gap-4 p-4 lg:p-6 mx-0 bg-white bg-opacity-60 shadow-sm rounded-2xl w-full lg:w-[1000px]">
          {/* Left Section: Fraud Risk Level  */}

          <div className="w-full lg:w-1/3 ">
            <div className="block md:hidden">
              <form className="flex flex-col mt-2 md:flex-row items-center gap-2 w-full">
                <div className="search-box flex items-center border border-black rounded-md p-1 w-full max-w-[400px] hover:shadow-lg">
                  <input
                    type="tel"
                    name="phone"
                    maxLength="11"
                    placeholder="Mobile Number"
                    className="input-field w-full px-4 py-2 rounded-l-md md:h-[50px] h-[45px] bg-white text-[#333333] border-none outline-none"
                  />
                  <button
                    type="submit"
                    id="reportButton"
                    className="search-button md:text-[16px] text-[14px] md:h-[45px] h-[45px] md:w-[240px] w-[180px] font-semibold bg-[#fdbe2e] text-black rounded-md transition-all duration-300 ease-in-out hover:text-white hover:shadow-lg">
                    রিপোর্ট দেখুন
                  </button>
                </div>
              </form>

              <p
                id="errorMessageLeft"
                className="text-red-500 hidden m-0 mt-2 text-center">
                Invalid mobile number.
              </p>

              <div className="mt-2 text-center text-lg font-semibold text-gray-500">
                <p>
                  Your Number is
                  <span className="font-bold text-black"> 01721308663</span>
                </p>
              </div>
            </div>
            <div className="text-center border border-black rounded-lg mt-4 md:mt-2">
              <div className="logo lg:flex justify-center px-6 pt-6">
                <h1 className="text-center  font-bold">
                  <span className="text-2xl uppercase text-[#fdbe2e]">
                    Safe <span className="text-black">Tuition</span>
                  </span>
                </h1>
              </div>
              <div className="px-0 lg:px-6">
                <p className="my-3 md:mb-6 text-xl font-semibold">
                  Tuition Confirm Ratio
                </p>
                <div className="flex justify-center items-center h-full">
                  <div
                    className="radial-progress text-lime-600"
                    style={
                      {
                        "--value": "100",
                        "--size": "12rem",
                        "--thickness": "15px",
                      } /* as React.CSSProperties */
                    }
                    aria-valuenow={70}
                    role="progressbar">
                    100%
                  </div>
                </div>
                <p className="text-2xl mt-4 font-semibold text-black risk-text">
                  Excellent
                </p>
                <p
                  id="risk-message"
                  className="my-2 text-center text-gray-600 text-base lg:text-lg font-medium">
                  No Risk
                </p>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="w-full lg:w-2/3 rounded-lg lg:p-6 mt-6 lg:mt-0">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold uppercase mb-3">Student</h1>
              <button
                onClick={() => navigate("/report")}
                className="mb-4 p-2 text-sm font-semibold bg-[#fdbe2e] text-black rounded-md  transition-all duration-300 ease-in-out hover:text-white hover:shadow-lg hover:scale-105">
                রিপোর্ট করুন
              </button>
            </div>
            <div className="hidden lg:block w-full">
              <form className="flex flex-col md:flex-row items-center gap-4 w-full">
                <div className="search-box flex items-center border border-black rounded-md p-1 w-full  hover:shadow-lg">
                  <input
                    type="tel"
                    maxLength="11"
                    placeholder="Mobile Number"
                    className="input-field w-full px-4 py-2 rounded-l-md md:h-[50px] h-[45px] bg-white text-[#333333] border-none outline-none"
                  />
                  <button
                    type="submit"
                    className="search-button md:text-[16px] text-[16px] md:h-[45px] h-[45px] md:w-[240px] w-[180px] font-semibold bg-[#fdbe2e] text-black rounded-md transition-all duration-300 ease-in-out hover:text-white hover:shadow-lg">
                    রিপোর্ট দেখুন
                  </button>
                </div>
              </form>
              <p className="text-red-500 mt-2 hidden">Invalid mobile number.</p>
              <div className="mt-2 text-center text-lg font-semibold text-gray-500">
                <p>
                  Your Number is
                  <span className="font-bold text-black"> 01721308663</span>
                </p>
              </div>
            </div>
            {/* Tuition Summary  */}
            <div className="grid grid-cols-3 gap-4 md:mt-6 text-center">
              <div
                className="p-1 lg:p-4 bg-white rounded-lg w-full"
                style={{
                  boxShadow: "0px 6px 24px 0px rgba(6, 128, 250, 0.05)",
                }}>
                <p className="text-xl lg:text-2xl font-bold">2</p>
                <p className="text-sm text-gray-600">মোট টিউশন</p>
              </div>
              <div
                className="p-1 lg:p-4 bg-white rounded-lg w-full"
                style={{
                  boxShadow: "0px 6px 24px 0px rgba(6, 128, 250, 0.05)",
                }}>
                <p className="text-xl lg:text-2xl font-bold">2</p>
                <p className="text-sm text-gray-600">মোট কনফার্ম টিউশন</p>
              </div>
              <div
                className="p-1 lg:p-4 bg-white rounded-lg w-full"
                style={{
                  boxShadow: "0px 6px 24px 0px rgba(6, 128, 250, 0.05)",
                }}>
                <p className="text-xl lg:text-2xl font-bold">0</p>
                <p className="text-sm text-gray-600">মোট বাতিল টিউশন</p>
              </div>
            </div>
            <div className="mt-4 border border-black rounded-lg p-4">
              <h2 className="text-lg">
                একজন দায়িত্বশীল ও পরিশ্রমী শিক্ষক। ধৈর্যসহকারে বুঝিয়ে পড়ানোর
                দক্ষতা রয়েছে, তবে আরও অভিজ্ঞতা অর্জনের সুযোগ আছে।
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
