import { createContext } from "react";

// Yha pr define wala kaam bas using createContext
// index wale pg pr jao or wha usestate ka use kro
// jha use krna ho wha useContext ka use or uske andar jis file me context create kia tha uska naam ye return krega object usme ek 

export const Global = createContext({
  user: {
    name: "dummy name",
    email: "dummy mail",
  },
});


