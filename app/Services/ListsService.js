import List from "../Models/List.js"
import STORE from "../store.js"

class ListsService {
    createList(listData) {
        let list = new List(listData)
        STORE.State.lists.push(list)
    }

    removeList(id) {
        STORE.State.lists = STORE.State.lists.filter(l => l.id != id)
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