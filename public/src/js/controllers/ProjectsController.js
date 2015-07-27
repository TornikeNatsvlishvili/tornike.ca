angular.module('ProjectsController', [])

.controller('projectsController', ['$scope', '$location', function($scope, $location) {
	
	$scope.projects = [
		{ 
			'name': 'GryPhone', 
			'href': 'gryphone',
			'platform': 'Android', 
			'aspects': 'Serverside, scraping, databases'
		},
		{ 
			'name': 'Animal Database', 
			'href': 'caf-database',
			'platform': 'Windows', 
			'aspects': 'Desktop application, databases'
		}
	];
	
	$scope.navigate = function(project) {
		$location.path('/projects/' + project.href);
	};

	$scope.getClass = function(platform){
		platform = platform.toLowerCase();
		var classes = [];
		
		if(platform.indexOf("android") !== -1){
			classes.push('my-icon-android');
		}
		if(platform.indexOf("windows") !== -1){
			classes.push('my-icon-windows');
		}
		if(platform.indexOf("apple") !== -1){
			classes.push('my-icon-apple'); 
		}
		
		return classes;
	};
}]);