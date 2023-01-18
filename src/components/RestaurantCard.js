import { IMG_CDN_LINK } from "../config";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravel,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_LINK + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{lastMileTravel} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
