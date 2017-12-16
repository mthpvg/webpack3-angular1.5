import controller from './controller';
import template from './template.html'

export default function (app) {
  return app.component(
    'repository',
    {controller, template}
  );
}
