export function inputMaskDirective($timeout) {
    'ngInject';

    let directive = {
        restrict: 'A',
        require: '^form',
        scope: {
            name: '@'
        },
        link: link
    };

    return directive;

    function link(scope, element, attr, ctrl) {
        scope.formElement = ctrl[scope.name];

        scope.$watch('formElement.$viewValue', (newValue) => {
            if (!scope.formElement.$valid) {
                scope.formElement.$viewValue = '';
                element.val('');
            }
        });
    }
}
