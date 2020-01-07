# nextinit
boilerplate for next.js w/ TypeScript

### Dependencies
```
{
  ...,
  "dependencies": {
    "@types/next": "^9.0.0",
    "@types/react": "^16.9.17",
    "dotenv": "^8.2.0",
    "dotenv-webpack": "^1.7.0",
    "express": "^4.17.1",
    "next": "^9.1.6",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "styled-components": "^4.4.1"
  },
  "devDependencies": {
    "@types/node": "^12.12.21",
    "typescript": "^3.7.4"
  }
}
```

### How to use this template
* Click the button of `Use this template`

or 

* manually create a new project using this template
```
git clone https://github.com/mzntaka0/nextinit.git ${project_name}
```

### Initialization
```
cd ${project_name}
yarn install
```


### The policy of component categorization
* based on Atomic Design
* based on Presentational and Container

#### The issues of Atomic Design or Presentational/Container
* The names of each categories might not be so intuitive
* Too many categories
* Although both templates and pages have a same directory structure, these are like duplicated.
* The catogrizations, Presentational and Container, are more like an abstract concepts that shouldn't be represented as a directory.

#### Proposal for a new categorizations of components.
|New Category|Atomic Design|P/C|description|
-----|-----|-----|-----
|atoms|atoms, molecules|Presentational|This represents a minimum part of component, only having local state that doesn't rely on anything|
|blocks|organizations|Presentational or Container|This represents a block of components, which could be Header, Footer, Contents, etc.|
|layouts|templates|Container|This represents a layout of the page. This is included in each page block.|
|pages|pages|Container|This represents a instance of each layouts, possibly fetching some data from outside(API server or local store)

* I would like to use `parts` rather than `atoms` to include a nuance of both atoms and molecules, but I accepted to use that because of the order issue of directory from smaller to bigger concepts.
* layouts would like to be created by the idea inspirated by this article (https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/) (Bonus: Add a `getLayout` function to your layout components)
* to avoid prerendering of non-page files for each particular pages, took an idea of creating \_page directory in components(https://github.com/zeit/next.js/issues/3728#issuecomment-363964953). pages directory only call each index file from \_pages

#### The structure of directory
```ts
src
├ components/
| ├ atoms/
| ├ blocks/
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
