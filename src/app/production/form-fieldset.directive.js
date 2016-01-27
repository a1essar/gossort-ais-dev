export function formFieldsetDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/production/form-fieldset.html',
        scope: {
            model: '='
        },
        link: link,
        controller: FormFieldsetController,
        controllerAs: 'formFieldset',
        bindToController: true
    };

    return directive;

    function link() {
    }
}

let locationWrap;

class FormFieldsetController {
    constructor ($scope) {
        'ngInject';

        this.model = ($scope.formFieldset.model) ? $scope.formFieldset.model : $scope.formFieldset.model = [];
    }

    add (fieldset) {
        if (!fieldset.input1) {
            return false;
        }

        if (!fieldset.input2) {
            return false;
        }

        let obj = angular.copy(fieldset);
        this.model.push(obj);

        Object.keys(fieldset).map((val) => {
            fieldset[val] = '';
        });
    }

    remove (id) {
        this.model.splice(id, 1);
    }

    getTotal(id) {
        let elements = angular.element('[data-total-value="' + id + '"]');
        let total = 0;

        /*elements.map((key, el) => {
            let value = angular.element(el).text();

            if (!isNaN(value)) {
                total += parseInt(value, 10);
            }
        });*/

        return total;
    }
}
