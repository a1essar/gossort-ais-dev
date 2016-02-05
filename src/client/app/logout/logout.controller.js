export class LogoutController {
    constructor ($rootScope, $localStorage, $location) {
        'ngInject';

        $localStorage.commonData.currentBranch = '';
        $localStorage.commonData.auth = false;

        console.log('test');

        $location.path('/login');
    }
}
