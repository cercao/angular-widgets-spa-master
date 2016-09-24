angular.module('angular-widget-app', ['ui.bootstrap', 'ui.router'])
.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/dashboard');

        // Application routes
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',                
                templateUrl: 'templates/dashboard.html',
                controller: 'dashboard-ctrl',
                
            })
            .state('user', {
                url: '/user',
                templateUrl: 'templates/user.html',
                controller: 'user-ctrl'
            })
            .state('widget', {
                url: '/widget',
                templateUrl: 'templates/widget.html',
                controller: 'widget-ctrl'
            });
    }
]);