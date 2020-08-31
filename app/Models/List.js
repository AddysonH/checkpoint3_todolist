import { generateId } from "../utils.js"
export default class List {
    constructor({ id, title, items }) {
        this.id = id || generateId()
        this.title = title
        this.items = items || ["thing1"]
    }

    get Template() {
        return `
        
            <div class="col-3 card ">
            
                <div class="row text-center bg-primary">

                   <div class="col-12 d-flex align-self-end">
                      <h3 class="mr-auto">${this.title}</h3>

                      <i onclick="app.listsController.deleteList('${this.id}')" class="d-flex flex-column m-auto fa fa-trash" aria-hidden="true"></i>
                   </div>

                 </div>
                
                      ${this.thingToDoTemplate}
                       <form class="m-3 d-flex align-self-end" onsubmit="app.listsController.addItem(event, '${this.id}')">
                         <input type="text" class="form-control" name="listItem" id="listItem" placeholder="New Task">
                         <button><i type="submit" class="fa fa-plus" aria-hidden="true"></i></button>
                       </form>
            </div>
    `
    }

    get thingToDoTemplate() {
        let template = " "
        this.items.forEach(i => {
            template += `
          
               <div class="row m-3">
                    <div class="col-12">
                       <ul class="list-unstyled d-flex align-self-end">
                           <li class="mr-auto"><input class="mr-3" type="checkbox">${i}</li>

                           <i class="fa fa-trash class="d-flex flex-column" aria-hidden="true" onclick="app.listsController.deleteItem('${this.id}','${i}')"></i>

                       </ul>
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