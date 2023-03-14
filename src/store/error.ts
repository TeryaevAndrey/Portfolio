import { createEvent, createStore } from "effector";

interface IError {
  text: string;
  isError: boolean;
}

export const setError = createEvent<IError>();

export const $isError = createStore<IError>({
  text: "",
  isError: false,
});

$isError.on(setError, (state, data) => (state = data));
