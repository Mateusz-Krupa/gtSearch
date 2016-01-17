import {UserProvider} from '../providers/user.provider';
export class MainController {

  public repositoryList: any;
  public error: string;
  public userName: string;
  public user: string;

  /* @ngInject */
  constructor (private UserProvider: UserProvider) {
  }

  public submitSearch(): void {
    this.UserProvider.getUsersRepositories(this.userName).then((res: any) => {
      this.repositoryList = res.data;
    }).catch((error: any) => {
      this.repositoryList = null;
      this.setMessageError(error);
    });
    this.UserProvider.getUser(this.userName).then((res: any) => {
      this.user = res.data;
    });
  }

  public setMessageError(error: any): void {
    if (typeof error.data !== 'undefined') {
      this.error = error.data.message;
    }
  }


}
