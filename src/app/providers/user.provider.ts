export class UserProvider{

      /* @ngInject */
    constructor (private  $http: ng.IHttpService) {
    }


    public getUser(userName): ng.IPromise<any>{
        return this.$http({
            method: 'GET',
            url: 'https://api.github.com/users/' + userName
        })
    }

    public getUsersRepositories(userName): ng.IHttpPromise<any>{
        return this.$http({
            method: 'GET',
            url: 'https://api.github.com/users/' + userName + '/repos'
        })
    }

}