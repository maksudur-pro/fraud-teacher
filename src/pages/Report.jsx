const Report = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
        <div className="max-w-md mx-auto space-y-6">
          <div className="h-8">
            <h1 className="text-2xl uppercase text-center font-bold">Report</h1>
          </div>

          <form>
            <legend className="mb-2 text-sm font-medium">Report type *</legend>
            <select className="select select-neutral rounded-sm border border-black ">
              <option disabled={true}>Pick a type</option>
              <option>Tutor</option>
              <option>Guardian</option>
              <option>Tuition media</option>
            </select>

            <legend className="my-2 text-sm font-medium">Your name *</legend>
            <input
              type="text"
              className="input rounded-sm border border-black w-full"
              placeholder="Enter your name"
            />

            <legend className="my-2 text-sm font-medium">Phone number *</legend>
            <input
              type="number"
              className="input rounded-sm border border-black w-full"
              placeholder="Enter your number"
            />

            <legend className="my-2 text-sm font-medium">Accused name *</legend>
            <input
              type="text"
              className="input rounded-sm border border-black w-full"
              placeholder="Enter accused name"
            />
            <legend className="my-2 text-sm font-medium">
              Accused phone number *
            </legend>
            <input
              type="number"
              className="input rounded-sm border border-black w-full"
              placeholder="Enter accused number"
            />
            <legend className="my-2 text-sm font-medium">
              Upload supporting evidence *
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
  );
};

export default Report;
