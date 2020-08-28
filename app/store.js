import Value from "./Models/Value.js";
import List from "./Models/List.js"


let _state = {
  lists: [
    new List({ title: "New List" }),
  ]
}


class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
