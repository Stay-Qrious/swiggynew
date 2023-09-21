import Filter from "../Help/Filter";

const Search = ({
  SearchText,
  AllRestaurant,
  setFilteredRestaurant,
  setSearchText,
}) => {
  return (
    <div className="p-5 my-5  bg-pink-50">
      <input
        placeholder="Search Restaurant"
        onChange={(e) => {
          setSearchText(e.target.value);
          setFilteredRestaurant(Filter(SearchText, AllRestaurant));
        }}
      />

      <button
        className="p-2 m-2 bg-purple-900 text-white rounded-md hover:bg-purple-700 active:bg-purple-500"
        onClick={() => {
          setFilteredRestaurant(Filter(SearchText, AllRestaurant));
        }}
      >
        Search
      </button>
    </div>
  );
};
export default Search;
