import { swiggy_restaurants } from "../Constant/Constant";


const GetRestaurant = ({ setAllRestaurant, setFilteredRestaurant }) => {
  

  getRestaurant();

  async function getRestaurant() {
    try {
      const response = await fetch(swiggy_restaurants);

      const json = await response.json();

      async function checkJsonData(jsonData) {
        const checkData = [{}];
        jsonData?.data?.cards.map((i) => {
          if (
            i?.card?.card?.gridElements?.infoWithStyle?.restaurants ===
            undefined
          ) {
          } else {
            i?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
              (ii) => {
                checkData.push(ii);
                return ii;
              }
            );
          }
          return i?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        });

        checkData.shift();

        if (checkData !== undefined) {
          return checkData;
        }
      }
      const resData = await checkJsonData(json);
      setAllRestaurant(resData);
      setFilteredRestaurant(resData);
    } catch (error) {
      console.log("errorrrr");
    }
  }
};

export default GetRestaurant;
