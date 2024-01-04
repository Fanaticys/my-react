import {API_REQUEST} from "../constants";

// this middleware care only for API calls
const api = ({dispatch}) => next => action => {
  if(action.type === API_REQUEST) {
    const { method, url, onSuccess, onError } = action.meta;

    fetch(url, { method }).then((response) => response.json())
      .then((data) => dispatch(onSuccess(data)))
      .catch((error) => dispatch(onError(error)));
  }

  return next(action);
};

export default api;