# Universal React <Project Name>

To assemble a reliable and community accepted XT Dev Ecosystem, that can be utilized as baseline for development of each project with dependable quality standards. This "Universal React" boilerplate will not limit/restrict any team on further improving it, but ensure that projects are meeting minimum quality and best practices with this ecosystem. This ecosystem doesn't intend to provide a lot of out of the box code/components or features but a well configured development environment and delivery pipeline, having balanced focus to Static Code Quality, Performance, Processes, Security, Testability, Documentation and Best Practices.  

## Ecosystem of this component library 🎉

- **Development Environment:** Storybook integrated for developing and showcasing components.
- **Flow typed:** All components are FlowTyped and Flow Type checked.
- **Static Code Quality checks and formatting:** Javascript and CSS linting using Eslint, Stylelint and Prettier.
- **Component scaffolding:** Consistently generate components using Plop.
- **Documentation:** Generates code documentation with ESDocs.
- **Git Hooks:** Pre-commit, Pre-push and pre-publish using Husky.
- **Unit testing framework:** with Jest and Enzyme.
- Babel 7 to transpiling javascript and releasing them as ESModules.
- **Theme and Styling:** with Styled Components.

## Dependencies

1. react
2. next.js
3. redux

## Installation

Dependencies should be installed using the yarn
command line tools.

```sh
yarn install
yarn run flow:install
```

flow:install will search the [`libdef`](https://github.com/flow-typed/flow-typed/blob/master/README.md) repo and download all the libdefs that are relevant for our project and install them for us.

## Topics to refer

- [Development Tools](readme/DevelopmentTools.md)
- [Static Code Linters and Code Formatter](readme/StaticCodeLinters.md)
- [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)
- [Folder Structure](readme/FolderStructure.md)
- [Component Scaffolding](readme/Component.md)
- [Flow Type](readme/FlowType.md)
- [Husky](readme/Husky.md)
- [ES Docs](readme/ESDocs.md)
- [Storybook](readme/Storybook.md)
- [Running The Tests](readme/Test.md)
