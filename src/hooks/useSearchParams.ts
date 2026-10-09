import { navigate } from "gatsby";
import { useLocation } from "../contexts/LocationContext";

export function useSearchParams() {
  const { pathname, search } = useLocation();
  const searchParams = new URLSearchParams(search);

  const setSearchParams = (next: Record<string, string>) => {
    navigate(`${pathname}?${new URLSearchParams(next).toString()}`);
  };

  return [searchParams, setSearchParams] as const;
}
