var foodieApp = angular.module('foodieApp', ['ngRoute']);

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
  $scope.restaurants = [
    {
      name: 'Krusty Krab\'s',
      address: 'Bikini Bottom (Hehehe)',
      location: 'Nice',
      category: 'Fast Food Restaurant',
      vote: '4.9',
      cuisine: 'Underwater',
      cost: '1000',
      hours: '10 AM to 9 PM',
      image: 'img/Krusty_Krab.jpg',
      id: 1
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
      id: 2
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
      id: 3
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
      id: 4
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
      id: 7
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
});

foodieApp.controller('loginController', function($scope, $location) {
  $scope.goToHome = function() {
    $location.url('home');
  };
});

foodieApp.controller('restaurantController', function($scope, $routeParams) {
  $scope.restaurantId = $routeParams.id;
  var restaurants = [
    {
      name: 'Krusty Krab\'s',
      address: 'Bikini Bottom (Hehehe)',
      location: 'Nice',
      category: 'Fast Food Restaurant',
      vote: '4.9',
      cuisine: 'Underwater',
      cost: '1000',
      hours: '10 AM to 9 PM',
      image: 'img/Krusty_Krab.jpg'
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
      image: 'img/elloras.jpg'
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
      image: 'img/nazim.jpg'
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
      image: 'img/doondarbar.jpg'
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
      image: 'img/mcdonalds.jpg'
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
      image: 'img/kfc.png'
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
      image: 'img/singhsoupbar.jpg'
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
      image: 'img/baaje.jpg'
    }
  ];
  $scope.restaurant = restaurants[$routeParams.id - 1];
});
