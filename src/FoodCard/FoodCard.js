
import { img_cdn } from "../Constant/Constant";

const FoodCard = (props) => {
  return (
    <>
      <div className="w-[250px] shadow-lg bg-pink-50" >

        <img src={img_cdn+ props.imageId} alt="Not Rendered" />
        <div>{props.name}</div>
        <div> Rs. {props.price/100}</div>
        <div>About Item : {props.description}</div>        
        
      </div>
    </>
  );
};

export default FoodCard;
