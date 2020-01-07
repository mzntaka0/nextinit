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

|category|Atomic Design|P/C|description|
|-----|-----|-----|
|atoms|atoms, molecules|Presentational|Only having local state that doesn't rely on anything|
|blocks|organizations|Presentational or Container|hoge|
|layout|templates|Container|hoge|



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
