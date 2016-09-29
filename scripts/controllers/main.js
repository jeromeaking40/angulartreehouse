var app = angular.module("todoListApp");

app.controller("mainCtrl", function($scope, dataService) {
    $scope.addTodo = function() {
        var todo = {
            name: "This is a new todo. Edit to add your todo. "
        };
        $scope.todos.push(todo);
    };
    $scope.helloConsole = dataService.helloConsole;

    dataService.getTodos(function(response) {
        console.log(response.data);
        $scope.todos = response.data;
    });

    $scope.deleteTodo = function(todo, $index) {
        dataService.deleteTodo(todo);
        $scope.todos.splice($index, 1);
    };

    $scope.saveTodos = function(todo, $index) {
        var filteredTodos = $scope.todos.filter = function(todo) {
            if (todo.edited) {
                return todo;
            }
        };
        dataService.saveTodos(todo);
    };


});
