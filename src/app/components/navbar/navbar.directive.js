export function NavbarDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/components/navbar/navbar.html',
        scope: {},
        controller: NavbarController,
        controllerAs: 'navbar',
        bindToController: true
    };

    return directive;
}

let locationWrap;

class NavbarController {
    constructor ($scope, $location, appData) {
        'ngInject';

        this.sitemap = $scope.sitemap = appData.sitemap;

        locationWrap = $location;
    }

    isActive(item) {
        return item.path === locationWrap.path();
    }

    isLogin() {
        return locationWrap.path() === '/login';
    }
}
