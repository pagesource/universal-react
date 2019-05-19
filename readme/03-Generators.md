# How do I create a component? Is there a Scaffolding?

You can use our in-built generators to scaffold your components be it atoms, molecules, organisms or templates. Just running will command will start the generator, post which prompts will be asked for the name and other details. For page level components it will also ask if a page entry need to be added.

An example of how the generator functions is shown below:

```shell
➜  universal-react git:(feature/branch-name) yarn run generate

> universal-react@0.1.0 generate /Users/vinkumar2/Documents/Projects/code-commons/universal-react
> plop --plopfile generators/index.js

? [PLOP] Please choose a generator. components - Add an unconnected component (atoms, molecules, organisms, templates)
? Select the type of component Stateless Function
? What should it be called? Test
? Where do you want to keep this component? molecules
✔  ++ /Users/vinkumar2/Documents/Projects/code-commons/universal-react/app/components/molecules/Test/index.js
✔  ++ /Users/vinkumar2/Documents/Projects/code-commons/universal-react/app/components/molecules/Test/Test.js
✔  ++ /Users/vinkumar2/Documents/Projects/code-commons/universal-react/app/components/molecules/Test/tests/Test.test.js
✔  ++ /Users/vinkumar2/Documents/Projects/code-commons/universal-react/app/components/molecules/Test/Test.story.js
✔  ++ /Users/vinkumar2/Documents/Projects/code-commons/universal-react/app/components/molecules/Test/Test.style.js
✔  ++ /Users/vinkumar2/Documents/Projects/code-commons/universal-react/app/components/molecules/Test/types/index.js
✨  Done in 21.58s.
```

**Note**: The generator supports both Components and Containers to be scaffolded at their respective dir locations `src/components/*` and `*src/containers/*`. If you wish to support a more application contextual directory structure than just atomic, you should consider configuring plop generator configurations at `./generators` accordingly.
