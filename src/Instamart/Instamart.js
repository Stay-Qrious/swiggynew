import { useState } from "react";
import { faltu } from "../Constant/Constant";

const Section = ({ title, description, isVisible, setIsvisible }) => {
  return (
    <div className="border-2  my-2 border-gray-900 rounded-sm  duration-200">
        <div className="text-3xl">{title}</div>


      <button 
        onClick={() => setIsvisible(!isVisible)}
        className="p-1 m-2 rounded-sm text-lg cursor-pointer bg-purple-700 shadow-sm hover:bg-purple-600 active:bg-purple-500"
      >
        


        
          {isVisible ? <h1>Show</h1> : <h1>Hide</h1>}
       


      </button>

      {isVisible && <p className="p-2 ">{description}</p>}

    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setIsVisibleSection] = useState("about");
  return (
    <div className="m-auto w-4/5 my-5 py-2">

      <h1 className="text-3xl font-bold">Instamart</h1>{" "}
      <hr className="my-2 border-gray-500" />


      <Section
        title={"About Instamart"}
        description={faltu}
        isVisible={visibleSection === "about"}
        setIsvisible={() =>
          setIsVisibleSection((visibleSection === "about") ? "" : "about")
        }
      />
      <Section
        title={"Team Instamart"}
        description={faltu}
        isVisible={visibleSection === "team"}
        setIsvisible={() =>
          setIsVisibleSection((visibleSection === "team") ? "" : "team")
        }
      />


      <Section
        title={"Careers at Instamart"}
        description={faltu}
        isVisible={visibleSection === "career"}
        setIsvisible={() =>
          setIsVisibleSection((visibleSection === "career") ? "" : "career")
        }
      />



    </div>
  );
};

export default Instamart;
