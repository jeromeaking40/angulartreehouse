var app = angular.module("todoListApp");
app.service('dataService', function($http) {
    this.helloConsole = function() {
        console.log("Testing the service!");
    };

    //Call the static JSON data
    this.getTodos = function(callback) {
        $http.get('../mock/todos.json')
            .then(callback);
    };

    this.deleteTodo = function(todo) {
        console.log("The " + todo.name + ' ' + "todo has been deleted!");
        //simulate communication with a REST API
    };

    this.saveTodos = function(todos) {
        console.log("The " + todos.length + ' ' + " todo has been saved!!!");
    };
});
