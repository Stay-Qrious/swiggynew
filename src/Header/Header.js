import { logo } from "../Constant/Constant";
import { useState } from "react";
import CheckLogIn from "../Help/CheckLogIn";
import { Link } from "react-router-dom";
import { Global } from "../Global/Global";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [LogInHai, setLogInHai] = useState(false);
  const { user } = useContext(Global);
  const cartItems = useSelector((store) => store.cart.items);

  //   JSX
  return (
    <>
      <div className="flex justify-between items-center bg-pink-50 shadow-lg">
        {/* logo */}
        <Link to="home">
          <img className="h-24" src={logo} alt="Logo Not Found" />
        </Link>

        {/* home  */}

        <Link to="home">
          <div>Home</div>
        </Link>

        {/* About Us  */}
        <Link to="about">
          <div>About Us</div>
        </Link>

        {/* Constact  */}
        <Link to="contact">
          <div>Contact</div>
        </Link>

        {/* Cart  */}
        <Link to="cart">
          <div>Cart-{cartItems.length}</div>
        </Link>

        {/* Instamart  */}
        <Link to="instamart">
          <div>Instamart</div>
        </Link>

        {/* User Name Changing  incomplete*/}

        {/* LogIn LogOut Button  */}

        {LogInHai ? (
          <button
            onClick={() => {
              CheckLogIn({ LogInHai, setLogInHai });
            }}
          >
            Log In
          </button>
        ) : (
          <>
            <div className="bg-black text-white m-2 p-2">{user.name}</div>

            <button
              onClick={() => {
                CheckLogIn({ LogInHai, setLogInHai });
              }}
            >
              Log Out
            </button>
          </>
        )}
      </div>
    </>
  );
};
export default Header;
