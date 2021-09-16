function inventoryList() {
  // write your code here
  const collections = new Set();

  const add = (item) => {
    if (
      collections.size < 10 &&
      (typeof item === "string" || item instanceof String)
    )
      collections.add(item);
  };

  const remove = (item) => {
    collections.delete(item);
  };

  const getList = () => {
    return collections.size > 0 ? [...collections].join() : "No items";
  };

  return { add, remove, getList };
}
console.log(inventoryList().getList());
inventoryList().add("Shirt");
inventoryList().add("Trouser");
console.log(inventoryList().getList());
inventoryList().remove("Shirt");
inventoryList().remove("nai");
console.log(inventoryList().getList());
