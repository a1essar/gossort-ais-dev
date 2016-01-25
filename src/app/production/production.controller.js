export class ProductionController {
    constructor ($scope) {
        'ngInject';

        this.entry = $scope.entry = {};
        this.entry.fieldsets = this.entry.fieldsets || {};
        this.entries = $scope.entries || [];
    }

    add(entry) {
        this.entries.push(entry);
        console.log(this.entries);
    }

    addFieldsetItem(key, fieldset) {
        let obj = angular.copy(fieldset);
        this.entry.fieldsets[key] = this.entry.fieldsets[key] || [];
        this.entry.fieldsets[key].push(obj);

        Object.keys(fieldset).map(function(val, key) {
            fieldset[val] = null;
        });

        console.log(this.entry);
    }
}
