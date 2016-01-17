/// <reference path="../../.tmp/typings/tsd.d.ts" />

import { config } from './index.config';
import { routerConfig, RouterController } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { gtList } from './components/list/list.directive';
import { UserProvider } from './providers/user.provider';

module gtSearch {
  'use strict';

  angular.module('gtSearch', ['ngAnimate', 'ngSanitize', 'ngAria', 'ngNewRouter', 'ngMaterial', 'toastr'])
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .directive('gtList', gtList)
    .service('UserProvider', UserProvider)
    .controller('RouterController', RouterController)
    .controller('MainController', MainController);
}
