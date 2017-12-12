module.exports = function (app) {
  return app.component('helloWorld',{
    template: require('./template.html'),
    controller: require('./controller')
  });
}
