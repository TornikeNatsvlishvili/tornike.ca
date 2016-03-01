angular.module('NotesController', [])

.controller('notesController', ['$scope', '$http', function($scope, $http) {
    $http.get('/api/notes/')
        .success(function(data){
            $scope.entries = data;
        });
    

}]);

