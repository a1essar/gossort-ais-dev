let storageWrap,
    locationWrap,
    lodashWrap;

export class ProductionController {
    constructor ($scope, $rootScope, $location, $localStorage, $routeParams, moment, NgTableParams, appData) {
        'ngInject';

        this.$scope = $scope;

        locationWrap = $location;

        storageWrap = $scope.$storage = $localStorage;
        storageWrap.$default({
            'production': {
                'increment': 0,
                'data': []
            }
        });

        this.commonData = $rootScope.commonData;

        this.entries = $scope.entries = storageWrap['production']['data'];
        this.tableData = $scope.tableData = this.getList(this.entries);
        this.entry = $scope.entry = ($routeParams.id) ? this.getEntry($routeParams.id, this.entries) : {};

        // default date for new entry
        this.currentDate = $scope.currentDate = moment().format('DD-MM-YYYY');

        this.tableParams = $scope.tableParams = new NgTableParams({
            page: 1, // show first page
            count: 10 // count per page
        }, {
            filterDelay: 0,
            data: this.tableData
        });

        appData.gsuList.then((data) => {
            this.gsu = $scope.gsu = data;
            this.updateCurrentGsu(data);
        });

        appData.production.then((data) => {
            this.productionConfig = $scope.productionConfig = data;
        });
    }

    getList(entries) {
        let data = angular.copy(entries);

        data = data.filter((el) => {
            return el.common.branch === this.commonData.currentBranch;
        });

        data = Object.keys(data).map((key) => {
            return angular.extend({_id: data[key]._id} , data[key].common);
        });

        return data;
    }

    getEntry(id, entries) {
        id = parseInt(id, 10);

        return angular.copy(entries.filter((el) => {
            return el._id === id;
        })[0]);
    }

    add(entry) {
        if (this.form.$invalid) {
            return false;
        }

        let obj = angular.copy(entry);

        /* data manipulation */
        obj._id = storageWrap['production']['increment']++;
        obj.common.branch = this.commonData.currentBranch;

        this.entries.push(obj);

        //angular.element('form')[0].reset();

        Object.keys(entry.common).map((val) => {
            entry.common[val] = '';
        });

        this.form.$setPristine(true);
    }

    edit(id, entry) {
        if (this.form.$invalid) {
            return false;
        }

        let obj = angular.copy(entry);

        this.entries.map((el, i) => {
            if (el._id === id) {
                this.entries[i] = obj;
            }
        });
    }

    toEdit(id) {
        locationWrap.path('/section/production/' + id);
    }

    updateCurrentGsu(data) {
        data = data || this.gsu;

        let currentData = [],
            currentBranch = this.commonData.currentBranch;

        data.forEach((el, i) => {
            if (el.branch === currentBranch) {
                currentData.push(el.gsu);
            }
        });

        currentData.push('');

        this.gsuList = this.$scope.gsuList = currentData;
    }
}
