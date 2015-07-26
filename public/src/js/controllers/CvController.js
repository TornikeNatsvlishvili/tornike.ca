angular.module('CvController', [])

.controller('cvController', ['$scope', function($scope){
	$scope.message = '---c';
}])

.directive('markdown', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var htmlText = markdown.toHTML(element.text());
            element.html(htmlText);
        }
	};
});