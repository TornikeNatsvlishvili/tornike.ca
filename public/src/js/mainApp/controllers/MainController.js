angular.module('MainController', ['ngBreadcrumbs'])
.controller('mainController', ['$scope', '$route', 'breadcrumbs', '$location', function($scope, $route, breadcrumbs, $location){
	$scope.$route = $route;
	$scope.breadcrumbs = breadcrumbs;
	$scope.hi="hi";
	$scope.getAge = function(){
		var birth = new Date(1993,9,28);
		var now = new Date();
		
		var timeDiff = Math.abs(now.getTime() - birth.getTime());
		var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
		
		var yearsOld = Math.floor(diffDays / 365);
		var remainder = (diffDays % 365) / 365;
		
		return (yearsOld + remainder).toFixed(3).toString();
	};
}]);