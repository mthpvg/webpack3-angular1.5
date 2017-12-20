const githubApiUrl = 'https://api.github.com';

export default function (app) {
  return app.factory('github', function ($http) {
    return {
      getRepositories: function() {
        return $http.get(`${githubApiUrl}/users/mthpvg/repos`)
          .then(function(response) {
            return response.data
          });
      },
      getRepository: function(name) {
        return $http.get(`${githubApiUrl}/repos/mthpvg/${name}`)
          .then(function(response) {
            return response.data
          });
      },
      getIssues: function(name) {
        return $http.get(`${githubApiUrl}/repos/mthpvg/${name}/issues`)
          .then(function(response) {
            console.log(response.data);
            return response.data
          });
      },
    }
  });
}
