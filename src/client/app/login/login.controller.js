let locationWrap,
    storageWrap,
    httpWrap,
    timeoutWrap;

export class LoginController {
    constructor ($scope, $rootScope, $localStorage, $location, $http, $timeout, appData) {
        'ngInject';

        appData.branchList.then((data) => {
            $scope.branchList = data;
            $scope.login.formData.login = $scope.branchList[0];
        });

        this.commonData = $rootScope.commonData;

        this.formError = $scope.formError = {
            'wrong-password': false
        };

        locationWrap = $location;
        timeoutWrap = $timeout;
        storageWrap = $localStorage;
        httpWrap = $http;
    }

    submit(formData) {
        if (this.form.$invalid) {
            angular.element('[name="' + this.form.$name + '"]').find('.ng-invalid:visible:first').focus();
            return false;
        }

        httpWrap({
            method: 'post',
            url: 'api/login',
            data: formData
        }).then((response) => {
            if (response.data && response.data.error) {
                this.formError['wrong-password'] = true;

                timeoutWrap(() => {
                    this.formError['wrong-password'] = false;
                }, 2000);

                return true;
            }

            if (response.data && response.data.success) {
                this.commonData.currentBranch = formData.login;
                storageWrap.commonData.currentBranch = formData.login;
                storageWrap.commonData.auth = true;
                locationWrap.path('/');

                return true;
            }
        }, (response) => {
        });
    }
}
