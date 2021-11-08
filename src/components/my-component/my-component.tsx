import { Component, Prop, h } from '@stencil/core';
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  @Prop() paramIn: string;

  private getText(): string {
    return this.paramIn ? this.paramIn : 'without param';
  }

  render() {
    return <div>{this.getText()}</div>;
  }
}
