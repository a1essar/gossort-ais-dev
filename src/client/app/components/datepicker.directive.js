export function datepickerDirective() {
    'ngInject';

    let directive = {
        restrict: 'A',
        scope: {
            datepickerOptions: '=',
            datepickerDate: '='
        },
        link: link
    };

    return directive;

    function link(scope, element, attr) {
        let options = {
            autoclose: true,
            todayHighlight: true,
            toggleActive: true,
            language: 'ru'
        };

        options = angular.extend(options, scope.datepickerOptions);

        $(element).datepicker(options);

        if (scope.datepickerDate) {
            $(element).datepicker('setDate', scope.datepickerDate);
        }
    }
}
