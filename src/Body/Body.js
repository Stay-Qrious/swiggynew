import { useState } from "react";
import GetRestaurant from "../GetRestaurant/GetRestaurant";
import Search from "../Search/Search";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { useEffect } from "react";
import Shimmer from "../Shimmer/Shimmer";
import CheckOnline from "../Help/CheckOnline";
import { Link } from "react-router-dom";

const Body = () => {
  const [SearchText, setSearchText] = useState("");
  const [AllRestaurant, setAllRestaurant] = useState([]);
  const [FilteredRestaurant, setFilteredRestaurant] = useState([]);
  useEffect(() => {
    GetRestaurant({ setAllRestaurant, setFilteredRestaurant });
  }, []);

  if (CheckOnline() === false)
    return (
      <>
        <div className="h-96 ">
          {" "}
          <img
            src="../Images/Offline"
            alt="Please Check Your Internet Connection "
          />{" "}
        </div>
      </>
    );
  if (!FilteredRestaurant)
    return (
      <>
        <div>Sorry Currently No restaurant is Accepting Orders</div>{" "}
      </>
    );
  if (AllRestaurant?.length === 0) return <Shimmer />;
  
  return (
    <>
      <Search
        SearchText={SearchText}
        AllRestaurant={AllRestaurant}
        setFilteredRestaurant={setFilteredRestaurant}
        setSearchText={setSearchText}
      />
     
     


      {(FilteredRestaurant?.length===0) ? <div className="font-bold">Sorry No Restaurant Found !!!</div>:
      <div className="flex flex-wrap justify-around gap-y-4 items-stretch">
        {FilteredRestaurant.map((i) => {
          return (
            <Link to={"/restaurant/" + i.info.id}>
              {" "}
              <RestaurantCard {...i} />{" "}
            </Link>
          );
        })}
      </div>}
    </>
  );
};
export default Body;
