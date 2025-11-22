export default function Footer() {
  // ✅ Define your cities array outside the JSX
  const cities = [
    "Bangalore", "Mumbai", "Delhi", "Hyderabad", "Chennai", "Pune", "Kolkata",
    "Ahmedabad", "Jaipur"
  ];

  return (
    <>
      {/* Top Banner */}
      <div>
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"
          alt="Download App Banner"
          className="w-full object-cover"
        />
      </div>

      {/* Cities List Section */}
      <div className="bg-gray-100 w-[70%] mx-auto rounded-xl shadow-sm p-6 mt-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center uppercase">
          Cities with Food Delivery
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {cities.map((city) => (
            <div
              key={city}
              className="bg-white text-gray-700 h-18 w-46 text-sm px-4 py-2 rounded-lg shadow hover:bg-orange-50 hover:text-orange-600 transition-all duration-200 cursor-pointer"
            >
              Order food online in {city}
            </div>
          ))}
        </div>
      </div>
            <div className="bg-gray-100 w-[70%] mx-auto rounded-xl shadow-sm p-6 mt-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center uppercase">
          Cities with Grocery Delivery
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {cities.map((city) => (
            <div
              key={city}
              className="bg-white text-gray-700 h-18 w-46 text-sm px-4 py-2 rounded-lg shadow hover:bg-orange-50 hover:text-orange-600 transition-all duration-200 cursor-pointer"
            >
              Order grocery delivery in {city}
            </div>
          ))}
        </div>
      </div>

    </>
  );
}
