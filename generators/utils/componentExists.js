/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const path = require('path');

const atomComponents = fs.readdirSync(path.join(__dirname, '../../app/components/atoms'));
const moleculeComponents = fs.readdirSync(path.join(__dirname, '../../app/components/molecules'));
const organismComponents = fs.readdirSync(path.join(__dirname, '../../app/components/organisms'));
const templateComponents = fs.readdirSync(path.join(__dirname, '../../app/components/templates'));
const components = atomComponents
  .concat(moleculeComponents)
  .concat(organismComponents)
  .concat(templateComponents);

const atomContainers = fs.readdirSync(path.join(__dirname, '../../app/containers/atoms'));
const moleculeContainers = fs.readdirSync(path.join(__dirname, '../../app/containers/molecules'));
const organismContainers = fs.readdirSync(path.join(__dirname, '../../app/containers/organisms'));
const templateContainers = fs.readdirSync(path.join(__dirname, '../../app/containers/templates'));
const containers = atomContainers
  .concat(moleculeContainers)
  .concat(organismContainers)
  .concat(templateContainers);

const componentContainer = {
  components,
  containers,
};

function componentExists(comp, category) {
  return componentContainer[category].indexOf(comp) >= 0;
}

module.exports = componentExists;
