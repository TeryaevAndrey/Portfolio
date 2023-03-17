import { IWork } from "@/types.p";
import { createEvent, createStore } from "effector";

export const setWorks = createEvent<IWork[]>();

export const $works = createStore<IWork[]>([]);

$works.on(setWorks, (state, data) => (state = data));
