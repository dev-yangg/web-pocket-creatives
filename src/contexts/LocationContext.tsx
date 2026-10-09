import { createContext, useContext } from "react";

export type AppLocation = { pathname: string; search: string };

export const LocationContext = createContext<AppLocation>({
  pathname: "/",
  search: "",
});

export const useLocation = () => useContext(LocationContext);
