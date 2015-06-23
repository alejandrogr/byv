/**
 * Main AngularJS Web Application
 */
var app = angular.module('byvApp', [
  'ngRoute',
  'firebase'
]);

app.directive('byvResource', function() {
    return {
    restrict: 'E',
    template: '<div class="{{resourceClass}} resource">{{resourceCost}}</div>',
    link: function(scope, el, attr) {
        var costL = scope.cost.length;
        var resource = scope.cost.substring( costL - 2, costL); //just 2 last chars
        scope.resourceCost = scope.cost.substring(0, costL - 2);
        if( resource === "MA"){
            scope.resourceClass = "wood";
        } else if( resource === "PI" ){
            scope.resourceClass = "stone";
        } else if( resource === "OR" ){
            scope.resourceClass = "gold";
        } else if( resource === "ME" ){
            scope.resourceClass = "metal";
        } else if( resource === "AL" ){
            scope.resourceClass = "food";
        }
    }
  }
});

app.directive('byvResourceInline', function() {
    return {
    link: function(scope, el, attr) {
        
        var text = scope.level[attr.type];
        if( text === "" ){
            el.html("");
        } else {
            text = text.replace("MA", "<div class='wood resource-inline'></div>");
            text = text.replace("PI", "<div class='stone resource-inline'></div>");
            text = text.replace("OR", "<div class='gold resource-inline'></div>");
            text = text.replace("ME", "<div class='metal resource-inline'></div>");

            el.html(el.html().replace("{{text}}",text));    
        }        
    }
  }
});

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider

    .when("/buildings", {templateUrl: "partials/buildings.html", controller: "BuildingCtrl"})
    .when("/game", {templateUrl: "partials/game.html", controller: "GameCtrl"})

    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
    .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // Blog
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);


/**
 * Controls the Game
 */
app.controller('GameCtrl', function () {
    console.log("Game Controller reporting for duty.");
});

/**
 * Controls the Game
 */
app.controller('BuildingCtrl', function ($scope) {
    console.log("Building Controller reporting for duty.");
    $scope.buildings = BUILDINGS;
});

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
    console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
    console.log("Page Controller reporting for duty.");

    // Activates the Carousel
    $('.carousel').carousel({
      interval: 5000
    });

    // Activates Tooltips for Social Links
    $('.tooltip-social').tooltip({
      selector: "a[data-toggle=tooltip]"
    })
});