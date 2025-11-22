import { useSelector } from "react-redux";
import { useState } from "react";
import { ShoppingCart, HelpCircle, Gift, User } from "lucide-react";
import Cart from "./Cart.js"

export default function Topheader() {
  const counter = useSelector((state) => state.cartslice.items);
  const count= useSelector((state)=>state.cartslice.count);

  const [isCartOpen, setIsCartOpen]=useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 positon-relative ">
      <div className="flex justify-between items-center py-3 px-8 w-[90%] m-auto">
        {/* Left Section - Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"
            alt="Swiggy Logo"
            className="w-30 cursor-pointer hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Middle Section - Search */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/3 hover:shadow-md transition-all">
          <input
            type="text"
            placeholder="Search for restaurants, cuisines..."
            className="bg-transparent outline-none w-full text-gray-700"
          />
        </div>

        {/* Right Section - Menu */}
        <nav className="flex items-center gap-6 text-gray-700 font-medium">
          <div className="flex items-center gap-2 hover:text-orange-500 transition-colors cursor-pointer">
            <Gift size={20} />
            <span>Offers</span>
          </div>

          <div className="flex items-center gap-2 hover:text-orange-500 transition-colors cursor-pointer">
            <HelpCircle size={20} />
            <span>Help</span>
          </div>

          <div className="flex items-center gap-2 hover:text-orange-500 transition-colors cursor-pointer">
            <User size={20} />
            <span>Sign In</span>
          </div>

          <div className="relative flex items-center gap-2 hover:text-orange-500 transition-colors cursor-pointer" onMouseEnter={() => setIsCartOpen(true)} onMouseLeave={() => setIsCartOpen(false)}>
            <ShoppingCart size={22} />
            <span>Cart</span>
            <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              {count}
            </span>
          </div>
        </nav>


      </div>

      {isCartOpen && (<Cart counter={counter}></Cart>)
    }
    </header>
  );
}
