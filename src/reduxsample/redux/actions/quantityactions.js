import { ADD_ITEM, DEL_ITEM } from "./actiondef";

export const addItemTitle = itemTitle => {
  console.log("2. Add Item action called : New Title : " + itemTitle.itemTitle);
  return {
    type: ADD_ITEM,
    itemTitle: itemTitle.itemTitle
  };
};

export const deleteItem = index => {
  console.log("2. Delete Item action called : New Title : " + index.index);
  return {
    type: DEL_ITEM,
    index: index.index
  };
};
