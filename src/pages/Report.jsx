import { useState } from "react";
import Swal from "sweetalert2";

const Report = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddReport = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const form = event.target;
    const phoneNumber = form.phoneNumber.value;
    const giveTuition = parseInt(form.giveTuition.value);
    const confirmTuition = parseInt(form.confirmTuition.value);
    const cancelTuition = parseInt(form.cancelTuition.value);
    const summaryOfExperience = form.summaryOfExperience.value;

    const reportData = {
      phoneNumber,
      giveTuition,
      confirmTuition,
      cancelTuition,
      summaryOfExperience,
    };

    fetch("http://localhost:5000/add-report", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reportData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId || data.modifiedCount > 0) {
          Swal.fire({
            title: "Report added successfully!",
            icon: "success",
            draggable: true,
          });
          form.reset();
        } else {
          alert("Something went wrong.");
        }
      })
      .catch((err) => {
        console.error("Error posting report:", err);
      })
      .finally(() => {
        setIsSubmitting(false); // Re-enable the button
      });
  };

  return (
    <div className="w-full md:w-[50%] lg:w-[50%] mx-auto h-screen">
      <div className="px-10 py-8  ">
        <div className=" mx-auto space-y-6">
          <div className="h-8">
            <h1 className="text-2xl uppercase text-center font-bold">
              Tuition Report
            </h1>
          </div>

          <form onSubmit={handleAddReport}>
            <legend className="my-2 text-sm font-medium">Phone number *</legend>
            <input
              type="tel"
              required
              name="phoneNumber"
              className="input rounded-sm border border-black w-full"
              placeholder="Enter phone number"
            />
            <legend className="my-2 text-sm font-medium">Give Tuition *</legend>
            <input
              type="tel"
              required
              name="giveTuition"
              className="input rounded-sm border border-black w-full"
              placeholder="Enter give tuition"
            />
            <legend className="my-2 text-sm font-medium">
              Confirm Tuition *
            </legend>
            <input
              type="tel"
              required
              name="confirmTuition"
              className="input rounded-sm border border-black w-full"
              placeholder="Enter confirm tuition"
            />
            <legend className="my-2 text-sm font-medium">
              Cancel Tuition *
            </legend>
            <input
              type="tel"
              required
              name="cancelTuition"
              className="input rounded-sm border border-black w-full"
              placeholder="Enter cancel tuition"
            />
            <legend className="my-2 text-sm font-medium">
              Summary of experience
            </legend>
            <textarea
              required
              name="summaryOfExperience"
              className="textarea h-24 rounded-sm border border-black w-full"
              placeholder="Enter your experience"></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full p-4 mt-4 text-xl font-semibold rounded-md transition-all duration-300 ease-in-out
    ${
      isSubmitting
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-[#fdbe2e] text-black hover:text-white hover:shadow-lg"
    }`}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Report;
