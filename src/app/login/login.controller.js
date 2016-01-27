let locationWrap,
    storageWrap;

export class LoginController {
    constructor ($scope, $localStorage, $location, appData) {
        'ngInject';

        this.sitemap = appData.sitemap;
        this.branchList = $scope.branchList = appData.branchList;

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
