import ReactDOM from "react-dom/client";
import Header from "./Header.js";
import React from "react";
import FoodOption from "./FoodOption.js";   
import GroceryOption from "./Groceryoption.js";
import {Dineoption} from "./Dineoption.js";
import Footer from "./Footer1.js"
export default function Home()
{
    return (
        <>
        <Header/>
        <FoodOption/>
        <GroceryOption/>
        <Dineoption/>
        <Footer/>
        </>
    );
}
