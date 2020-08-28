import ListsController from "./Controllers/ListsController.js"

class App {
  listsController = new ListsController();
}


/*
class App {
  valuesController = new ValuesController();
}
*/


window["app"] = new App();
