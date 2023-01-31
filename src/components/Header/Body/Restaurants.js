import React, { useState } from "react";
import { restaurantList} from "../utils/constants";
import RestaurantCard from "./RestaurantCard";

const filterData = (searchText, restaurants) => {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
};

const Restaurants = () => {
  const [searchText, setSearchText] = useState();
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [errorMsg, setErrorMsg] = useState("");

  const searchData = (searchText, restaurants) => () => {
    if (searchText !== "") {
      const data = filterData(searchText, restaurants);
      setRestaurants(data);
      if (data.length === 0) {
        setErrorMsg("No matches found ");
      }
    } else {
      if (errorMsg) setErrorMsg("");
      setRestaurants(restaurantList);
    }
  };

  return (
    <div className="">
      <div className="search-container">
        <input
          type="text"
          placeholder=" Search for restaurant"
          value={searchText}
          className="search-input"
          key="input-text"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={searchData(searchText, restaurants)}
        >
          {" "}
          Search{" "}
        </button>
      </div>
      {errorMsg && (
        <div >
          <span >
            {errorMsg}
          </span>
        </div>
      )}

      <div className="box">
        hi
        {/* {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })} */}
      </div>
    </div>
  );
};

export default Restaurants;