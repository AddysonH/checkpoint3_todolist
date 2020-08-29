import { generateId } from "../utils.js"
export default class List {
    constructor({ id, title }) {
        this.id = id || generateId();
        this.title = title
        this.items = ["thing1", "thing2"]
    }

    get Template() {
        return `
        <div class="col-3 card card-deck m-2">
           <i class="fa fa-trash" aria-hidden="true"></i>

           <h3 col-12 class=>${this.title} </h3>           
           <section row>

              <div class="col-12">
              
                 ${this.thingToDoTemplate}
              </div>

           </section>
      
           <form onsubmit="app.listsController.addItem(event, '${this.id}')">
               <input type="text" class="form-control m-2" name="listItem" id="listItem" placeholder="New Task">
               <button type="submit">Add</button>
           </form>

    </div>`
    }

    get thingToDoTemplate() {
        let template = " "
        this.items.forEach(i => {
            template += `<li>${i}</li>`
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