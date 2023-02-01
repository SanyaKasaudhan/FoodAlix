
import { IMG_CDN_URL } from "../Header/utils/constants";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
  address
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>Area- {area}</h5>
      <span>
        <h4>
         {
            new Array(Math.floor(avgRating)).fill(0).map((_, index) =>
            <span className="fa fa-star" style = { {color: "#fbc02d", fontSize: "1rem" }}></span>
            )
          }
          {
            !Number.isInteger(avgRating) && <span className="fa fa-star-half-o" style = { {color: "#fbc02d", fontSize: "1rem" }}></span>
          } 
        </h4>

        <h4>{lastMileTravelString}</h4>

        <h4>{costForTwoString}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;