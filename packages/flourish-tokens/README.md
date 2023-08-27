# flourish-tokens
Tokens package for the Flourish design system.

## Installation
`npm i flourish-tokens`

## Usage
 To use tokens globally, import the tokens stylesheets at the root level of your project. If you are using React, that means either at the `index.js` or `App.js` level like this: 

```
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'flourish-tokens/tokens/css/_tokens.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

You can then use the css variables defined in this package in your individual stylesheets like this: 
```
body {
    background-color: var(--f-color-bg-dark);
}
```
note: Currently, we only vend our tokens as a css file - if you use scss in your project, your first step would be the same to import the styles globally. You would then use in your scss files like this:
```
body {
    background-color: #{var(--variablename)};
}
```

We have big plans for our tokens library - including options to vend our tokens as scss variables, javascript variables, and more. Make sure you stay up to date with flourish-tokens for exciting new updates! 

## How our tokens work
 ### High level Overview
  We use [Figma Tokens Studio](https://tokens.studio/) to create our tokens. Figma Tokens Studio is a Figma plugin that allows you to define design tokens, it is a free alternative to the [Figma Variables REST API](https://www.figma.com/developers/api#variables), which we also explored. Tokens are defined in the plugin, used in our Figma design files, and then synced to our tokens package in code. This way, we maintain a single source of truth for our tokens, and changes in the tokens studio plugin will automatically reflect in Figma as well as in our code.

### Steps:
  1. Define or change a token value in the Figma Tokens Studio plugin, this will update any place in our Figma where that particular token value is used. 
  2. Commit this token change to our github repo.
  3. Pull any tokens changes to our local workspace, this will appear in the `tokens.json` file.
  4. Run `npm run build`, this does a couple of things - 
      a. Use [token-transformer](https://www.npmjs.com/package/token-transformer) to transform the `tokens.json` file into `output.json`, this is a different json structure needed for the next step.
      b. Use [style dictionary](https://amzn.github.io/style-dictionary/#/) to create a build, this transforms the `output.json` file into scss and css variables that show up in the `tokens/scss/_tokens.scss` and `tokens/css/_tokens.css` directories. We can now use this to publish these tokens as an npm package to be used in other projects. For now we are just using scss and css, but we have the option to output these tokens in any other format we would like, for instance - we could output these tokens into swift ios (`.swift`) or android (`.xml`) formats. All of this transformation configuration is configured inside of the `config.json` file. At the moment, we are only publishing our tokens as css in this npm package.