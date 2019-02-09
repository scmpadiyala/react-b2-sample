export const manageOrder = order => {
    console.log("Redux : Step 3");
  console.log(
    "1. Create Order action called : Order : " + JSON.stringify(order)
  );
  return {
    type: "Create_Order",
    orderItem: order
  };
};
