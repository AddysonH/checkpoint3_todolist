import { generateId } from "../utils.js"
export default class List {
    constructor({ id, title }) {
        this.id = id || generateId();
        this.title = title
        this.items = ["thing1"]
    }

    get Template() {
        return `
        
            <div class="col-3 card m-3">
            
                <div class="row text-center bg-primary">
                   <div class="col-12 d-flex align-self-end">
                      <h3 class="text-center mr-auto">${this.title}</h3>
                      <button class="" onclick="app.listsController.deleteList('${this.id}')">del</button>
                   </div>
                </div>
                
                ${this.thingToDoTemplate}

                <form onsubmit="app.listsController.addItem(event, '${this.id}')">
                   <input type="text" class="form-control" name="listItem" id="listItem" placeholder="New Task">
                   <button type="submit">Add</button>
                </form>
                        
            </div>
    `
    }

    get thingToDoTemplate() {
        let template = " "
        this.items.forEach(i => {
            template += `
          
               <div class="row m-3">
                  <div class="col-12 d-flex align-self-end">
                     <li class="mr-auto">${i}</li>
                     <button class="d-flex flex-column" onclick="app.listsController.deleteItem('${this.id}','${i}')">Del</button>
                  </div>
               </div>
            `

        });
        return template
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