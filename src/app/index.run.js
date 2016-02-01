export function runBlock ($log, $rootScope, $localStorage, _) {
    'ngInject';

    $localStorage.$default({
        'commonData': {}
    });

    $rootScope.commonData = $localStorage.commonData;

    $rootScope._ = _;

    $rootScope._.mixin({
        'arraySumByField' : function(data, field) {
            return $rootScope._.sumBy(data, (el) => {
                return (isNaN(parseInt(el[field], 10))) ? 0 : parseInt(el[field], 10);
            });
        }
    });

    $log.debug('runBlock end');
}
