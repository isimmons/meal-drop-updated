# Meal Drop

This is an exteme updated version of Yahn Bragas Meal Drop application from his course on newline.

I've updated everything (I mean everything) and fixed breaking changes. I still have a ways to go to get it perfect. Currently I can run npm run dev and npm run storybook and everything works.

But I can not build due to a commonjs--resolver error so it is not production ready.

One other thing not working correctly is the restaurant section story with msw for loading state.
For the sake of showing the "Loading" story I can pass a isLoading arg and forget msw but I want to figure this out.

I've gotten multiple stories with different msw handlers working in a test project but for some reason they don't work in this app. I'm thinking of also trying to mock the hook that fetches restaurants since the hook it's self is not what is under test here. Anyway, more on that later.

Uploading this to github now so I can link to it for trying to get some help with the build error.
