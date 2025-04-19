import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Home = () => {
  const navigate = useNavigate();

  const { loading } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/result");
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen w-screen bg-white">
          <progress className="progress w-56"></progress>
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-screen">
          <div className="shadow-sm rounded-2xl text-center bg-white bg-opacity-60 mx-4 py-12 w-full lg:w-[1000px]">
            <h1 className="text-center  font-bold">
              <span className="text-3xl uppercase text-[#fdbe2e]">
                Safe <span className="text-black">Tuition</span>
              </span>
            </h1>
            <p className="text-xl md:text-3xl lg:text-[46px] mt-8 lg:mt-[50px] ">
              Safe Tuition ব্যবহার করে <br />
              <span className="font-semibold text-[#fdbe2e] leading-tight md:leading-[7rem] lg:leading-[7rem]">
                টিউশন প্রতারণা থেকে নিরাপদ থাকুন
              </span>
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex justify-center mt-8 lg:mt-[50px] mx-2 md:mx-16 lg:mx-0">
              <div className="search-box flex border border-black rounded-md p-1 w-[90%] hover:shadow-lg">
                <input
                  id="mobileNumber"
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  className="input-field w-full px-4 py-3 rounded-l-md md:h-[60px] h-[45px] bg-white text-[#333333] border-none outline-none"
                  maxLength="11"
                />

                <button
                  type="submit"
                  id="reportButton"
                  className="search-button md:text-[20px] text-[14px] md:h-[60px] h-[45px] md:w-[240px] w-[180px] font-semibold bg-[#fdbe2e] text-black rounded-md transition-all duration-300 ease-in-out hover:text-white hover:shadow-lg">
                  রিপোর্ট দেখুন
                </button>
              </div>
            </form>

            {/*  */}

            <div className="bottom-section flex flex-col md:flex-row justify-between items-center mx-4 md:mx-12 lg:mx-[60px] mt-4 lg:mt-[80px]">
              <div className="text-center md:text-left mb-8 lg:mb-0">
                <button
                  onClick={() => navigate("/report")}
                  className=" p-2 text-sm font-semibold bg-[#fdbe2e] text-black rounded-md transition-all duration-300 ease-in-out hover:text-white hover:shadow-lg hover:scale-105">
                  রিপোর্ট করুন
                </button>
              </div>
              <div className="relative flex flex-col items-end">
                <p className="text-black text-[11px] text-center md:text-right">
                  টিউটর বা টিউশন খুঁজতে আমাদের ফেসবুক গ্রুপে যুক্ত থাকুন
                </p>
                <a
                  className="text-[14px] flex items-center justify-center mt-2 md:h-[50px] h-[40px] md:w-[120px] w-[100px] font-bold bg-[#fdbe2e] text-black rounded-md mr-6 transition-all duration-300 ease-in-out hover:text-white hover:shadow-lg hover:scale-105"
                  href="https://www.facebook.com/share/g/1B9YSZKWCm/"
                  target="_blank">
                  ফেসবুক গ্রুপ
                </a>

                <div className="absolute -right-7 top-3">
                  <img src="/down-arrow.svg" alt="arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
