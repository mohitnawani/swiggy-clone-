import { gridElements } from "../utils/GroceryData";
import GroceryCard from "./GroceryCard";

export default function GroceryOption() {
  return (
    <div className="w-[80%] mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Order OUR Best Grocery Option!</h1>
      <div className=" flex flex-wrap overflow-x-auto gap-4 pb-3">
        {gridElements.map((GroceryData) => (
          <GroceryCard
            key={GroceryData.id}
            GroceryData={GroceryData}
            className="shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
