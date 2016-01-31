let locationWrap,
    storageWrap;

export class LoginController {
    constructor ($scope, $rootScope, $localStorage, $location, appData) {
        'ngInject';

        appData.branchList.then((data) => {
            $scope.branchList = data;
            $scope.login.branch = $scope.branchList[0];
        });

        this.sitemap = appData.sitemap;
        this.commonData = $rootScope.commonData;

        locationWrap = $location;
        storageWrap = $localStorage;
    }

    submit(formData) {
        this.commonData.currentBranch = formData.branch;
        storageWrap.commonData.currentBranch = formData.branch;
        locationWrap.path('/');
    }
}
