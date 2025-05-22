import React, { useContext } from "react";
import "./FoodDisplay.css";
import { food_list } from "./../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {})}
      </div>
    </div>
  );
};

export default FoodDisplay;
