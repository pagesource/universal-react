# Quality Control

## Static Code Linters and Code Formatter.

We are using certain libraries and frameworks to have clear consistent coding conventions, with automated enforcement.

- **ESLint:**
  JavaScript, being a dynamic and loosely-typed language, is especially prone to developer error. Without the benefit of a compilation process, JavaScript code is typically executed in order to find syntax or other errors. Linting tools like ESLint allow developers to discover problems with their JavaScript code without executing it.
  It uses `.eslintrc` for linting rules.

  Linting issue can be checked by executing yarn command.

  ```sh
  yarn run lint:js
  ```

  This helps you identify any linting issues with the code. Some of these issues can be fixed by executing the below command

  ```sh
  yarn run lint:js:fix
  ```

- **Prettier:**
  It helps us keep code uniformly formatted automatically across files. It uses `.eslintrc` and `.stylelintrc` files for formatting rules. For convenience, we enabled "editor.formatOnSave" in VSCode to autoformat the currently open file as per predefined rules.

## Husky

We used husky for customizing git hooks, which run automatically when specific events occur. There are client-side hooks which are triggered on actions such as committing or merging. Server-side hooks run in situations such as receiving push data from the client.

We used this to prevent developers from pushing inconsistent code on git repository. This runs automatically whenever we commit our code. It uses `.huskyrc` for hook rules. In this project husky checks for the Linting Issues, Flow issues and Unit Test cases.
