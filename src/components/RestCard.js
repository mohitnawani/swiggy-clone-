import { NavLink } from "react-router";

export default function Restcard({ restInfo }) {
  const { cloudinaryImageId, name, avgRating, cuisines, locality, sla } =
    restInfo.info;

  return (
    <NavLink to={"/city/delhi/"+restInfo?.info?.id}>
    <div className="w-55 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer bg-white">
      {/* Image */}
      <div className="relative">
        <img
          className="w-full h-40 object-cover"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            cloudinaryImageId
          }
          alt={name}
        />

        {/* Offer Badge */}
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
          ₹100 OFF ABOVE…
        </div>
      </div>

      {/* Details */}
      <div className="p-3">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="flex items-center text-sm text-gray-700">
          <span className="text-green-600 font-semibold">★ {avgRating}</span>
          <span className="mx-2">•</span>
          <span>{sla?.deliveryTime} mins</span>
        </p>
        <p className="text-sm text-gray-500 truncate">
          {cuisines.join(", ")}
        </p>
        <p className="text-sm text-gray-500">{locality}</p>
      </div>
    </div>
    </NavLink>
  );
}
