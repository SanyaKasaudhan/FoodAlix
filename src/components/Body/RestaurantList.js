import { useParams } from "react-router-dom"
import { IMG_CDN_URL } from "../Header/utils/constants";
import useRestaurant from "../Header/utils/useRestaurant";

const RestaurantList = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);
  return (
    <div>
       {console.log("res",restaurant)}

      
      <div className="box">
        <div className="box-img">
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        </div>
        <div className="box-content">
          <div className="rest-name"> <h2>{restaurant?.name}</h2></div>
          <div> <h2>{restaurant?.cuisines}</h2></div>
          <div> <h2>{restaurant?.labels[1]?.message.toLowerCase()}</h2></div>
          <div> <h2>{restaurant?.avgRating} <span className="fa fa-star" style = { {color: "#fbc02d", fontSize: "1rem" }}></span>
          <span style={{marginLeft:"35px"}}>{restaurant?.sla?.slaString.toLowerCase()}</span>
          <span style={{marginLeft:"35px"}}>{restaurant?.costForTwoMsg}</span></h2></div>
        </div>
        <div>
          <div className="discount"> OFFERS 
            {restaurant?.aggregatedDiscountInfo?.descriptionList.map((data) => {
        return (<><li>{data.meta}</li>
          </>
        );
      })
    }
          </div>
        </div>

      </div>
      
      
      
    </div>
  )
}

export default RestaurantList
