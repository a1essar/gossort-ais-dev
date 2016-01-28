let locationWrap,
    storageWrap;

export class LoginController {
    constructor ($scope, $localStorage, $location, appData) {
        'ngInject';

        this.sitemap = appData.sitemap;
        appData.branchList.then((data) => {
            $scope.branchList = data;
            $scope.login.branch = $scope.branchList[0];
        });

        storageWrap = $scope.$storage = $localStorage;
        storageWrap.$default({
            'commonData': {}
        });

        locationWrap = $location;
    }

    submit(formData) {
        storageWrap['commonData'].currentBranch = formData.branch;
        locationWrap.path('/');
    }
}
