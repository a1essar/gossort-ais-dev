export function runBlock ($log, $rootScope, $localStorage) {
    'ngInject';

    $localStorage.$default({
        'commonData': {}
    });

    $rootScope.commonData = $localStorage.commonData;

    $log.debug('runBlock end');
}
