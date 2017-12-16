export default function (github) {
  github.getRepository().then((repository) => {
    this.repository = repository;
  })
}
