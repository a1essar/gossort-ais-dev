export function NavbarDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/components/navbar/navbar.html',
        scope: {},
        link: link,
        controller: NavbarController,
        controllerAs: 'navbar',
        bindToController: true
    };

    return directive;

    function link() {
    }
}

let locationWrap;

class NavbarController {
    constructor ($scope, $rootScope, $location, appData) {
        'ngInject';

        locationWrap = $location;

        this.sitemap = $scope.sitemap = appData.sitemap;
        this.commonData = $scope.commonData = $rootScope.commonData;
    }

    isActive(item) {
        return item.path === locationWrap.path();
    }

    isLogin() {
        return locationWrap.path() === '/login';
    }
}
