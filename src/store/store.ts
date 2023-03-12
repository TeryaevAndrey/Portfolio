import { combine } from "effector";
import { $isOpenMenu } from "./menu";

const store = combine($isOpenMenu, (isOpenMenu) => {
  return {
    isOpenMenu,
  };
});

export default store;
