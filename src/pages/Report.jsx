const Report = () => {
  return (
    <div className="w-full md:w-[50%] lg:w-[50%] mx-auto h-screen">
      <div className="px-10 py-8  ">
        <div className=" mx-auto space-y-6">
          <div className="h-8">
            <h1 className="text-2xl uppercase text-center font-bold">
              Tuition Report
            </h1>
          </div>

          <form>
            <legend className="my-2 text-sm font-medium">Phone number *</legend>
            <input
              type="tel"
              required
              className="input rounded-sm border border-black w-full"
              placeholder="Enter phone number"
            />
            <legend className="my-2 text-sm font-medium">Give Tuition *</legend>
            <input
              type="tel"
              required
              className="input rounded-sm border border-black w-full"
              placeholder="Enter give tuition"
            />
            <legend className="my-2 text-sm font-medium">
              Confirm Tuition *
            </legend>
            <input
              type="tel"
              required
              className="input rounded-sm border border-black w-full"
              placeholder="Enter confirm tuition"
            />
            <legend className="my-2 text-sm font-medium">
              Cancel Tuition *
            </legend>
            <input
              type="tel"
              required
              className="input rounded-sm border border-black w-full"
              placeholder="Enter cancel tuition"
            />
            <legend className="my-2 text-sm font-medium">
              Summary of experience
            </legend>
            <textarea
              required
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
  );
};

export default Report;
