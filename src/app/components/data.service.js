let httpWrap,
    qWrap;

export class dataService {
    constructor($http, $q) {
        'ngInject';

        httpWrap = $http;
        qWrap = $q;

        this.branchList = this.loadData('./assets/json/branchesList.json');
        this.gsuList = this.loadData('./assets/json/gsuList.json');
        this.culturesList = this.loadData('./assets/json/culturesFromCultivars.json');
        this.cultivarsList = this.loadData('./assets/json/cultivars.json');
        this.production = this.loadData('./assets/json/production.json');

        this.sitemap = [
            {
                'link': '/',
                'name': 'Главная',
                'childs': []
            },
            {
                'link': '/section/production',
                'name': 'Поизводственный раздел',
                'childs': [
                ]
            }
        ];
    }

    loadData(file) {
        let deferred = qWrap.defer();

        httpWrap.get(file)
            .then((response) => {
                deferred.resolve(response.data);
            }, (response) => {
                deferred.reject();
            });

        return deferred.promise;
    }
}
