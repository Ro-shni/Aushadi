import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import DoctorIllustration from "../assets/doctor-illustration.svg";
import { Stethoscope } from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 text-[#0f1f1c] flex items-center justify-center">
      <div className="max-w-7xl w-full px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-green-800 leading-tight flex flex-col gap-[10px]">
  <span>Welcome to</span>
  <span className="text-green-600 inline-flex gap-1 items-end">
    Aushad
    <span className="relative inline-block">
      <span className="text-green-600">l</span>
      <Stethoscope
        className="absolute left-1/2 -translate-x-1/2 -top-[7px] text-green-700"
        size={18}
      />
    </span>
  </span>
</h1>

          <p className="text-xl md:text-2xl text-green-900 max-w-xl mb-10">
            Empowering doctors with personalized insights through patient health surveys. Your data, our care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/survey"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition duration-300 text-lg"
            >
              Take the Survey
            </Link>

            <Link
              to="/about"
              className="border border-green-700 hover:bg-green-200 text-green-800 font-semibold px-8 py-4 rounded-xl transition duration-300 text-lg"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* Image section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="flex justify-center"
        >
          <img
            src={DoctorIllustration}
            alt="Doctor and patient record"
            className="w-full max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
