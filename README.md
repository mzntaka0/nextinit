# nextinit
A useful boilerplate for next.js w/ TypeScript, GraphQL or Antdesign

### Dependencies
See "dependencies" values in package.json


### How to use this template
* Click the button of `Use this template`

or 

* manually create a new project using this template
```
git clone https://github.com/mzntaka0/nextinit.git ${project_name}
```

#### If you wanna use Antdesign with this template, please switch branch to `feature/with_antd` for now.
```
git clone https://github.com/mzntaka0/nextinit.git -b feature/with_antd ${project_name}
```
or 
```
git clone https://github.com/mzntaka0/nextinit.git ${project_name}
cd ${project_name}
git switch -c feature/with_antd origin/feature/with_antd
```


### Initialization
```
cd ${project_name}
yarn install
```


### The categorization policy of components
* based on Atomic Design
* based on Presentational and Container

#### The issues of Atomic Design or Presentational/Container
* The names of each categories might not be so intuitive
* (Too many categories)
* Although both templates and pages have a same directory structure, these seems to be like unnecessarily duplicated.
* The catogrizations, Presentational and Container, are more like an abstract concepts that shouldn't be represented as a directory. (Or still need P/C to distinguish their responsibilities)

#### Proposal for a new categorizations of components.
|New Category|Atomic Design|P/C|description|
-----|-----|-----|-----
|\_atoms|atoms, molecules|Presentational|This represents a minimum part of component, only having local state that doesn't rely on anything. Atoms may only have `useState` not having `useReducer` to enclose states inside.|
|objects|molecules|Presentational|This represents each "objects" concerned by the poinf of view from OOUI. Still only using `useState`(?) (Future Concerning)Objects should basically be dependent on what the content would supply. So should it be inside of contents?|
|sections|organism|Presentational or Container|This represents a block of components, which could be Header, Footer, Contents, etc. This size of components are gonna be a managing unit using a state manager like redux. Refer here: https://medium.com/@rajaraodv/a-guide-for-building-a-react-redux-crud-app-7fe0b8943d0f#.c4yhhvk0d or here: https://www.freecodecamp.org/news/the-best-way-to-architect-your-redux-app-ad9bd16c8e2d/ , https://blog.codeminer42.com/scalable-frontend-3-the-state-layer-b23ed69ca57c/ Sections would have `useReducer` to manage larger states. Each sections/Contents/${content}.tsx should be constructed by combining "objects".   (Future Concerning)Since a content may represent why the page including it is needed for a customer, meaning 1 content for 1 page, possibly it should be included in each \_page directory. Redux hooks could be in content.|
|layouts|templates|Container|This represents a layout of the page probably combinating some blocks. Layouts should be included in each \_page directory.|
|\_pages|pages|Container|This represents a instance of each layouts, possibly fetching some data from outside(API server or local store). Each \_pages/${page}.tsx should be constructed by combining Contents(section).|
|pages|pages|Container|This is only for loading a page from \_pages(each \_pages/${page}/index.tsx.  May be just imported and exported in the file. See an example here: https://github.com/mzntaka0/nextinit/blob/develop/src/pages/index.tsx |

* I would like to use `parts` rather than `atoms` to include a nuance of both atoms and molecules, but I accepted to use that because of the order issue of directory from smaller to bigger concepts.
* layouts would like to be created by the idea inspirated by this article (https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/) (Bonus: Add a `getLayout` function to your layout components)
* to avoid prerendering of non-page files for each particular pages, took an idea of creating \_page directory in components(https://github.com/zeit/next.js/issues/3728#issuecomment-363964953). pages directory only call each index file from \_pages

#### The structure of directory
```ts
src
├ components/
| ├ _atoms/
| ├ objects/
| ├ sections/
| └ _pages/
|     ├ index/
|     | ├ index.tsx
|     | └ lib/
|     |   ├ fetch.tsx
|     |   └ layout.tsx
|     ├ about/
|     | ├ index.tsx
|     | └ lib/
|     |   ├ fetch.tsx
|         └ layout.tsx
├ pages/
| ├ index.tsx
| ├ about.tsx
| .
. .
. .
.
```

### Where to write a layout code
Write here: `components/_pages/${page}/lib/layout.tsx`
This file is gonna be called in index file of each page and re-called in _app.tsx


### How to write a state management code?
Redux code is gonna basically be followed by this article. https://dev.to/davidkpiano/redux-is-half-of-a-pattern-1-2-1hd7
Or refer here(xstate)
https://m.youtube.com/watch?v=o84Xw8qiTCw

### TODO
- [ ] Refactor a data fetching code based on Clean Architecture 
- [ ] Consider that components/\_pages/${page}/lib directory is needed or not. -> extract them to each page's root directory?
- [ ] Refactor resolver of GraphQL Server
- [ ] Auto creating pages files according to components/\_pages/
- [ ] Reflect awesome codes of this page: https://github.com/zeit/next.js/tree/canary/examples/with-typescript-graphql
- [ ] Is the new proposed directory structure really good?
- [ ] Separate Presentator and Container inside of each component(atoms)
