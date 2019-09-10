export const get = (key: string): any => {
  try {
    const rawData = localStorage.getItem(key);
    return JSON.parse(rawData);
  } catch (error) {
    console.error("CacheError", error);
    return null;
  }
};

export const set = (key: string, value: any): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("CacheError", error);
  }
};

export const PERSISTED_STATE_KEY = "persistedState";

export const getCachedState = (): any => get(PERSISTED_STATE_KEY) || undefined;

export const cacheState = (state: object): void =>
  set(PERSISTED_STATE_KEY, state);
