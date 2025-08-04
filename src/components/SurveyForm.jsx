import React, { useState } from 'react';
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    email: "",
    answers: {},
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const questions = [
    "What is your general methodology for diagnosing a patient?",
    "Which parts of the diagnosis or treatment process are most time-consuming or prone to human error?",
    "What types of information do you expect from a patient for an effective diagnosis?",
    "What useful information do patients often fail to provide that would help in a better diagnosis?",
    "After diagnosis, how do you decide which medication to prescribe?",
    "In what situations do you recommend diagnostic tests?",
    "Based on what criteria do you select specific tests for a patient?",
    "What are the major pain points in interpreting diagnostic reports?",
    "How does the financial model differ for you based on your employment type?",
    "What digital tools or technologies (if any) do you currently use to assist in diagnosis?",
    "Are there any affiliations (pharma, insurance, platforms, networks) that support or promote your medical practice?",
    "If your patient load increases significantly, would you be open to lowering consultation fees to maintain overall earnings?",
    "Do you consider local public health trends when diagnosing patients?",
    "What are some common reasons why patients stop returning (churn)?",
    "When analyzing medical images, do you rely on specific boundary definitions before surgery, or are these confirmed during procedures?",
  ];

  const handleInputChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleAnswerChange = (question, answer) => {
    setFormData((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [question]: answer,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        name: formData.name || null,
        specialization: formData.specialization || null,
        email: formData.email || null,
        answers: formData.answers,
        submittedAt: Timestamp.now(),
      };

      await addDoc(collection(db, "surveyResponses"), payload);
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-6 text-green-200 text-xl text-center">
        Thank you for your submission!
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-[#0d1117] min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-green-400 text-center">
        Doctor Survey Form
      </h1>

      {loading ? (
        <div className="text-center text-green-300 text-lg">
          Submitting...
          <div className="mt-4 animate-spin h-8 w-8 border-4 border-green-500 border-t-transparent rounded-full mx-auto" />
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 text-white">
          <div>
            <label className="block text-green-100 font-medium mb-2">Doctor's Name (Optional)</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-[#161b22] border border-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-green-100 font-medium mb-2">Specialization (Optional)</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-[#161b22] border border-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={formData.specialization}
              onChange={(e) => handleInputChange("specialization", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-green-100 font-medium mb-2">Email (Optional)</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg bg-[#161b22] border border-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </div>

          {questions.map((question, index) => (
            <div key={index}>
              <label className="block text-green-100 font-medium mb-2">
                {index + 1}. {question}
              </label>
              <textarea
                className="w-full p-3 rounded-lg bg-[#161b22] border border-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                rows="4"
                value={formData.answers[question] || ""}
                onChange={(e) => handleAnswerChange(question, e.target.value)}
                required
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className={`bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
};

export default SurveyForm;
