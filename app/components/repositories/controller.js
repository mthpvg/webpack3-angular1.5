module.exports = function (github) {
  github.getRepositories( ).then((repositories) => {
    this.repositories = repositories;
  })
}
