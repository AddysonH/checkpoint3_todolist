import List from "../Models/List.js"
import STORE from "../store.js"

class ListsService {
    createList(newList) {
        let list = new List(newList)
        STORE.State.lists.push(list)
    }

    addItem(newItem, listId) {
        let list = STORE.State.lists.find(l => l.id == listId)
        list.items.push(newItem)
    }
}

const SERVICE = new ListsService();
export default SERVICE