const logger = ({ dispatch }) => next => action => {
  console.log("Action in the Logger : " + action.payload);
  return next(action);
};

export default logger;
