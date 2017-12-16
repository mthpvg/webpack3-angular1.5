export default function (app) {
  return app.config(function($locationProvider, $stateProvider) {
    $locationProvider.html5Mode({enabled: true, requireBase: false});

    $stateProvider.state({
      name: 'repositories',
      url: '/',
      template: '<repositories></repositories>'
    });
    $stateProvider.state({
      name: 'repository',
      url: '/repository',
      template: '<repository></repository>'
    });
  });
}
