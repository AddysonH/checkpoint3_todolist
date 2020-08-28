import { generateId } from "../utils.js"
export default class List {
    constructor({ id, title }) {
        this.id = id || generateId();
        this.title = title
    }

    get Template() {
        console.log("Template here")
        return `<div class="col-3 card m-2">
        <h3 col-12>${this.title}</h3>
        <input type="text" class="form-control m-2" name="list-items" id="list-items" placeholder="New Task">
    </div>`
    }
}

/*
export default class Value {
    constructor(data) {
        this.title = data.title
    }

    get Template() {
        return this.title
    }
}
*/