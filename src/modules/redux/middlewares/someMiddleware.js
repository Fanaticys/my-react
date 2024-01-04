const someMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  console.log('someMiddleware', result);
};

export default someMiddleware;