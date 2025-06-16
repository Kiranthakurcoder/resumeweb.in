import React from "react";

const Components = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-gradient-to-br from-white to-orange-50 text-gray-800">
      <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
        My UI Components
      </h2>

      {/* Custom Button */}
      <div className="mb-10 text-center">
        <button className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-orange-400 hover:to-pink-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300">
          Gradient Button
        </button>
      </div>

      {/* Product Card */}
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden mb-10">
        <img
          src="https://source.unsplash.com/300x200/?shoe"
          alt="Product"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-1">Nike Sneakers</h3>
          <p className="text-gray-600 mb-2">
            Stylish sports shoes with extra comfort.
          </p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-pink-500 transition">
            Buy Now
          </button>
        </div>
      </div>

      {/* Alert Message */}
      <div className="bg-red-100 text-red-800 p-4 rounded-md mb-10 border-l-4 border-red-500 shadow">
        <strong>Error:</strong> Something went wrong! Please try again.
      </div>

      {/* Input Field */}
      <div className="max-w-md mx-auto">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          placeholder="example@gmail.com"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
        />
      </div>
    </div>
  );
};

export default Components;
