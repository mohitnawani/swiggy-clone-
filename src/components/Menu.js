import RestInfo from "./RestInfo";
import { useEffect, useState } from "react"
export default function MenuCard({ menuItems, change }) {
  
  // const [menuItems, setMenuItems] = useState({ categories: [] });
  const [isOpen, setIsOpen] = useState(true);


  if(!isOpen ){
    return (
      <>
      <div className="w-full">
        <div className="flex justify-between">
          <p className="text-2xl font-bold">{menuItems?.title}</p>
          <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "˄" : "˅"}</button>
        </div>
      </div>

      <div className="w-full h-5 bg-blue-50 my-3"></div>
      </>
      )
  }

  if(menuItems && Array.isArray(menuItems.categories)){
    return (
      <div className="w-full">
        <p className="text-2xl font-bold">{menuItems?.title}</p>
        <div>
          {menuItems?.categories?.map((items) => (
            <MenuCard key={items.title} menuItems={items} change={change}></MenuCard>
          ))}
        </div>
      </div>
    );
  }

  if(change==="veg"){
      return (
    <>
    <div className="w-full">
      <div className="flex justify-between">
      <p className="text-2xl font-bold">{menuItems?.title}</p>
      </div>
      <div>
        {menuItems?.itemCards?.filter((items) => ("isVeg" in (items?.card?.info || {}))).map((items) => (
          <RestInfo
            key={items?.card?.info?.id}
            restData={items?.card?.info}
          ></RestInfo>
        ))}
      </div>

    </div>
    <div className="w-full h-5 bg-blue-50 my-3"></div>
    </>
  );
  }
  if(change==="non-veg")
    {
      return (
    <>
    <div className="w-full">
      <div className="flex justify-between">
      <p className="text-2xl font-bold">{menuItems?.title}</p>
      </div>
      <div>
        {menuItems?.itemCards?.filter((items) => !("isVeg" in (items?.card?.info || {}))).map((items) => (
          <RestInfo
            key={items?.card?.info?.id}
            restData={items?.card?.info}
          ></RestInfo>
        ))}
      </div>

    </div>
    <div className="w-full h-5 bg-blue-50 my-3"></div>
    </>
  );
}

  return (
    <>
    <div className="w-full">
      <div className="flex justify-between">
      <p className="text-2xl font-bold">{menuItems?.title}</p>
      <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "˄" : "˅"}</button>
      </div>
      <div>
        {menuItems?.itemCards?.map((items) => (
          <RestInfo
            key={items?.card?.info?.id}
            restData={items?.card?.info}
          ></RestInfo>
        ))}
      </div>

    </div>
    <div className="w-full h-5 bg-blue-50 my-3"></div>
    </>
  );
}
