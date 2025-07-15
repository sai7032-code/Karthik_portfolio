// React Portfolio for Gadipe Karthik

import React, { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileImg from "./karthik_profile.jpg"; // Replace with actual image

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-pink-50 to-blue-100 text-gray-800 font-sans">

      {/* Hero Section */}
      <section data-aos="fade-down" className="bg-gradient-to-br from-[#141e30] via-[#243b55] to-[#141e30] text-white py-20 px-6 text-center">
        <img src={profileImg} alt="Gadipe Karthik" className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-white shadow-2xl" />
        <h1 className="text-5xl font-extrabold mb-2 tracking-wider">Gadipe Karthik</h1>
        <p className="text-xl font-medium">MBA (HR) | Python | Django | SQL | Computer Applications</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {["summary", "technical-summary", "skills", "projects", "certifications", "education", "contact"].map(section => (
            <a key={section} href={`#${section}`} className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold shadow hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 hover:text-white transition capitalize">
              {section.replace("-", " ")}
            </a>
          ))}
        </div>
        <a
          href="/Gadipe_Karthik_Resume.pdf"
          download
          className="mt-6 inline-block bg-white text-indigo-900 px-6 py-3 rounded-full font-bold shadow-md hover:bg-indigo-100 transition duration-300"
        >
          ⬇️ Download Resume
        </a>
      </section>

      {/* Summary */}
      <section id="summary" data-aos="fade-left" className="p-8 max-w-5xl mx-auto bg-white rounded-xl shadow-lg hover:bg-indigo-50 transition duration-300">
        <h2 className="text-3xl font-bold mb-4 text-indigo-800 border-b-4 border-indigo-300 pb-2 text-center">
          🧾 Summary
        </h2>
        <p className="text-lg leading-relaxed text-gray-800">
          MBA graduate in Human Resources with a strong foundation in programming and analytics. Skilled in Python, SQL, and web development frameworks like Django. Passionate about integrating technology into HR operations to streamline processes and drive organizational efficiency.
        </p>
      </section>
      {/* Education */}
      <section id="education" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12 border-b-4 border-blue-400 pb-2">🎓 Education</h2>

        {[{
          title: "MBA - Human Resource Development",
          desc: "Vaagdevi Degree & PG College, Hanmakonda (2023–2025)"
        }, {
          title: "B.Com - Computer Applications",
          desc: "Govt. Degree College, Husnabad – CGPA: 7.0"
        }].map((edu, i) => (
          <div key={i} data-aos="fade-up" className="bg-gradient-to-br from-indigo-100 via-white to-indigo-50 rounded-xl shadow p-6 mb-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2">{edu.title}</h3>
            <p className="text-gray-700">{edu.desc}</p>
          </div>
        ))}
      </section>


      {/* Technical Summary */}
      <section id="technical-summary" data-aos="zoom-in" className="p-8 max-w-5xl mx-auto bg-gradient-to-r from-teal-100 via-white to-purple-100 rounded-xl shadow hover:shadow-2xl hover:bg-gradient-to-tr transition duration-300">
        <h2 className="text-3xl font-bold mb-4 text-teal-800 border-b-4 border-teal-400 pb-2 text-center">📘 Technical Summary</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li>Conducted HR engagement and policy analysis as part of MBA research.</li>
          <li>Created mock onboarding flows and employee databases with SQL.</li>
          <li>Developed and deployed Django-based applications with CRUD features.</li>
          <li>Built relational schemas to track employee, vehicle, and academic data.</li>
          <li>Comfortable using Git, Linux, and open-source libraries for backend tasks.</li>
        </ul>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-12 border-b-4 border-purple-400 pb-2">🧠 Skills</h2>

        <div data-aos="fade-up" className="bg-gradient-to-r from-yellow-100 via-white to-orange-100 rounded-xl shadow p-6 mb-6 hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold text-yellow-800 mb-2">👨‍💼 HR & Management</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Employee Engagement & Retention</li>
            <li>Recruitment & Onboarding Design</li>
            <li>HR Policy Analysis</li>
            <li>Conflict Resolution & Team Communication</li>
          </ul>
        </div>

        <div data-aos="fade-up" className="bg-gradient-to-r from-blue-100 via-white to-indigo-100 rounded-xl shadow p-6 mb-6 hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">💻 Programming & Web Development</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Python, Django, Flask</li>
            <li>HTML, CSS, JavaScript</li>
            <li>SQL, MySQL</li>
            <li>Git & GitHub, CRUD Operations, API Integration</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-yellow-700 mb-12 border-b-4 border-yellow-400 pb-2">🚀 Projects</h2>

        {[{
          title: "Parking Management System",
          desc: "Developed a fully functional web app using Django, MySQL, and Bootstrap for vehicle tracking and transaction logs."
        }, {
          title: "School Management System",
          desc: "Designed a CRUD-enabled school admin portal in Django to manage student/staff records and schedules."
        }, {
          title: "HR Engagement Research Project",
          desc: "Created onboarding documentation and HR policy analysis using real-time data models during MBA internship."
        }].map((project, index) => (
          <div key={index} data-aos="fade-up" className="bg-gradient-to-br from-yellow-100 via-white to-yellow-50 rounded-xl shadow p-6 mb-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">📌 {project.title}</h3>
            <p className="text-gray-700">{project.desc}</p>
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section id="certifications" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-12 border-b-4 border-teal-400 pb-2">📜 Certifications</h2>

        {[{
          title: "Python Full Stack Development",
          desc: "Hands-on training in HTML, CSS, JavaScript, Django, SQL, and deployment."
        }, {
          title: "PDAC Certificate",
          desc: "Certified in personality development and analytical communication skills for HR readiness."
        }].map((cert, idx) => (
          <div key={idx} data-aos="fade-up" className={`bg-gradient-to-br from-green-100 via-white to-lime-100 rounded-xl shadow p-6 mb-6 hover:shadow-2xl transition`}>
            <h3 className="text-lg font-semibold">{cert.title}</h3>
            <p className="text-gray-700">{cert.desc}</p>
          </div>
        ))}
      </section>

      
      {/* Contact */}
      <section id="contact" data-aos="fade-up" className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">📬 Get in Touch</h2>
        <p className="mb-2">📧 <a href="mailto:karthikgk006@gmail.com" className="hover:underline text-blue-300">karthikgk006@gmail.com</a></p>
        <p className="mb-2">📞 <a href="tel:+919133068773" className="hover:underline text-blue-300">+91 91330 68773</a></p>
        <p>📍 Husnabad, Telangana, India</p>
        <div className="flex justify-center gap-6 mt-6">
          <a href="mailto:karthikgk006@gmail.com" className="hover:text-yellow-300 transition"><MdEmail size={30} /></a>
          <a href="tel:+919133068773" className="hover:text-yellow-300 transition"><MdPhone size={30} /></a>
        </div>
      </section>
    </main>
  );
}
