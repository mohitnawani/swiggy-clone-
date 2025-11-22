import { useParams } from "react-router";
import { useEffect, useState } from "react";
import MenuCard from "./Menu";
import { NavLink } from "react-router";

export default function RestaurantMenu()
{
    let {id}=useParams();
    console.log(id);

    const [RestData, setRestData] = useState([]);
    const [change,setchange]=useState(null);
    useEffect(()=>{
    
     async function fetchData() {
        const proxyServer = "https://cors-anywhere.herokuapp.com/"
        const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
        const response = await fetch(proxyServer+swiggyAPI);
        const data = await response.json();
        const tempData=data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        console.log(tempData);
        const filterData=tempData.filter((items) => 'title' in (items?.card?.card || {}))
        setRestData(filterData);
     }

     fetchData();
    },[])
    {console.log(RestData)}

    return (
        <>

        <div className="w-full mx-auto mt-20 flex justify-center">
            <NavLink to={`/city/delhi/${id}/search`}>
                <p className=" w-full bg-gray-200 rounded-xl px-50 pb-1 mx-2  text-xl text-gray-600">
                    Search for Dishes
                </p>
            </NavLink>
        </div>
        <div className="w-[80%] mx-auto mt-20">
            <button className=" bg-gray-100  rounded-xl px-2 pb-1 mx-2 font-medium text-3xl" style={change==="veg"?{backgroundColor:"green",color:"white"}:{}} onClick={()=>change==="veg"?setchange(null):setchange("veg")}>veg</button>
            <button className="  bg-gray-100 rounded-xl px-2 pb-1 mx-2 font-medium text-3xl" style={change==="non-veg"?{backgroundColor:"red",color:"white"}:{}} onClick={()=>change==="non-veg"?setchange(null):setchange("non-veg")}>non-veg</button>
        </div>

        <div className="w-[80%] mx-auto mt-20">
            {
                RestData.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} change={change}></MenuCard>)
            }
        </div>
        </>

    )


}