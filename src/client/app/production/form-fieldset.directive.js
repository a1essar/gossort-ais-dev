export function formFieldsetDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: function(el, attr) {
            return 'app/production/form-fieldset.html'
        },
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

let qWrap;

class FormFieldsetController {
    constructor ($scope, $rootScope, $q, appData) {
        'ngInject';

        qWrap = $q;
        this.$scope = $scope;

        this.model = ($scope.formFieldset.model) ? $scope.formFieldset.model : $scope.formFieldset.model = [];
        this.fieldset = $scope.fieldset = {};

        appData.culturesList.then((data) => {
            this.culturesList = $scope.culturesList = data;
            this.fieldset['input1'] = this.culturesList[0];
        });

        appData.cultivarsList.then((data) => {
            this.cultivars = $scope.cultivars = data;
            this.updateCurrentCultivars(data).then((data) => {
                this.cultivarsList = $scope.cultivarsList = data;
                this.fieldset['input2'] = this.cultivarsList[0];
            });
        });
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

    updateCurrentCultivars(data) {
        data = data || this.cultivars;

        let currentData = [],
            currentCulture = this.fieldset['input1'] || this.culturesList[0],
            deferred = qWrap.defer();

        data.forEach((el, i) => {
            if (el.culture === currentCulture) {
                currentData.push(el.cultivar);
            }

            if (data.length === i + 1) {
                deferred.resolve(currentData);
            }
        });

        return deferred.promise;
    }

    changeCultures() {
        this.updateCurrentCultivars().then((data) => {
            this.$scope.cultivarsList = data;
            this.fieldset['input2'] = this.$scope.cultivarsList[0];
        });
    }
}
