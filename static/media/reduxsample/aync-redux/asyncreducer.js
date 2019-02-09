import { FETCH_USERS } from "./ayncaction";

const initialState = {
  payload: ["default title", "Title1"]
};

export const asyncReducer = (state = initialState, action) => {
  console.log(
    "3. Quantity Reducer : ~~~ " + action.type + " :: " + action.payload
  );
  switch (action.type) {
    case FETCH_USERS: {
      console.log("3.1. Current state : " + state.payload);

      console.log("3.2. New state : " + " : " + action.payload);

      return { payload: action.payload };
    }

    default: {
      console.log(" Reducer initialization : " + state.payload);
      return state;
    }
  }
};
