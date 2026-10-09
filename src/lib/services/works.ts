import { works as localWorks } from "../../views/works/data";
import { type WorkCategory } from "../../views/works/data";

export const getWorks = (): WorkCategory[] => {
  return localWorks;
};
