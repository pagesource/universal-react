# Universal React

A community accepted and reliable XT Dev Ecosystem, that can be utilized as baseline for
development of all types of projects, to achieve dependable delivery standards. This
ecosystem doesn&apos;t intend to provide lot of out of the box code/components but a
well configured development environment and delivery pipeline, having balanced focus to
Static Code Quality, Performance, Processes, Security, Testability and Best Practices.
This boilerplate will help project teams in building applications with great quality, by
giving them more time to focus on business problems rather than web development chores.

## Ecosystem of this reference architecture 🎉

- **Development Environment:** Storybook integrated for developing and showcasing components.
- **Flow typed:** All components are FlowTyped and Flow Type checked.
- **Static Code Quality checks and formatting:** Javascript and CSS linting using Eslint, StyleLint and Prettier.
- **Component scaffolding:** Consistently generate components using Plop.
- **Git Hooks:** Pre-commit, Pre-push and pre-publish using Husky.
- **Unit testing framework:** with Jest and Enzyme.
- **Theme and Styling:** with Styled Components.
- **Next.js:** to render react application server side and more.
- **PWA:** application.
- **Dynamic Authoring:** of pages with headless CMS.

## Main Technology Dependencies

1. React
2. Next.js
3. Redux
4. Node.js

## Installation

Fork the repository & install dependencies using the yarn/npm command line tools.

```sh
yarn install
yarn run flow:install
```

flow:install will search the [`libdef`](https://github.com/flow-typed/flow-typed/blob/master/README.md) repo and download all the libdefs that are relevant for our project and install them for us.

## How to ramp-up?

Follow this ramp-up [guide](readme/01-GettingStarted.md)
