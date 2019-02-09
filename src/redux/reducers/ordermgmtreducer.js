const initialOrder = { orders: [] };

const ordermgmtReducer = (state = initialOrder, action) => {
  if (state.orders == undefined) {
    console.log(
      "Redux : Step 4 : Orders of state undefined " + JSON.stringify(state)
    );
    state.orders = [];
  }
  console.log("Redux : Step 4 : Before Additon" + JSON.stringify(state.orders));
  switch (action.type) {
    case "Create_Order": {
      let returnState = {
        orders: state.orders.concat(action.orderItem)
      };
      return returnState;
    }
    //    case DEL_ITEM: {
    //      let length = state.itemTitles.length;
    //      let returnState = {
    //        itemTitles: state.itemTitles.slice(0, length - 1)
    //      };
    //      return returnState;
    //    }
    default: {
      return state;
    }
  }
};
export default ordermgmtReducer;
