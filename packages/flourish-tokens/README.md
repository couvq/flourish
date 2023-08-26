# flourish-tokens
Tokens package for the Flourish design system.

## How our tokens work
* High level - We use [Figma Tokens Studio](https://tokens.studio/) to create tokens, these are used in our Figma and then synced to our tokens package in code. This way, we maintain a single source of truth for our tokens, and changes in the tokens studio plugin will automatically reflect in Figma as well as in our code.
* Steps:
  1. Change a token value in the Figma Tokens Studio plugin, this will update any place in our Figma where that particular token value is used. 
  2. Commit this token change to our github repo.
  3. Pull any tokens changes to our local workspace, this will appear in the `tokens.json` file.
  4. Run `npm run build`, this does a couple of things - 
      a. Use [token-transformer](https://www.npmjs.com/package/token-transformer) to transform the `tokens.json` file into `output.json`, this is a different json structure needed for the next step.
      b. Use [style dictionary](https://amzn.github.io/style-dictionary/#/) to create a build, this transforms the `output.json` file into scss variables that show up in the `build/scss/_tokens.scss` directory. We can now use this to publish these tokens as an npm package to be used in other projects. For now we are just using scss, but we have the option to output these tokens in any other format we would like, for instance - we could output these tokens into swift ios (`.swift`) or android (`.xml`) formats. All of this transformation configuration is configured inside of the `config.json` file.