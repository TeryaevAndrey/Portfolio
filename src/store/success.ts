import { createEvent, createStore } from "effector";

interface ISuccess {
  text: string;
  isSuccess: boolean;
}

export const setSuccess = createEvent<ISuccess>();

export const $isSuccess = createStore<ISuccess>({
  text: "",
  isSuccess: false,
});

$isSuccess.on(setSuccess, (state, data) => (state = data));
