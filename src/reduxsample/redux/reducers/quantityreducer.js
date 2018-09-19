import { ADD_ITEM, DEL_ITEM } from "../actions/actiondef";

const initialState = {
  itemTitles: ["default title", "Title1"]
};

const quantityReducer = (state = initialState, action) => {
  console.log(
    "3. Quantity Reducer : ~~~ " + action.type + " :: " + action.itemTitle
  );
  switch (action.type) {
    case ADD_ITEM: {
      console.log("3.1. Current state : " + state.itemTitles);

      let returnState = {
        itemTitles: state.itemTitles.concat(action.itemTitle)
      };

      console.log("3.2. New state : " + action.itemTitle + " : " + returnState);

      return returnState;
    }

    case DEL_ITEM: {
      console.log("4.1. Delete Title : " + state.itemTitles);

      let length = state.itemTitles.length;

      let returnState = {
        itemTitles: state.itemTitles.slice(0, length - 1)
      };

      console.log("4.2. Delete State : : " + returnState.itemTitles);

      return returnState;
    }

    default: {
      console.log(" Reducer initialization : " + state.itemTitles);
      return state;
    }
  }
};

export default quantityReducer;
