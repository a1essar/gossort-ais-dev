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
                if (response.data.length > 0) {
                    deferred.resolve(response.data);
                } else {
                    deferred.reject();
                }
            });

        return deferred.promise;
    }
}
