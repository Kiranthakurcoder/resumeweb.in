import React, { useState } from "react";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message || "Thank you for contacting me! 🚀");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error during contact submission:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-white">
        <div className="max-w-6xl w-full rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">
              Get In Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Feel free to reach out to me anytime. I am always open to
              discussing new projects, creative ideas or opportunities to be
              part of your visions.
            </p>
            <p className="text-gray-600">
              Let's build something amazing together! 🚀
            </p>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 w-full">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-orange-500 hover:bg-pink-400 text-white font-semibold py-3 px-6 rounded-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
