const Filter = (searchText, restaurantlist)=> {
    return restaurantlist?.filter((i) =>
      i?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  export default Filter;