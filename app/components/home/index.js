import template from './template.html'

export default function (app) {
  return app.component(
    'home',
    {
      template
    }
  );
}
