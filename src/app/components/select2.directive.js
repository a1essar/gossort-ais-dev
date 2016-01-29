export function select2Directive($timeout) {
    'ngInject';

    let directive = {
        restrict: 'A',
        scope: {
            lazyInit: '='
        },
        link: link
    };

    return directive;

    function link(scope, element, attr) {
        let instance;

        if (attr.lazyInit) {
            scope.$watch('lazyInit', function (newValue, oldValue) {
                if (!oldValue) {
                    instance = $(element).select2();
                    return;
                }

                /*update select*/
                $timeout(() => {
                    $(element).select2();
                });
            });

            return;
        }

        instance = $(element).select2();
    }
}
