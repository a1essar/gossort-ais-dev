export class ReportListController {
    constructor ($scope, $routeParams, NgTableParams, appData) {
        'ngInject';

        this.section = $scope.section = $routeParams.section;
        this.report = $scope.report = $routeParams.report;

        let dataSection = appData.reports[this.section] || [];
        let dataReport = dataSection[this.report] || [];

        this.reports = dataReport.data || [];
        this.columns = dataReport.schema || [];

        this.data = new NgTableParams({
            page: 1, // show first page
            count: 10 // count per page
        }, {
            filterDelay: 0,
            data: this.reports
        });
    }
}
