// import React from "react";
// import { useState } from "react";
// import RestInfo from "./RestInfo";
// import { useParams } from "react-router-dom"
// export default function Searchfood() {
//   let { id } = useParams();
//   console.log(id);

//   const [RestData, setRestData] = useState([]);
//   const [change, setchange] = useState(null);
//   useEffect(() => {
//     async function fetchData() {
//       const proxyServer = "https://cors-anywhere.herokuapp.com/";
//       const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
//       const response = await fetch(proxyServer + swiggyAPI);
//       const data = await response.json();
//       const tempData =
//         data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
//       console.log(tempData);
//       const filterData = tempData.filter(
//         (items) => "title" in (items?.card?.card || {})
//       );
//       const uniqueItems = filterData?.card?.card?.itemCards?.filter((item) =>
//         item?.name?.toLowerCase().includes(change.toLowerCase())
//       );
//       setRestData(uniqueItems);
//     }

//     fetchData();
//   }, [change]);
//   {
//     console.log(RestData);
//   }

//   return (
//     <div className="w-full mx-auto mt-20 mb-20 flex justify-center">
//       <input
//         onChange={(e) => setchange(e.target.value)}
//         type="text"
//         placeholder="Search Food"
//         className=" w-[80%] border border-gray-400 rounded-lg p-2"
//       />
//       <RestInfo
//         key={RestData?.card?.info?.id}
//         restData={RestData?.card?.info}
//       ></RestInfo>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import RestInfo from "./RestInfo";
import { useParams } from "react-router";

export default function Searchfood() {
  let { id } = useParams();
  console.log("Restaurant ID:", id);

  const [RestData, setRestData] = useState([]);
  const [change, setchange] = useState("");

  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
      const response = await fetch(proxyServer + swiggyAPI);
      const data = await response.json();

      const tempData =
        data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

      // Get all items
      let allItems = [];
      tempData.forEach((card) => {
        if (card?.card?.card?.itemCards) {
          allItems = [...allItems, ...card.card.card.itemCards];
        }
      });

      // Apply search filter
      const filteredItems = allItems.filter((item) =>
        item?.card?.info?.name
          ?.toLowerCase()
          .includes(change.toLowerCase())
      );

      setRestData(filteredItems);
    }

    fetchData();
  }, [change, id]);

  return (
    <div className="w-full mx-auto mt-20 mb-20 flex flex-col items-center">
      <input
        onChange={(e) => setchange(e.target.value)}
        type="text"
        placeholder="Search Food"
        className="w-[80%] border border-gray-400 rounded-lg p-2 mb-5"
      />

      {RestData.length > 0 ? (
        RestData.map((item, index) => (
          <RestInfo
            key={item?.card?.info?.id + index} // combines id + index
            restData={item?.card?.info}
          />
        ))
      ) : (
        <p>No items found</p>
      )}
    </div>
  );
}

