export default function (app) {
  return app.config(function($locationProvider, $stateProvider) {
    $locationProvider.html5Mode({enabled: true, requireBase: false});

    $stateProvider.state({
      name: 'repositories',
      url: '/',
      resolve: {
        repositories: function(github) {
          return github.getRepositories();
        }
      },
      component: 'repositories'
    });
    $stateProvider.state({
      name: 'repository',
      url: '/repository',
      resolve: {
        repository: function(github) {
          return github.getRepository();
        }
      },
      component: 'repository'
    });
  });
}
