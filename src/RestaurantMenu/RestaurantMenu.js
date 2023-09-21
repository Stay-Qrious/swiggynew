import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { swiggy_menu } from "../Constant/Constant";
import { item_img_cdn } from "../Constant/Constant";
import Shimmer from "../Shimmer/Shimmer";
import { addItem } from "../CardSlice/CardSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [rest, setrest] = useState(null);
  const [restmenu, setrestmenu] = useState(null);
  const dispatch=useDispatch();
  function handleAddItems(item){
    dispatch(addItem(item));
  }

  useEffect(() => {
    getRestInfo();
  }, []);

  async function getRestInfo() {
    try {
      const data = await fetch(swiggy_menu + id);
      const json = await data.json();

      async function checkJsonData(jsonData) {
        let checkData = jsonData?.data?.cards[0]?.card?.card?.info;
        let checkData2 =
          (jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel).map(
            (i) => {
              return i.dish.info;
            }
          );

        if (checkData !== undefined && checkData2 !== undefined) {
          return [checkData, checkData2];
        }
      }
      const resData = await checkJsonData(json);
      setrest(resData[0]);
      setrestmenu(resData[1]);
    } catch (e) {
      const data = await fetch(swiggy_menu + id);
      const json = await data.json();

      async function checkJsonData(jsonData) {
        let checkData = jsonData?.data?.cards[0]?.card?.card?.info;
        let checkData2 =
          (jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards).map(
            (i) => {
              return i.card.info;
            }
          );

        if (checkData !== undefined && checkData2 !== undefined) {
          return [checkData, checkData2];
        }
      }
      const resData = await checkJsonData(json);
      setrest(resData[0]);
      setrestmenu(resData[1]);

      console.log("JSON file is different then written Logic");
    }
  }

  if (rest === null || restmenu === null) return <Shimmer />;

  return (
    <>
      <h1>Restaurant Id :{id}</h1>
      <img src={item_img_cdn + rest.cloudinaryImageId} alt="Not Rendered" />
      <h1>{rest.name}</h1>
      <h1>{rest.locality}</h1>
      <h1>{rest.areaName}</h1>
      <h1>{rest.avgRating} star</h1>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <h1 className="font-bold">Menu</h1>

      <h1 className="flex">
        <div>
          {restmenu.map((i) => {
            return (
              <>
                <h1 className="m-2 p-2">{i.name}</h1>
                <button className="bg-green-400 hover:bg-green-600 active:bg-green-700 m-2 p-2" onClick={()=>handleAddItems(i)}>
                  Add Items
                </button>
              </>
            );
          })}
        </div>
      </h1>
    </>
  );
};

export default RestaurantMenu;
