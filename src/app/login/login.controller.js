let locationWrap;

export class LoginController {
    constructor ($scope, $location, appData) {
        'ngInject';

        this.sitemap = appData.sitemap;
        this.branchList = $scope.branchList = appData.branchList;

        locationWrap = $location;
    }

    submit(formData) {
        locationWrap.path('/');
    }
}
