export function routerConfig ($locationProvider, $routeProvider) {
    'ngInject';

    $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
    });

    $routeProvider
        .when('/', {
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'main'
        })
        .when('/section/production', {
            templateUrl: 'app/production/production.html',
            controller: 'ProductionController',
            controllerAs: 'production'
        })
        .when('/section/production/add', {
            templateUrl: 'app/production/production-add.html',
            controller: 'ProductionController',
            controllerAs: 'production'
        })
        .when('/section/production/:id', {
            templateUrl: 'app/production/production-edit.html',
            controller: 'ProductionController',
            controllerAs: 'production'
        })
        .when('/login', {
            templateUrl: 'app/login/login.html',
            controller: 'LoginController',
            controllerAs: 'login'
        })
        .otherwise({
            redirectTo: '/'
        });
}
