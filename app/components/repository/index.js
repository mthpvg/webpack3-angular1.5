import template from './template.html'

export default function (app) {
  return app.component(
    'repository',
    {
      template,
      bindings: {
        repository: '<'
      }
    }
  );
}
