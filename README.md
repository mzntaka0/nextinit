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

### Use this template
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
|atoms|atoms, molecules|Presentational|Ths represents a minimum part of component, only having local state that doesn't rely on anything|
|blocks|organizations|Presentational or Container|This represents a block of components, which could be Header, Footer, Contents, etc.|
|layouts|templates|Container|This represents a layout of the page. This is included in each page block.|
|pages|pages|Container|This represents a instance of each layouts, possibly fetching some data from outside(API server or local store)



```ts
src
├ components
| ├ atoms
| └ blocks
├ pages
| ├ index
| | ├ index.tsx
| | └ layout.tsx
| ├ about
| | ├ index.tsx
| | └ layout.tsx
| .
. .
. .
.
```
