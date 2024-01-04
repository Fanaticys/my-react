import { API_REQUEST } from "./constants";

export const apiRequest = ({ method, url, onSuccess, onError }) => {
  return {
    type: API_REQUEST,
    meta: {
      method,
      url,
      onSuccess,
      onError,
    }
  }
};