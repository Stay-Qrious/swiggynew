


import { img_cdn } from "../Constant/Constant";

const RestaurantCard = (props) => {
  return (
    <>
      <div className="w-[250px] shadow-lg bg-pink-50 " >
        <img src={ img_cdn+ props.info.cloudinaryImageId} alt="Not Rendered"/>
        <h2 className="font-bold text-xl">{props.info.name}</h2>
        <h6>{props.info.avgRating} Star</h6>

        <span>{props.info.locality+" "}</span>
        {(props.info.locality!==props.info.areaName)?<span>{props.info.areaName}</span>:<></>}
        
      </div>
    </>
  );
};

export default RestaurantCard;
