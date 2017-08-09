var restaurants = [
  {
    name: 'Krusty Krab\'s',
    address: 'Bikini Bottom (Hehehe)',
    location: 'Bikini Bottom',
    category: 'Fast Food Restaurant',
    vote: '4.9',
    cuisine: 'Underwater',
    cost: '1000',
    hours: '10 AM to 9 PM',
    image: 'img/Krusty_Krab.jpg',
    id: 1,
    bestDish: {
      name: 'Krabby Patty',
      image: 'https://i.ytimg.com/vi/k5e1HPeusiA/hqdefault.jpg'
    }
  },
  {
    name: 'Ellora\'s Melting Moments',
    address: '29, Rajpur Road, Chukkuwala, Dehradun',
    location: 'Dehradun',
    category: 'Bakery',
    vote: '4.1',
    cuisine: 'Bakery, Fast Food',
    cost: '250',
    hours: '8 AM to 10 PM',
    image: 'img/elloras.jpg',
    id: 2,
    bestDish: {
      name: 'Red Velvet Cake',
      image: 'https://static01.nyt.com/images/2014/05/14/dining/14REDVELVET/14REDVELVET-superJumbo-v4.jpg'
    }
  },
  {
    name: 'Nazim\'s Kathi Rolls',
    address: '142, Rajpur Road, Opposite Anjali Dairy, Jakhan, Dehradun',
    location: 'Dehradun',
    category: 'Casual Dining',
    vote: '3.1',
    cuisine: 'Fast Food, Rolls',
    cost: '300',
    hours: '11 AM to 11 PM',
    image: 'img/nazim.jpg',
    id: 3,
    bestDish: {
      name: 'Egg Roll',
      image: 'http://peekncookassets.s3.amazonaws.com/Index_photos/bengali_egg_roll.jpg'
    }
  },
  {
    name: 'Doon Darbar',
    address: '43, Gandhi Road, Paltan Bazaar, Dehradun',
    location: 'Dehradun',
    category: 'Casual Dining',
    vote: '3.9',
    cuisine: 'North Indian, Mughlai',
    cost: '600',
    hours: '11 AM to 11 PM',
    image: 'img/doondarbar.jpg',
    id: 4,
    bestDish: {
      name: 'Chicken Changezi',
      image: 'http://mybigbiryani.com/wp-content/uploads/2017/03/Chicken-CHANGEZI.jpg'
    }
  },
  {
    name: 'McDonald\'s',
    address: '3, Astley Hall, Rajpur Road, Dehradun',
    location: 'Dehradun',
    category: 'Fast Food Restaurant',
    vote: '3.8',
    cuisine: 'Fast Food',
    cost: '400',
    hours: '10 AM to 11 PM',
    image: 'img/mcdonalds.jpg',
    id: 5
  },
  {
    name: 'KFC',
    address: '65A, Near Secretariat, Rajpur Road, Dehradun',
    location: 'Dehradun',
    category: 'Fast Food Restaurant',
    vote: '3.6',
    cuisine: 'American, Fast Food',
    cost: '400',
    hours: '11 AM to 11 PM',
    image: 'img/kfc.png',
    id: 6
  },
  {
    name: 'Singh Soup Bar',
    address: 'Main Canal Road, Near Blind School, Chukkuwala, Dehradun',
    location: 'Dehradun',
    category: 'Quick Bites',
    vote: '3.7',
    cuisine: 'Chinese',
    cost: '300',
    hours: '11 AM to 10 PM',
    image: 'img/singhsoupbar.jpg',
    id: 7,
    bestDish: {
      name: 'Chicken Momos',
      image: 'http://checkplease.wttw.com/sites/default/files/styles/span8/public/momo.jpg?itok=xaQ63NBq'
    }
  },
  {
    name: 'Baaje Momo Waala',
    address: 'Somewhere in Garhi Cantt., Dehradun',
    location: 'Unknown location in Dehradun, only the worthy can find it',
    category: 'Lordly Food',
    vote: '5.0',
    cuisine: 'Momos',
    cost: '60',
    hours: '11 AM to 10 PM',
    image: 'img/baaje.jpg',
    id: 8
  }
];

// An array containing names of different items that are harmful for diabetes patients.
var diabeticItems = ['sugar', 'candy', 'fruit juice', 'alcohol', 'beer', 'oil',
'chips', 'nachos', 'butter', 'whiskey', 'cake', 'chocolate', 'sweet', 'confectionery',
'jelly', 'potato', 'cookie', 'cupcake'];

// Defining the module for the angular app.
var foodieApp = angular.module('foodieApp', ['ngRoute']);

// Code for routing within the 'foodieApp' angular app.
foodieApp.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'pages/login.html',
    controller: 'loginController'
  })
  .when('/home', {
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  })
  .when('/restaurant/:id', {
    templateUrl: 'pages/restaurant.html',
    controller: 'restaurantController'
  });
});

foodieApp.controller('mainController', function($scope) {
  $scope.restaurants = restaurants;
});

foodieApp.controller('loginController', function($scope, $location) {
  $scope.goToHome = function() {
    $location.url('home');
  };
});

foodieApp.controller('restaurantController', function($scope, $routeParams, $http) {
  $scope.restaurantId = $routeParams.id;
  $scope.restaurant = restaurants[$routeParams.id - 1];
  $scope.ingredients = [];
  $scope.itemsToCheck = [];
  $scope.isSuitableForDiabetics;

  // A function to get a list of ingredients from Clarifai.
  $scope.getIngredients = function(url) {
    // Specifying the input data as a JSON object.
    var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}';
    // Making an AJAX call using AngularJS.
    $http({
    	'method': 'POST',
    	'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
    	'headers': {
    		'Authorization': 'Key ef126a5b3db7418f861cca9e92c3f4b1',
    		'Content-Type': 'application/json'
    	},
    	'data': data
    })
    .then(function (response) {   // then() takes two parameters, a function for success and another for failure.
      var ingredients = response.data.outputs[0].data.concepts;
      for(var i=0; i<ingredients.length; ++i) {
        if(ingredients[i].value >= 0.75)    // Add only those ingredients to the scope whose probability (value) >= 0.75
          $scope.ingredients.push(ingredients[i].name);
      }
      // console.log(ingredients);
    },
    function(xhr) {
      console.log(xhr);
    });
  };

  // A function to check whether the featured dish is suitable for diabetes patients or not.
  // Works similar to the previous getIngredients() function.
  $scope.checkForDiabetes = function(url) {
    var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}';
    $http({
      'method': 'POST',
      'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
      'headers': {
        'Authorization': 'Key ef126a5b3db7418f861cca9e92c3f4b1',
        'Content-Type': 'application/json'
      },
      'data': data
    })
    .then(function(response) {
      var  itemsToCheck = response.data.outputs[0].data.concepts;
      for(var i=0; i<itemsToCheck.length; ++i) {
        if(itemsToCheck[i].value >= 0.75)
          $scope.itemsToCheck.push(itemsToCheck[i].name);
      }
      // console.log($scope.itemsToCheck);
      // Now check every ingredient in $scope.itemsToCheck array to see if it occurs within the diabeticItems array.
      // If it does, mark $scope.isSuitableForDiabetics = false and end the function.
      // Suitable messages will be displayed to the user.
      for(var i=0; i<$scope.itemsToCheck.length; ++i) {
        for(var j=0; j<diabeticItems.length; ++j) {
          if($scope.itemsToCheck[i] == diabeticItems[j]) {
            $scope.isSuitableForDiabetics = false;
            console.log('Not suitable for diabetics');
            return;
          }
          // else {
          //   console.log($scope.itemsToCheck[i]+' '+diabeticItems[j]+' '+$scope.isSuitableForDiabetics);
          // }
        }
      }
      $scope.isSuitableForDiabetics = true;
      // console.log('Suitable for diabetics');
    },
    function(xhr) {
      console.log(xhr);
    });
  };
});
