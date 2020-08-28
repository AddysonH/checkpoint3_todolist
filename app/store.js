import List from "./Models/List.js"


let _state = {
  lists: [
    new List({ title: "New List" }),
  ]
}

//NOTE You should not need to change the code from this point down

//NOTE this method will get the lists from local storage at the start of the app
function _loadState() {
  let data = JSON.parse(localStorage.getItem("Lists"));
  if (data) {
    data.lists = data.lists.map(l => new List(l));
    _state = data;
  }
}
_loadState();

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }



  //NOTE call saveState everytime you change the state in any way
  saveState() {
    localStorage.setItem("Lists", JSON.stringify(_state));
  }
}

const STORE = new Store();
export default STORE;
