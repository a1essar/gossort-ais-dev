export function runBlock ($log, $location, $rootScope, $localStorage, _) {
    'ngInject';

    $localStorage.$default({
        'commonData': {}
    });

    $rootScope.commonData = $localStorage.commonData;

    $rootScope._ = _;

    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
        if (!$rootScope.commonData.auth) {
            $location.path('/login');
        }
    });

    $rootScope.logout = function() {
        $rootScope.commonData.currentBranch = '';
        $rootScope.commonData.auth = false;

        $location.path('/login');
    };

    $rootScope._.mixin({
        'arraySumByField' : function(data, field) {
            return $rootScope._.sumBy(data, (el) => {
                return (isNaN(parseInt(el[field], 10))) ? 0 : parseInt(el[field], 10);
            });
        }
    });

    $log.debug('runBlock end');
}
