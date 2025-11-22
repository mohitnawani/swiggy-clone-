import { imageGridCards } from "../utils/FoodData";
import FoodCard from "./FoodCard";

export default function FoodOption() {
  return (
    <div className="w-[80%] mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">
        Order OUR Best Food Option!
      </h1>

      {/* Scrollable container */}
      <div className="flex gap-4 pb-3 overflow-x-auto scrollbar-hide"> 
        {imageGridCards.map((foodData) => (
          <div key={foodData.id} className="shrink-0">
            <FoodCard foodData={foodData} />
          </div>
        ))}
      </div>
    </div>
  );
}