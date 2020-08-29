import List from "../Models/List.js"
import STORE from "../store.js"

class ListsService {
    createList(newList) {
        let list = new List(newList)
        STORE.State.lists.push(list)
    }

    removeList(listId) {
        let list = STORE.State.lists.findIndex(l => l.id == listId)
        STORE.State.lists.splice(list);
    }

    addItem(newItem, listId) {
        let list = STORE.State.lists.find(l => l.id == listId)
        list.items.push(newItem)
    }

    removeItem(listId, itemName) {
        let list = STORE.State.lists.find(l => l.id == listId)
        let itemIndex = list.items.findIndex(i => i == itemName)
        list.items.splice(itemIndex, 1)

    }
}

const SERVICE = new ListsService();
export default SERVICE