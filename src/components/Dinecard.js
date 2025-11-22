export default function Dinecard({ dinedata }) {
  const info = dinedata?.info;

  return (
    <div className="relative w-[300px] rounded-xl overflow-hidden shrink-0 border shadow-md bg-white">
      <a href={dinedata?.cta?.link} target="_blank" rel="noreferrer">
        {/* Image Section */}
        <div className="relative w-full h-[180px]">
          <img
            className="w-full h-full object-cover"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              info?.mediaFiles?.[0]?.url
            }
            alt={info?.name}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tfrom-black/70 to-transparent"></div>
          {/* Restaurant name over image */}
          <div className="absolute bottom-2 left-2 text-white font-semibold text-lg">
            {info?.name}
          </div>
        </div>

        {/* Lower Details Section */}
        <div className="p-3 flex flex-col gap-2">
          {/* Rating + Price */}
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">
              ⭐ {info?.rating?.value} ({info?.rating?.count})
            </span>
            <span className="text-gray-800 text-sm">{info?.costForTwo}</span>
          </div>

          {/* Cuisines */}
          <p className="text-gray-600 text-sm truncate">
            {info?.cuisines?.join(" • ")}
          </p>

          {/* Location + Distance */}
          <div className="flex justify-between text-gray-500 text-xs">
            <p className="truncate">{info?.locality}</p>
            <p>{info?.locationInfo?.distanceString}</p>
          </div>

          {/* Table booking (just static for now) */}
          <p className="inline-block text-xs border px-2 py-1 rounded-md w-fit text-gray-700">
            Table booking
          </p>

          {/* Offers */}
          <div className="space-y-2">
            {/* Coupon Offer */}
            {info?.offerInfoV3?.couponOffer?.title && (
              <div className="flex items-center justify-between bg-green-100 px-2 py-1 rounded-md">
                <span className="text-green-700 text-sm font-medium">
                  {info.offerInfoV3.couponOffer.title}
                </span>
              </div>
            )}

            {/* Payment Offer */}
            {info?.offerInfoV3?.paymentOffer?.title && (
              <div className="bg-green-50 px-2 py-1 rounded-md text-green-700 text-xs">
                {info.offerInfoV3.paymentOffer.title}
              </div>
            )}
          </div>
        </div>
      </a>
    </div>
  );
}
