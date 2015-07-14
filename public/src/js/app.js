angular.module('mainApp', ['ngRoute', 'MainController', 'ProjectsController', 'CvController', 'EducationController'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl : 'pages/home.html',
		controller: 'mainController',
		title: "Home"
	})
	.when('/cv', {
		templateUrl : 'pages/cv.html',
		controller: 'cvController',
		title: "Curriculum Vitae"
	})
	.when('/education', { 
		templateUrl : 'pages/education.html',
		controller: 'educationController',
		title: "Education"
	})
	.when('/projects', {
		templateUrl : 'pages/projects.html',
		controller: 'projectsController',
		title: "Projects"
	})
	.when('/projects/:project_name', {
		templateUrl: function(params) { return 'pages/projectPages/'+ params.project_name +'.html'; },
		title: 'GryPhone'
	})
	.when('/404', {
		templateUrl: 'pages/404.html',
		title: 'Not Found'
	})
	.otherwise({
		redirectTo: '/404'
	});
}])
.run(['$rootScope','$location', '$routeParams', function($rootScope, $location, $routeParams) {
    $rootScope.$on('$routeChangeError', function(event, current, previous, error) {
        console.log(error.status);  
        if(error.status === 404) {
            $location.path('/404');
        }
	});
}]);