export default function (github) {
  github.getRepositories( ).then((repositories) => {
    this.repositories = repositories;
  })
}
