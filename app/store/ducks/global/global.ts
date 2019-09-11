import { GLOBAL } from "../actionTypes";

interface Reset {
  type: typeof GLOBAL.RESET;
}

export type GlobalActionTypes = Reset;

const reset = (): Reset => ({
  type: GLOBAL.RESET,
});

export const operations = {
  reset,
};
