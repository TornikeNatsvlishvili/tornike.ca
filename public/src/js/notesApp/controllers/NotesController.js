angular.module('NotesController', [])

.controller('notesController', ['$scope', '$http', function($scope, $http) {
    $scope.UpdateNotes = function(){
       $http.get('/api/notes/')
            .success(function(data){
                $scope.entries = data;
            });
    };
        
    $scope.DeleteNote = function(index){
        var noteId = $scope.entries[index].id;
        $http.delete('/api/notes/' + noteId)
            .success(function(data){
                $scope.entries.splice(index, 1);
            });
    };
    
    $scope.AddNote = function(){
        var note = {'note': $scope.noteText,
                    'created_date': new Date()};
        $http.post('/api/notes/', note)
            .success(function(data){
                $scope.UpdateNotes();        
            });
    };
    
    $scope.ShowDialog = function(note){
        $("<div>" + note + "</div>").dialog({
            resizable: true,
        });
    };   

    $scope.UpdateNotes();
}]);

