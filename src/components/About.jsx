import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-[#f5fdf7] text-[#0f1f1c]">
      <div className="max-w-6xl mx-auto px-8 py-24">
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-900 mb-12 text-center tracking-tight">
          About <span className="text-green-600">AushadI</span>
        </h1>

        <p className="text-xl text-green-900 mb-8 leading-relaxed text-justify">
          <strong className="text-green-800">AushadI</strong> is a compassionate healthcare platform designed to revolutionize the way doctors and patients interact. Through simple, structured health surveys, it enables doctors to gather essential insights, track symptoms, and prioritize patient needs — all in real-time.
        </p>

        <p className="text-xl text-green-900 mb-8 leading-relaxed text-justify">
          Our mission is to simplify healthcare communication, making it more transparent, personal, and effective. From managing chronic conditions to post-treatment checkups or general wellness, AushadI serves as a reliable bridge between medical professionals and the people they care for.
        </p>

        <div className="bg-green-100 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
          <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">🌿 Key Features</h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-green-900">
            <li>📝 Intuitive and accessible health surveys for all age groups</li>
            <li>📊 Real-time, actionable data dashboards for healthcare providers</li>
            <li>🔐 Strong focus on privacy with encrypted health records</li>
            <li>💬 Strengthens communication between patients and doctors</li>
          </ul>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-green-900 mb-3">
            Together, let's make healthcare smarter, safer, and more human 💚
          </h3>
          <p className="text-green-700 text-lg">
            Thank you for being a part of our journey. — Team AushadI
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
