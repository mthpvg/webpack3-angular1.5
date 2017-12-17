import template from './template.html'

export default function (app) {
  return app.component(
    'repositories',
    {
      template,
      bindings: {
        repositories: '<'
      }
    }
  );
}
