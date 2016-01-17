/** @ngInject */
export function gtList(): angular.IDirective {

    return {
        restrict: 'EA',
        templateUrl: 'app/components/list/list.html',
        controller: ListCtrl,
        controllerAs: 'ctrl',
        scope: {},
        bindToController: {
            repositoryList: '=',
            user: '=',
            error: '='
        }
    };

}

/** @ngInject */
export class ListCtrl {

}
