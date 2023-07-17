import { combine } from "effector";
import { $isError } from "./error";
import { $isOpenMenu } from "./menu";
import { $isSuccess } from "./success";

const store = combine(
  $isOpenMenu,
  $isSuccess,
  $isError,
  (isOpenMenu, isSuccess, isError) => {
    return {
      isOpenMenu,
      isSuccess,
      isError,
    };
  }
);

export default store;
