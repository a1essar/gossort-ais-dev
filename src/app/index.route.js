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
        .when('/report/:section/:report', {
            templateUrl: 'app/report/report-list.html',
            controller: 'ReportListController',
            controllerAs: 'report'
        }).when('/report/:section/:report/add', {
            templateUrl: 'app/report/report-add.html',
            controller: 'ReportController',
            controllerAs: 'report'
        }).when('/report/:section/:report/edit/:id', {
            templateUrl: 'app/report/report-edit.html',
            controller: 'ReportController',
            controllerAs: 'report'
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
