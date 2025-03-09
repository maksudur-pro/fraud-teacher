import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/result");
  };

  return (
    <>
      <div
        className="flex justify-center items-center w-full h-[550px] md:h-[650px] lg:h-[790px] bg-cover bg-center"
        style={{ backgroundImage: "url('/intro_bg.png')" }}>
        <div className="shadow-sm rounded-2xl text-center bg-white bg-opacity-60 mx-4 py-12 w-full lg:w-[1000px]">
          <h1 className="text-center text-2xl font-bold">
            Tuition Fraud Check
          </h1>
          <p className="text-xl md:text-3xl lg:text-[46px] mt-8 lg:mt-[50px] ">
            ফেইক টিউটর সনাক্ত করে <br />
            <span className="font-semibold text-[#fdbe2e] leading-tight md:leading-[7rem] lg:leading-[7rem]">
              টিউশন ক্যান্সেল এর পরিমাণ কমান
            </span>
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex justify-center mt-8 lg:mt-[50px] mx-2 md:mx-16 lg:mx-0">
            <div className="search-box flex border border-black rounded-md p-1 w-[90%] hover:shadow-lg">
              <input
                id="mobileNumber"
                type="number"
                name="phone"
                placeholder="Mobile Number"
                className="input-field w-full px-4 py-3 rounded-l-md md:h-[60px] h-[45px] bg-white text-[#333333] border-none outline-none"
                maxLength="11"
              />

              <button
                type="submit"
                id="reportButton"
                className="search-button md:text-[20px] text-[16px] md:h-[60px] h-[45px] md:w-[240px] w-[180px] font-semibold bg-[#fdbe2e] text-black rounded-md transition-all duration-300 ease-in-out hover:text-white hover:shadow-lg">
                রিপোর্ট দেখুন
              </button>
            </div>
          </form>

          {/*  */}

          <div className="bottom-section flex flex-col md:flex-row justify-between items-center mx-4 md:mx-12 lg:mx-[60px] mt-4 lg:mt-[80px]">
            <div className="text-center md:text-left md:mb-0 mb-14">
              <a href="/users/register">
                <span className="hover:text-[#fab12f]">Create Account</span>
              </a>
              {"  "}|
              <a href="/users/login">
                <span className="text-[#fdbe2e]">Log In</span>
              </a>
            </div>
            <div className="relative flex flex-col items-end">
              <p className="text-black text-[11px] text-center md:text-right">
                টিউটর খুঁজতে আমাদের গ্রুপে টিউশন অফার পোস্ট করুন
              </p>
              {/* <a
                href="https://www.facebook.com/groups/storexbd"
                target="_blank">
               
              </a> */}
              <button className="search-button mt-2 md:h-[50px] h-[40px] md:w-[140px] w-[100px] font-semibold bg-[#fdbe2e] text-black rounded-md mr-6 transition-all duration-300 ease-in-out hover:text-white hover:shadow-lg hover:scale-105">
                সিক্রেট গ্রুপ
              </button>

              <div className="absolute -right-7 top-3">
                <img src="/down-arrow.svg" alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
