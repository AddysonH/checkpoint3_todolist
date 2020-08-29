import listsService from "../Services/ListsService.js"
import STORE from "../store.js"

//private
function _drawList() {
    let lists = STORE.State.lists
    let template = ''
    lists.forEach(list => template += list.Template)
    document.getElementById("lists").innerHTML = template
}


//public
export default class listController {
    constructor() {
        console.log("Controller")
        _drawList();
    }

    createList(event) {
        event.preventDefault()
        let form = event.target
        let newList = {
            title: form.title.value
        }
        console.log("Drawing List")
        listsService.createList(newList)
        _drawList()
    }

    deleteList(id) {
        listsService.removeList(id)
        _drawList()
    }

    addItem(event, listid) {
        event.preventDefault
        let form = event.target
        let newItem = form.listItem.value
        listsService.addItem(newItem, listid)
        console.log("Working")
        _drawList()
    }

    deleteItem(id, itemName) {
        listsService.removeItem(id, itemName)
        _drawList();
    }
}