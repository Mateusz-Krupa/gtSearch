export class UserProvider {


    static  API_URL: string = 'https://api.github.com/';

      /* @ngInject */
    constructor (private  $http: ng.IHttpService) {
    }

    public getUser(userName: string): ng.IPromise<any> {
        return this.$http({
            method: 'GET',
            url: UserProvider.API_URL + 'users/' + userName
        });
    }

    public getUsersRepositories(userName: string): ng.IHttpPromise<any> {
        return this.$http({
            method: 'GET',
            url:  UserProvider.API_URL + 'users/' + userName + '/repos'
        });
    }

}
