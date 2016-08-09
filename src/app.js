angular
    .module('app', ['ngRoute'])
    .run(function() {
        console.log('YES!');
    })
    .config(function($routeProvider) {
        $routeProvider
            .when('/products', {
                templateUrl: 'product.list.html',
                controller: 'ProductListController'
            })
    });
