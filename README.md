

## Installation

- <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>P</kbd> => Install Playwright => OK
- Install Cucumber plugin
- Install dependencies: 
  - `npm i @cucumber/cucumber -D`
  - `npm i ts-node -D`
- Create folder `src/test/features` and `src/test/steps`
- Install ESLint `npm install eslint --save-dev`
- Configuration `npm init @eslint/config`
- Add prettier in `.eslintrc.json` :
```json
"extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
],
```
- Install Prettier `npm install --save-dev --save-exact prettier`
- Add file `.prettierignore` :
```
package-lock.json
README.md
```
- Add Prettier rule `.prettierrc.json` :
```json
{
    "singleQuote": true
}
```
- Run formatting with Prettier `npx prettier --write .`
- Linking Prettier with ESLint `npm install --save-dev eslint-config-prettier`

