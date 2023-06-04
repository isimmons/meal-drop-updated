# Meal Drop

This is phase 1 of the meal-drop project from Yann Braga's course "Storybook for Building React Apps"

I took the beginning project from branch 02 of the project repo and converted it to
a vite/react app with all packages @latest as of May 29, 2023.

It took the better part of a day to get things working and to figure out how things are working. Not bad I think.

The important thing is, both the site (in dev mode) and storybook are working correctly and build is completing with no errors.

## Things I'm working on or have done to this point

- get rid of enum type? Not sure, it's not hurting anything at the moment
- type Props belongs strictly to the component. Keep short if not exporting
  I renamed severl component props to just 'Props' but I'm having second thoughts
- get rid of \* imports/exports (be explicit)
  I believe I should be explicit about what I am exporting
- Figure out types and get rid of explicit anys
  I dont want to see 'any' in this code. But not sure what type some of them are yet
- implement alternative to use-dark-mode (outdated, not maintained)
  I temporarily replaced with @fisch0920/use-dark-mode
- implement multi step form (cant use react-hooks-helper due to dependency issues)
  Temporarily made it work by copy js files along with @types d.ts file into src/hooks/rhh
  and import from there.
- declare some basic module types for images (both in .storybook and in my @types dirctories)
