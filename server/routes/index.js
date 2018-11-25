const routes = require('next-routes')();
const rules = require('./rules');

rules.forEach((rule) => {
  routes.add(rule.name, rule.regex, rule.page || rule.name);
});

module.exports = routes;
