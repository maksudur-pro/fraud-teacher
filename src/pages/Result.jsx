const Result = () => {
  return (
    <>
      <div
        className="relative w-full py-6 bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/intro_bg.png')" }}>
        <div className="container mx-auto">
          <div className="my-6 lg:my-16 flex justify-center w-full p-8 lg:p-0">
            <div className="flex flex-col lg:flex-row lg:gap-4 p-4 lg:p-6 mx-0 bg-white bg-opacity-60 shadow-sm rounded-2xl w-full lg:w-[1000px]">
              {/* Left Section: Fraud Risk Level  */}
              <div className="w-full lg:w-1/3 ">
                <div className="text-center border border-black rounded-lg mt-4 md:mt-2">
                  <div className="logo hidden lg:flex justify-center p-6">
                    <h1 className="text-center text-2xl font-bold">
                      Tuition Fraud Check
                    </h1>
                  </div>
                  <div className="py-2  lg:p-6">
                    <p className="my-1 md:my-6 text-xl font-semibold">
                      Tuition Confirm Ratio
                    </p>
                    <div className="flex justify-center items-center h-full">
                      <div
                        className="radial-progress"
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
                    <p className="text-2xl font-semibold text-black risk-text">
                      Excellent
                    </p>
                    <p
                      id="risk-message"
                      className="mt-4 text-center text-gray-600 text-base lg:text-lg font-medium">
                      No Risk
                    </p>
                  </div>
                </div>
              </div>
              {/* Right Section */}
              <div className="w-full lg:w-2/3 bg-red-600 h-6"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
