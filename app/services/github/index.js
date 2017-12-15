const githubApiUrl = 'https://api.github.com';

export default function (app) {
  return app.factory('github', function ($http) {
    return {
      getRepositories: function() {
        return $http.get(`${githubApiUrl}/users/mthpvg/repos`)
          .then(function(response) {
            return response.data
          });
      }
    }
  });
}
