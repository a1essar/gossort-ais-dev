let messages;

export class ReportController {
    constructor ($scope, $routeParams, appData) {
        'ngInject';

        this.section = $scope.section = $routeParams.section;
        this.report = $scope.report = $routeParams.report;
        this.reportId = $scope.reportId = $routeParams.id || false;

        let dataSection = appData.reports[this.section] || [];
        let dataReport = dataSection[this.report] || [];

        this.reports = dataReport.data || [];

        this.reportData = $scope.reportData = this.getReport(this.reportId);

        this.formFieldsData = $scope.formFieldsData = appData.formFieldsData;

        this.vm = $scope.vm = {};

        messages = this.messages = $scope.messages = [
            {
                'username': 'Филиал',
                'content': 'Пример сообщение 1!'
            },
            {
                'username': 'Администратор',
                'content': 'Пример сообщение 2!'
            },
            {
                'username': 'Филиал',
                'content': 'Пример сообщение 3!'
            }
        ];

        this.vm.username = 'Филиал';
        this.vm.myUserId = 'Филиал';
        this.vm.visible = true;
        this.vm.expandOnNew = true;
    }

    getReport(id) {
        return this.reports.filter(function(value) {
            return value._id === id;
        })[0];
    }

    sendMessage(message, username) {
        if (message && message !== '' && username) {
            messages.push({
                'username': username,
                'content': message
            });
        }
    }
}
