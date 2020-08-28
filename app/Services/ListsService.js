import List from "../Models/List.js"
import STORE from "../store.js"

class ListsService {
    createList(newList) {
        let list = new List(newList)
        STORE.State.lists.push(list)

    }
}

const SERVICE = new ListsService();
export default SERVICE