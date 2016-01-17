import { MainController } from './main.controller';
import {UserProvider} from "../providers/user.provider";


describe('controllers', () => {
  let mainController: MainController;
  let userProvider: UserProvider;
  let q: angular.IQService;


  beforeEach(inject(function($q) {
    q = $q;
  }));


  beforeEach(() => {
    userProvider = new UserProvider(null);
    mainController = new MainController(userProvider)
  });

  it("show have search method", () => {
    expect(mainController.submitSearch).toBeDefined();
  });

  it("should call providers when calling submitSearch", () => {
    let mockedPrommise =function() {
      let deferred = q.defer();
      return deferred.promise;
    };
    spyOn(userProvider, 'getUser').and.returnValue(mockedPrommise());
    spyOn(userProvider, 'getUsersRepositories').and.returnValue(mockedPrommise())
    mainController.submitSearch();
    expect(userProvider.getUser).toHaveBeenCalled();
    expect(userProvider.getUsersRepositories).toHaveBeenCalled();
  });



});
