angular.module('MainController', ['ngBreadcrumbs'])
.controller('mainController', ['$scope', '$route', 'breadcrumbs', '$location', function($scope, $route, breadcrumbs, $location){
	$scope.$route = $route;
	$scope.breadcrumbs = breadcrumbs;
}]);