module.exports = function (app) {
  return app.component(
    'repositories',
    {
      template: require('./template.html'),
      controller: require('./controller')
    }
  );
}
