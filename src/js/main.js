var app = angular.module('webApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "partials/home.htm",
        controller : 'main as ctrl'
    })
    .when("/page1", {
        templateUrl : "partials/page1.htm",
        controller : 'main as ctrl'
    })
    .when("/page2", {
        templateUrl : "partials/page2.htm",
        controller : 'main as ctrl'
    })
	.when("/drop1", {
        templateUrl : "partials/drop1.htm",
        controller : 'drop1 as ctrl'
    })
	.when("/drop2", {
        templateUrl : "partials/drop2.htm",
        controller : 'drop2 as ctrl'
    })
});

app.controller('drop1', function($scope, $http) {
	var vm = this,
		img = ["default1.jpg", "default2.jpg", "default3.jpg", "default4.jpg", "default1.jpg", "default2.jpg", "default3.jpg", "default4.jpg", "default1.jpg", "default2.jpg", "default3.jpg", "default4.jpg"];

	$(document).ready(function() { 
		//finds images and gives a path based on page
		vm.images = convertImagePath(img);
		
		//Update the page
		$scope.$apply();
	});
	
	vm.openModal = function(image) {
		vm.title = image.name;
		vm.modalImg = image.path;
	};
});

app.controller('drop2', function($scope, $http) {
	var vm = this,
		img = ["default1.jpg", "default2.jpg", "default3.jpg", "default4.jpg"];

	$(document).ready(function() { 
		//finds images and gives a path based on page
		vm.images = convertImagePath(img);
		
		//Update the page
		$scope.$apply();
	});
	
	vm.openModal = function(image) {
		vm.title = image.name;
		vm.modalImg = image.path;
	};
});

//converts a ton of images to the correct path
function convertImagePath(img){
	var imgPath = []
	angular.forEach(img, function(item, idx){
		imgPath.push({"name":item, "path":getImagePath(item)});
	})
	return imgPath;
};

//get image path
function getImagePath(imageName){
	return "img/" + imageName;	
};