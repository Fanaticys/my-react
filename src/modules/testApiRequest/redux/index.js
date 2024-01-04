import testApiRequestSlice, { apiRequestPosts } from './testApiRequest.slice';

const { apiRequestSuccess, apiRequestError } = testApiRequestSlice.actions;

export { apiRequestPosts, apiRequestSuccess, apiRequestError };
export default testApiRequestSlice;