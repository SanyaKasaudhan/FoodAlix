
import { useEffect, useState } from "react";
import { FOOD_API, IMG_CDN_URL } from "../Header/utils/constants";
import RestaurantCard from "./RestaurantCard";
import RestauratCardShimmer from "./RestauratCardShimmer";
const Restaurant = () => {
  const [restaurantList,setRestaurantList] = useState([]);
    useEffect(() => {
      getData();
    },[]);

    async function getData(){
      const data = await fetch(FOOD_API);
      const res=await data.json();
      setRestaurantList(res?.data?.cards[2]?.data?.data?.cards);
      console.log("restro list",restaurantList)
    }

  if (!restaurantList) return null;
  return (<>
   {restaurantList.length === 0 ?( 
    <RestauratCardShimmer />
  ) : 
   (
    <>
    <div className="search-container">
    <input className="search-food m-5  border" type="search" placeholder="search your restaurant" />
    <button className="serach-btn bg-yellow-500 p-2 rounded-lg space-x-6 ">Search</button>
    </div>
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return (<>
          <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
          </>
        );
      })
    }
      </div>
   </>
  )
   } 
  </>)
}
export default Restaurant
