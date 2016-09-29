var app = angular.module("todoListApp");
app.directive('todos', function() {
    return {
        templateUrl: '../views/todos.html',
        controller: 'mainCtrl'
    };
});
