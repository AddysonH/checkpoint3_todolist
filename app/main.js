import ListsController from "./Controllers/ListsController.js"
import ValuesController from "./Controllers/ValuesController.js";

class App {
  listController = new ListsController();
}


/*
class App {
  valuesController = new ValuesController();
}
*/


window["app"] = new App();
