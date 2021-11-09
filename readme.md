## @amauta/input-text


## Properties

| Property       | Attribute       | Description | Type      | Default                                                                                                                                                       |
| -------------- | --------------- | ----------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `inputId`      | `input_id`      |             | `string`  | `''`                                                                                                                                                          |
| `label`        | `label`         |             | `string`  | `''`                                                                                                                                                          |
| `paramClass`   | `param_class`   |             | `any`     | `{     containerClass: 'container-class',     labelClass: 'label-class',     containerInputClass: 'container-input-class',     inputClass: 'input-class'   }` |
| `placeholder`  | `placeholder`   |             | `string`  | `''`                                                                                                                                                          |
| `readonly`     | `readonly`      |             | `boolean` | `false`                                                                                                                                                       |
| `type`         | `type`          |             | `string`  | `''`                                                                                                                                                          |
| `typeValidate` | `type_validate` |             | `string`  | `''`                                                                                                                                                          |
| `validForm`    | `valid_form`    |             | `boolean` | `false`                                                                                                                                                       |
| `value`        | `value`         |             | `any`     | `''`                                                                                                                                                          |


## Events

| Event             | Description | Type               |
| ----------------- | ----------- | ------------------ |
| `eventOnChange`   |             | `CustomEvent<any>` |
| `eventOnFocusin`  |             | `CustomEvent<any>` |
| `eventOnFocusout` |             | `CustomEvent<any>` |
| `eventOnKeyUp`    |             | `CustomEvent<any>` |


*Built with [StencilJS](https://stenciljs.com/)*

### Node Modules
- Run `npm install amauta-input-text`
- On Angular framework uut a script tag similar to this `import * as defineCustomElements from '@amauta/input-text/loader';` in your main.ts file and 
- `// @ts-ignore
  defineCustomElements.defineCustomElements().catch(err => console.error(err));;`
- Then you can use the element anywhere in your template, JSX, html etc
