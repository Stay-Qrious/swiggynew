import { shimmerCount, loading } from "../Constant/Constant";

const Shimmer = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between gap-y-4">
        {Array(shimmerCount)
          .fill("")
          .map((e) => (
            <div className="w-[250px] h-80 bg-gray-100 shadow-lg flex justify-center  items-center my-2">
              {" "}
              <img className="h-8" src={loading} />{" "}
            </div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
