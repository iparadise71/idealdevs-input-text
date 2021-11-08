## @amauta/input-text

## Properties

| Property     | Attribute     | Description | Type     | Default     |
| ------------ | ------------- | ----------- | -------- | ----------- |
| `paramClass` | `param-class` |             | `string` | `undefined` |
| `paramIn`    | `param-in`    |             | `string` | `undefined` |


## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `changeEvent` |             | `CustomEvent<any>` |
| `inputEvent`  |             | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

### Node Modules
- Run `npm install amauta-input-text`
- On Angular framework uut a script tag similar to this `import * as defineCustomElements from '@amauta/input-text/loader';` in your main.ts file and 
- `// @ts-ignore
  defineCustomElements.defineCustomElements().catch(err => console.error(err));;`
- Then you can use the element anywhere in your template, JSX, html etc
