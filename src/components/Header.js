import { NavLink } from "react-router";
export default function Header()
{
    return (
        <header className="bg-[#FF5200] font-serif">
            <div className=" py-8 flex justify-between container mx-auto ">
                <img className="w-40 h-12 " src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"></img>

                <div className="flex gap-5 text-white font-serif font-bold items-center">
                    <a  href="https://www.swiggy.com/corporate/" target="_blank">Home</a>
                    <a href="https://partner.swiggy.com/login#/swiggy" target="_blank">About</a>
                    <a className="border border-white rounded-3xl px-4 py-3 "  >Get the App</a>
                    <a className="border border-black rounded-3xl px-4 py-3"  >Signin</a>
                </div>
            </div>
            <div className="relative">
                 <img className="h-110 w-62 absolute left-0"  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                 <img className="h-110 w-62 absolute right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>   
                <div> 
                    <div className="text-5xl text-white font-bold text-center w-[60%] mx-auto py-10">
                    Order food & groceries. Discover best restaurants. Swiggy it!
                    </div>
                </div>                

                <div className="flex gap-3 justify-center pb-10">
                    <input placeholder="Enter your location" className="px-4 py-3 rounded-2xl bg-amber-50 font-grey font-1.5rem h-15 w-90  text-2xl"  />
                    <input placeholder="Search for dishes or restaurants" className="px-4 py-3 rounded-2xl bg-amber-50 font-grey font-1.5rem h-15 w-90 text-2xl"  />
                </div>
            </div>
            <div className=" flex gap-1.5 justify-center ">
                <NavLink to="/Restaurant" >
                <img className="  w-96 h-auto object-contain" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
                </NavLink>
                <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1" >
                 <img className="   w-96 h-auto object-contain" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img>    
                </a>
                <a href="https://www.swiggy.com/dineout">
                    <img className="   w-96 h-auto object-contain" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img>
                </a>
               
            </div>

        </header>
    )
}
                // <img className="h-110 w-62 absolute"  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                // <img className="h-110 w-62 absolute" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>     