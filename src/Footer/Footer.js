import { Global } from "../Global/Global";
import { useContext } from "react";

const Footer = () => {
  const { user, setuser } = useContext(Global);

  return (
    <>
      <div className="bg-pink-100 h-20 flex items-center justify-around">
        <input
          type="text"
          value={user.name}
          onChange={(e) => {
            setuser({
              name: e.target.value,
              email: e.target.value + "@gmail.com",
            });
          }}
        ></input>

        <div>
          This site is developed by {user.name} - contact {user.email}
        </div>
      </div>
    </>
  );
};
export default Footer;
