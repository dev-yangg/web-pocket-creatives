import { works as localWorks } from "../../pages/works/data";
import { type WorkCategory } from "../../pages/works/data";

export const getWorks = (): WorkCategory[] => {
  return localWorks;
};
