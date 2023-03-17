import { combine } from "effector";
import { $isError } from "./error";
import { $isOpenMenu } from "./menu";
import { $isSuccess } from "./success";
import { $works } from "./works";

const store = combine(
  $isOpenMenu,
  $isSuccess,
  $isError,
  $works,
  (isOpenMenu, isSuccess, isError, works) => {
    return {
      isOpenMenu,
      isSuccess,
      isError,
      works,
    };
  }
);

export default store;
