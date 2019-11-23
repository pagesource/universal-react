/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a container component (Molecules, Organisms, Templates)',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the base component type:',
      default: 'Stateless Function',
      choices: () => ['Stateless Function', 'React.Component'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Form',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value, 'containers')
            ? 'A component with this name already exists in container folder'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'wantActionsAndReducer',
      default: true,
      message: 'Do you want an actions/constants/reducer tuple for this container?',
    },
    {
      type: 'confirm',
      name: 'wantSaga',
      default: true,
      message: 'Do you want sagas for asynchronous flows? (e.g. fetching data)',
    },
    {
      type: 'list',
      name: 'folder',
      message: 'Where do you want to keep this component?',
      default: 'organisms',
      choices: () => ['molecules', 'organisms', 'templates'],
    },
    {
      type: 'confirm',
      name: 'wantPage',
      default: true,
      message: 'Do you want an entry in pages folder?',
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    let componentTemplate;

    switch (data.type) {
      case 'Stateless Function': {
        componentTemplate = './container/stateless.js.hbs';
        break;
      }
      default: {
        componentTemplate = './container/class.js.hbs';
      }
    }

    const actions = [
      {
        type: 'add',
        path: '../app/containers/{{ folder }}/{{properCase name}}/{{properCase name}}.js',
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../app/containers/{{ folder }}/{{properCase name}}/types/index.js',
        templateFile: './container/types.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../app/containers/{{ folder }}/{{properCase name}}/index.js',
        templateFile: './container/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path:
          '../app/containers/{{ folder }}/{{properCase name}}/tests/{{properCase name}}.test.js',
        templateFile: './container/test.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../app/containers/{{ folder }}/{{properCase name}}/{{properCase name}}.style.js',
        templateFile: './container/style.js.hbs',
        abortOnFail: true,
      },
    ];

    if (data.wantPage) {
      actions.push({
        type: 'add',
        path: '../app/pages/{{lowerCase name}}.js',
        templateFile: './container/page.js.hbs',
        abortOnFail: true,
      });
    }

    // If they want actions and a reducer, generate actions.js, constants.js,
    // reducer.js and the corresponding tests for actions and the reducer
    if (data.wantActionsAndReducer) {
      // Actions
      actions.push({
        type: 'add',
        path: '../app/containers/{{ folder }}/{{properCase name}}/{{properCase name}}.actions.js',
        templateFile: './container/actions.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../app/containers/{{ folder }}/{{properCase name}}/tests/actions.test.js',
        templateFile: './container/actions.test.js.hbs',
        abortOnFail: true,
      });

      // Constants
      actions.push({
        type: 'add',
        path: '../app/containers/{{ folder }}/{{properCase name}}/{{properCase name}}.constants.js',
        templateFile: './container/constants.js.hbs',
        abortOnFail: true,
      });

      // Reducer
      actions.push({
        type: 'add',
        path: '../app/containers/{{ folder }}/{{properCase name}}/{{properCase name}}.reducer.js',
        templateFile: './container/reducer.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../app/containers/{{ folder }}/{{properCase name}}/tests/reducer.test.js',
        templateFile: './container/reducer.test.js.hbs',
        abortOnFail: true,
      });
    }

    // Sagas
    if (data.wantSaga) {
      actions.push({
        type: 'add',
        path: '../app/containers/{{ folder }}/{{properCase name}}/{{properCase name}}.saga.js',
        templateFile: './container/saga.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../app/containers/{{ folder }}/{{properCase name}}/tests/saga.test.js',
        templateFile: './container/saga.test.js.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
