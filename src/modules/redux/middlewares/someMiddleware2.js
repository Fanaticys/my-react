const someMiddleware2 = (store) => (next) => (action) => {
  const result = next(action);
  console.log('someMiddleware2', result);
};

export default someMiddleware2;