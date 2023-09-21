import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Body from "./Body/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./Error/Error";
import RestaurantMenu from "./RestaurantMenu/RestaurantMenu";
import Shimmer from "./Shimmer/Shimmer";
import About from "./About/About";
import Cart from "./Cart/Cart";
import Contact from "./Contact/Contact";
import Profile from "./Profile/Profile";
import { Global } from "./Global/Global";
import store from "./store/store";
import { Provider } from "react-redux";
const Instamart = lazy(() => import("./Instamart/Instamart"));

// outlet me children ghusenge

const App = () => {
  const [user, setuser] = useState({
    name: "Animesh Mishra",
    email: "animeshmmishra@gmail.com",
  });

  return (
    <div>
      <Provider store={store}>
        <Global.Provider value={{ user: user, setuser: setuser }}>
          <Header />
          <Outlet />
          <Footer />
        </Global.Provider>
      </Provider>
    </div>
  );
};

// yha structure define hoga using createbroser router poore program ki routing or sirf ye kia link nhi kia to manually tab me ye sab insert krne se khulenge wo pages

// suspense wala on demand load hoga phle se hi single page application me load hokar nhi rhega ye react ka part
// ise use krne k liye lazy load kro using lazy function

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "home",
        element: <Body />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
