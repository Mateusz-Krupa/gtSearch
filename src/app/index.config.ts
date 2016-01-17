/** @ngInject */
export function config($logProvider: angular.ILogProvider, $mdThemingProvider: any ) {
  // enable log
  $logProvider.debugEnabled(true);
  $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('orange')
    .warnPalette('red');
}
