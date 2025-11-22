import {useState} from 'react';
import {addItems, IncrementItems, DecrementItems} from "../store/cardslicer.js"
import { useDispatch, useSelector } from "react-redux";
export default function RestInfo({restData})
{

     const dispatch = useDispatch();
     const items = useSelector(state=>state.cartslice.items);
   
     const element = items.find(item=>item.id===restData.id);
     const count = element?element.quantity:0;

     function handleAdditems(){
       dispatch(addItems(restData));
     }
   
     function handleIncrementItems(){
       dispatch(IncrementItems(restData));
     }
   
     function handleDecrementItems(){
       dispatch(DecrementItems(restData));
     }
    return (
        <>
        <div className="w-full h-0.5 bg-gray-200 my-2"></div>
        <div className="w-full h-44 flex justify-between align-center">
            <div className="flex flex-col justify-center width-[20%]">
                <p className="text-xl font-semibold color-gray-400">{restData?.name}</p>
                <p className="text-lg font-semibold text-[rgba(2,6,12,0.75)]">{"₹"+ ("defaultPrice" in restData ? restData?.defaultPrice/100:restData?.price/100)}</p>
                <span className="text-green-700">{restData?.ratings?.aggregatedRating?.rating}</span>
                <span>{"("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
            </div>

            <div className="w-[20%] h-[80%] relative mt-0">
                <img  className="w-full h-full object-cover rounded-2xl" src={`https://media-assets.swiggy.com/swiggy/image/upload/${restData?.imageId}`} alt={restData?.name} />
                {(count === 0) ? (
                    <button className="bg-white text-green-300 p-1 rounded absolute bottom-2 right-22 text-2xl font-bold" onClick={()=>handleAdditems()}>ADD</button>
                ) : (
                    <div className="bg-white rounded absolute bottom-2 right-19 h-10 w-25 flex justify-between">
                        <button className=" text-green-300 p-1  text-3xl font-bold" onClick={()=>handleDecrementItems()} >-</button>
                        <span className="p-1  text-green-300    text-3xl font-bold">{count}</span>
                        <button className=" text-green-300 p-1  text-3xl font-bold" onClick={()=>handleIncrementItems()}>+</button>
                    </div>
                )}
            </div>
        </div>

        </>
    )
}

// id: "164538509";
// name: "Veg Hakka Noodles Bowl.";
// category: "Better Deal for 1 Bowl";
// description: "Serves 1 | Noodles tossed with cabbage, carrot, and onion in dark soy. Garnished with spring onion  classic, comforting, and familiar.";
// imageId: "FOOD_CATALOG/IMAGES/CMS/2024/6/28/8f18062e-fd85-4b84-91e7-aad8805fad0e_d5146df7-8be8-43fe-8a70-c9ea9c282b1f.jpg";
// inStock: 1;
// isVeg: 1;
// price: 26900;
// variants: {
// }
// variantsV2: {
// }
