import { createEvent, createStore } from "effector";

export const setStateMenu = createEvent<boolean>();

export const $isOpenMenu= createStore<boolean>(false);

$isOpenMenu.on(setStateMenu, (state, data) => (state = data));
