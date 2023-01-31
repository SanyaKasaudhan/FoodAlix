
import { useEffect, useState } from "react";
import { FOOD_API, IMG_CDN_URL } from "../utils/constants";
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
   {/* {allRestaurants.length === 0 ?( 
    <h1>LOADING</h1>
  ) : 
   (*/}
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return (<>
        Hi<br/>
          {restaurant.data.id}
          {restaurant.data.name}
          Cui - {restaurant.data.cuisines.join(",")}
          </>
        );
      })}
    </div>
 {/* )
   } */}
  </>)
}
export default Restaurant
