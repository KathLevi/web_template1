var app = angular.module('webApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "partials/home.htm",
        controller : 'main as ctrl'
    })
    .when("/portfolio", {
        templateUrl : "partials/portfolio.htm",
        controller : 'main as ctrl'
    })
	.when("/portfolio1", {
        templateUrl : "partials/portfolio1.htm",
        controller : 'portfolio1 as ctrl'
    })
	.when("/portfolio2", {
        templateUrl : "partials/portfolio2.htm",
        controller : 'portfolio2 as ctrl'
	})
	.when("/team", {
        templateUrl : "partials/team.htm",
        controller : 'team as ctrl'
	})
	.when("/contact", {
        templateUrl : "partials/contact.htm",
        controller : 'main as ctrl'
	})
	.when("/signIn", {
        templateUrl : "partials/signIn.htm",
        controller : 'main as ctrl'
    })
});

app.controller('portfolio1', function($scope, $http) {
	var vm = this,
		img = ["default1.jpg", "default2.jpg", "default3.jpg", "default4.jpg", "default1.jpg", "default2.jpg", "default3.jpg", "default4.jpg", "default1.jpg", "default2.jpg", "default3.jpg", "default4.jpg"];

	//finds images and gives a path based on page
	vm.images = convertImagePath(img);
	
	vm.openModal = function(image) {
		vm.title = image.name;
		vm.modalImg = image.path;
	};
});

app.controller('portfolio2', function($scope, $http) {
	var vm = this,
		img = ["default1.jpg", "default1.jpg", "default1.jpg", "default1.jpg"];

	//finds images and gives a path based on page
	vm.images = convertImagePath(img);
});

app.controller('team', function($scope, $http) {
    var vm = this,
        team = [
            {
                name: "Person A",
                path: "img/default3.jpg",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                name: "Person B",
                path: "img/default3.jpg",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                name: "Person C",
                path: "img/default3.jpg",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
        ];

	//finds images and gives a path based on page
    vm.team = team;

    vm.dropModal = function(image) {
        if (vm.teamName == undefined) {
            vm.teamName = image.name;
            vm.teamDesc = image.desc;
        }
        else {
            vm.teamName = null;
            vm.teamDesc = null;
        }
        
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