export default function (app) {
  return app.config(function($locationProvider, $stateProvider) {
    $locationProvider.html5Mode({enabled: true, requireBase: false});

    $stateProvider.state({
      name: 'home',
      url: '/',
      component: 'home'
    });
    $stateProvider.state({
      name: 'repositories',
      url: '/repositories',
      resolve: {
        repositories: function(github) {
          return github.getRepositories();
        }
      },
      component: 'repositories'
    });
    $stateProvider.state({
      name: 'repositories.repository',
      url: '/{name}',
      resolve: {
        repository: function(github, $transition$) {
          return github.getRepository($transition$.params().name);
        }
      },
      component: 'repository'
    });
  });
}
