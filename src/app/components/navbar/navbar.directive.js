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

let locationWrap,
    storageWrap;

class NavbarController {
    constructor ($scope, $location, $localStorage, appData) {
        'ngInject';

        storageWrap = $scope.$storage = $localStorage;
        this.sitemap = $scope.sitemap = appData.sitemap;
        //this.currentBranch = $scope.currentBranch = (storageWrap['commonData'].currentBranch) ? storageWrap['commonData'].currentBranch : storageWrap['commonData'].currentBranch = '';

        locationWrap = $location;
    }

    isActive(item) {
        return item.path === locationWrap.path();
    }

    isLogin() {
        return locationWrap.path() === '/login';
    }
}
