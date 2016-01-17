export class MainController {

  public repositoryList: any;
  public error: string;
  public userName: string;
  public user: string;

  /* @ngInject */
  constructor (private  $http: ng.IHttpService, private UserProvider) {
  }

  public submitSearch(){
    this.UserProvider.getUsersRepositories(this.userName).then((res) => {
      this.repositoryList = res.data;
    }).catch((error) => {
      this.repositoryList = null;
      this.setMessageError(error);
    });
    this.UserProvider.getUser(this.userName).then((res) =>{
      this.user= res.data;
    });
  }

  public setMessageError(error){
    if(typeof error.data !== 'undefined') {
      this.error = error.data.message;
    }
  }


}
